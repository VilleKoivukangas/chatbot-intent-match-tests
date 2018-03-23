/*jshint esversion: 6*/
/*global __dirname, Object*/

(function() {
  'use strict';
  const pathToParamsFile = '../../trainingdata/metamind-demo-story/params/MetatavuBotIntentsParams.txt';
  const fs = require('fs');
  const cmd = require('node-cmd');
  const Promise = require('bluebird');
  const unirest = require('unirest');
  
  const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });

  class OpenNLPController {
    constructor() {}
    
    changeSettings(bow, ngram, algorithm, iterations, cutoff) {
      return new Promise ((resolve, reject) => {
        this.setParameters(algorithm, iterations, cutoff).then(() => {
          this.runOpenNLPDoccatTrainer(bow, ngram).then(() => {
            resolve();
          });
        });
      });
    }
    
    setParameters(algorithm, iterations, cutoff) {
      return new Promise((resolve, reject) => {
        fs.readFile(pathToParamsFile, "utf8", (e, data) => {
          if (e) throw e;
          
          const string = `Algorithm=${algorithm}\nIterations=${iterations}\nCutoff=${cutoff}`;
          
          fs.writeFile(pathToParamsFile, string, () => {
            resolve();
          });
        });
      });
    }
    
    runOpenNLPDoccatTrainer(bow, ngram) {
      return new Promise((resolve, reject) => {
        const bowAndNgram = `${ngram ? "opennlp.tools.doccat.NGramFeatureGenerator":""}${bow && ngram ? ",":""}${bow ? "opennlp.tools.doccat.BagOfWordsFeatureGenerator":""}`;
        const cmd1 = 'cd ../../trainingdata/metamind-demo-story/';
        const cmd2 = `../../apache-opennlp-1.8.4/bin/opennlp DoccatTrainer -model ../../trainingdata/metamind-demo-story/intents/bin/fi-metatavu-bot.bin -lang en -data ../../trainingdata/metamind-demo-story/intents/MetatavuBotIntents.txt -encoding UTF-8 -featureGenerators ${bowAndNgram} -params ../../trainingdata/metamind-demo-story/params/MetatavuBotIntentsParams.txt`;
        const cmd3 = `cd ../../git/chatbot-intent-test`;
        
        getAsync(cmd1).then(data => {
          getAsync(cmd2).then(data => {
            getAsync(cmd3).then(data => {
              unirest.get('http://dev-metamind.com:8080/v1/system/reload')
                .end((response) => {
                  console.log('OpenNLP Finished training. OpenNLP settings reloaded');
                  resolve();
                });
            });
          });
        });
      });
    };
    
  }
  
  module.exports = OpenNLPController;

})();
