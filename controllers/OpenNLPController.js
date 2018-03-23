/*jshint esversion: 6*/
/*global __dirname, Object*/

(function() {
  'use strict';
  const fs = require('fs');
  const cmd = require('node-cmd');
  const Promise = require('bluebird');
  const unirest = require('unirest');
  const config = require('nconf');
  config.file({file: __dirname + '/config.json'});
  
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
        fs.readFile(config.get('path-to-opennlp-params'), "utf8", (e, data) => {
          if (e) throw e;
          
          const string = `Algorithm=${algorithm}\nIterations=${iterations}\nCutoff=${cutoff}`;
          
          fs.writeFile(config.get('path-to-opennlp-params'), string, () => {
            resolve();
          });
        });
      });
    }
    
    runOpenNLPDoccatTrainer(bow, ngram) {
      return new Promise((resolve, reject) => {
        const bowAndNgram = `${ngram ? "opennlp.tools.doccat.NGramFeatureGenerator":""}${bow && ngram ? ",":""}${bow ? "opennlp.tools.doccat.BagOfWordsFeatureGenerator":""}`;
        let cmd = `${config.get('path-to-opennlp-bin')}opennlp DoccatTrainer `;
        cmd += `-model ${config.get('path-to-trainingdata-bin')} -lang en `;
        cmd += `-data ${config.get('path-to-trainingdata-txt')} -encoding UTF-8 `;
        cmd += `-featureGenerators ${bowAndNgram} -params ${config.get('path-to-opennlp-params')}`;
        
        getAsync(cmd).then(data => {
          unirest.get(config.get('chatbot-reload-url'))
            .end((response) => {
              console.log('OpenNLP Finished training. OpenNLP settings reloaded');
              resolve();
            });
        });
      });
    };
    
  }
  
  module.exports = OpenNLPController;

})();
