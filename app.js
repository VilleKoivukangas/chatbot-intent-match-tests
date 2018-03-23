/*jshint esversion: 7*/
/*global __dirname, Object*/

(function() {
  'use strict';
  
  const express = require('express');
  const app = express();
  const fs = require('fs');
  const async = require('async');
  const unirest = require('unirest');
  const config = require('nconf');
  
  const data = require(__dirname + '/data');
  const EditMessage = require(__dirname + '/controllers/EditMessage');
  const OpenNLPController = require(__dirname + '/controllers/OpenNLPController');
  const openNLPSettings = require(__dirname + '/settings');
  const arrayOfMessageEdits = require(__dirname + '/message-edits');
  config.file({file: __dirname + '/config.json'});

  let finalResults = [];
  
  function getSessionId() {
    return new Promise((resolve, reject) => {
      unirest.post(config.get("base-url") + '/v1/sessions')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send({ 
          "locale": config.get('locale'),
          "story": config.get('metamind-story'),
          "timeZone": config.get('timezone'),
          "visitor": config.get('visitor')
        })
        .end((response) => {
          resolve(response);
        });
    });
  };
  
  function sendBotMessage(sessionId, originalMessage, actualMessage, intentType, messageEdits) {
    return new Promise((resolve, reject) => {
      unirest.post(config.get("base-url") + '/v1/messages')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send({ 
          "content": actualMessage,
          "sessionId": sessionId
        })
        .end((response) => {
          if (response.raw_body.response == config.get('expected-bot-response')) {
            buildResultsArray(originalMessage, actualMessage, intentType, true, messageEdits);
          } else {
            buildResultsArray(originalMessage, actualMessage, intentType, false, messageEdits);
          }
          resolve();
        });
    });
  };
  
  function buildResultsArray(originalMessage, actualMessage, intentType, intentMatch, messageEdits) {
    const object = {
      'original_message': originalMessage,
      'actual_message': actualMessage,
      'intent_type': intentType,
      'intent_match': intentMatch,
      'message_edits': messageEdits
    };
    finalResults.push(object);
  };
  
  getSessionId().then((response) => {
    const startTime = Date.now();
    const openNLPController = new OpenNLPController();
    const sessionId = response.raw_body.id;
    let fileName = "";

    // Itrate all settings
    async function settingsLoop() {
      for (let i = 0; i < Object.values(openNLPSettings).length; i++) {
        const bow = Object.values(openNLPSettings)[i].bow;
        const ngram = Object.values(openNLPSettings)[i].ngram;
        const algorithm = Object.values(openNLPSettings)[i].algorithm;
        const iterations = Object.values(openNLPSettings)[i].iterations;
        const cutoff = Object.values(openNLPSettings)[i].cutoff;
        
        console.log(`Training OpenNLP with settings:\nBagOfWords: ${bow}\nNGram: ${ngram}\nAlgorithm: ${algorithm}\nIterations: ${iterations}\nCutoff: ${cutoff}
        `);
        fileName = algorithm + "-" + iterations + "-" + cutoff + "-" + bow + "-" + ngram;
        
        await openNLPController.changeSettings(bow, ngram, algorithm, iterations, cutoff);
        await intentTypeLoop();
        await printResults();
      }
    };

    // Iterate all intent types
    async function intentTypeLoop() {
      for (let i = 0; i < Object.keys(data.intents).length; i++) {
        const intentType = Object.keys(data.intents)[i];
        console.log('\n- Sending messages with intent type: ' + intentType);
        await intentLoop(intentType);
        console.log('\n- Finished with intent type: ' + intentType + " in " + ((Date.now() - startTime) / 1000) + " seconds");
      }
    };

    // Iterate all intents
    async function intentLoop(intentType) {  
      for (let i = 0; i < data.intents[intentType].length; i++) {
        const intent = data.intents[intentType][i];
        console.log('\n- Starting to send messages: ' + intent.msg);
        await createMessage(intentType, intent);
      }
    };

    // Create messages
    async function createMessage(intentType, intent) {
      const editMessage = new EditMessage();
      const originalMessage = intent.msg;
      let messageEdits = [];

      for (let editObject of arrayOfMessageEdits.getArrayOfEdits()) {
        let actualMessage = originalMessage;
        messageEdits = editObject.editMethods.methods;
    
        for (let method of editObject.editMethods.methods) {
          actualMessage = await editMessage.checkEdit(method, actualMessage, editObject.editMethods.params);
        }
        
        await sendBotMessage(sessionId, originalMessage, actualMessage, intentType, messageEdits);
      }
    };

    async function printResults() {
      let totalLongIntents = 0;
      let longIntentMatches = 0;

      let totalMedIntents = 0;
      let medIntentMatches = 0;

      let totalShortIntents = 0;
      let shortIntentMatches = 0;

      let totalOneWordIntents = 0;
      let oneWordIntentMatches = 0;

      finalResults.forEach((result) => {
        if (result.intent_type == 'longIntents') {
          totalLongIntents++;
          if (result.intent_match) {
            longIntentMatches ++;
          }
        }

        if (result.intent_type == 'mediumIntents') {
          totalMedIntents++;
          if (result.intent_match) {
            medIntentMatches ++;
          }
        }

        if (result.intent_type == 'shortIntents') {
          totalShortIntents++;
          if (result.intent_match) {
            shortIntentMatches ++;
          }
        }

        if (result.intent_type == 'oneWordIntents') {
          totalOneWordIntents++;
          if (result.intent_match) {
            oneWordIntentMatches ++;
          }
        }

      });
      fs.writeFile(config.get('result-folder') + fileName + '.json', JSON.stringify(finalResults, null, 2));

      // Log Results
      console.log('\n Long Intent Matches   : ' + longIntentMatches + '/' + totalLongIntents + ' (' + (longIntentMatches/totalLongIntents) * 100 + ' %)');
      console.log('Medium Intent Matches    : ' + medIntentMatches + '/' + totalMedIntents + ' (' + (medIntentMatches/totalMedIntents) * 100 + ' %)');
      console.log('Short Intent Matches     : ' + shortIntentMatches + '/' + totalShortIntents + ' (' + (shortIntentMatches/totalShortIntents) * 100 + ' %)');
      console.log('One word Intent Matches  : ' + oneWordIntentMatches + '/' + totalOneWordIntents + ' (' + (oneWordIntentMatches/totalOneWordIntents) * 100 + ' %)');
      console.log('\n Total matches  : ' + 
        (longIntentMatches+medIntentMatches+shortIntentMatches+oneWordIntentMatches) + 
        '/' + 
        (totalLongIntents+totalMedIntents+totalShortIntents+totalOneWordIntents) +
        ' (' + ((longIntentMatches+medIntentMatches+shortIntentMatches+oneWordIntentMatches)/(totalLongIntents+totalMedIntents+totalShortIntents+totalOneWordIntents)) * 100 + ' %)'
      );
      
      finalResults = [];
    };
    
    // Start testing
    settingsLoop().then(() => {
      console.log("Finished!");
    });
  });
})();


