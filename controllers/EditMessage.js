/*jshint esversion: 6*/
/*global __dirname, Object*/

(function() {
  'use strict';

  class EditMessage {
    constructor() {}
    
    transformToLowerCase(message) {
      return new Promise((resolve, reject) => {
        resolve(message.toLowerCase());
      });
    }
    
    transformToUpperCase(message) {
      return new Promise((resolve, reject) => {
        resolve(message.toUpperCase());
      });
    }
    
    removePunctuationFromEnd(message) {
      return new Promise((resolve, reject) => {
        const lastCharacter = message.substring(message.length-1);
      
        if (lastCharacter == "." || lastCharacter == "?" || lastCharacter == "!") {
          resolve(message.substring(0, message.length-1));
        } else {
          resolve(message);
        }
      });
    }
    
    removeAllPunctuationMarks(message) {
      return new Promise((resolve, reject) => {
        resolve(message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
      });
    }
    
    generateWords(amountOfWords) {
      return new Promise((resolve, reject) => {
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let msg = "";

          for(let i = 0; i < amountOfWords; i++) {
            for(let j = 0; j < 5; j++) {
              msg += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            
            msg += ' ';
            
            if (i == (amountOfWords - 1)) {
              resolve(msg);
            }
          }
      });
    }
    
    addStringToStart(amountOfWords, message) {
      return new Promise((resolve, reject) => {
        this.generateWords(amountOfWords).then((newWords) => {
          resolve(newWords + message);
        });
      });
    }
    
    addStringToEnd(amountOfWords, message) {
      return new Promise((resolve, reject) => {
        this.generateWords(amountOfWords).then((newWords) => {
          resolve(message + ' ' + newWords);
        });
      });
    }
    
    putMessageWordsToMiddleOfSentence(message) {
      return new Promise((resolve, reject) => {
        const amountOfWords = (message.split(' ').length * 5) + 1;
        
        this.generateWords(amountOfWords).then((newWords) => {
          const words = newWords.split(' ');
          let messageString = '';
          let counter = 0;
          
          for (let i = 0; i < words.length; i++) {
            messageString += words[i] + ' ';
            if (i % 5 == 0) {
              if (counter < message.split(' ').length) {
                messageString += message.split(' ')[counter] + ' ';
                counter++;
              } else {
                resolve(messageString);
              }
            }
          }
        });
      });
    }
    
    generateSpellingMistakes(message, num) {
      return new Promise((resolve, reject) => {  
      let messageWords = message.split(' ');
      let result = '';
      
      for (let i = 0; i < messageWords.length; i++) {
        if (i % num === 0 && (i !== 0 && num !== 1)) {
          result += messageWords[i].slice(0, messageWords[i].length - 1) + ' ';
        } else {
          result += messageWords[i] + ' ';
        }
      }
      resolve(result);
    });
    }
    
    generateSpellingMistakesToThirdOfWords(message) {
      return new Promise((resolve, reject) => {  
        if (message.split(' ').length < 3) {
          resolve(message);
        }
        
        this.generateSpellingMistakes(message, 3).then((missSpelledMessage) => {
          resolve(missSpelledMessage);
        });
      });
    }
    
    generateSpellingMistakesToHalfOfWords(message) {
      return new Promise((resolve, reject) => {
        if (message.split(' ').length <= 1) {
          resolve(message);
        }
        
        this.generateSpellingMistakes(message, 2).then((missSpelledMessage) => {
          resolve(missSpelledMessage);
        });
      });
    }
    
    generateSpellingMistakesToAllWords(message) {
      return new Promise((resolve, reject) => {
        this.generateSpellingMistakes(message, 1).then((missSpelledMessage) => {
          resolve(missSpelledMessage);
        });
      });
    }
    
    removeWords(amountToRemove, message) {
      return new Promise((resolve, reject) => {
        const words = message.split(' ');
        
        if (words.length <= 1) {
          resolve(message);
        }
        
        resolve(words.splice((-amountToRemove)).join(' '));
      });
    }
    
    /* 
     * Check which edits to do
     * edit shold be a string of a method name
     * message should be a string what you want to edit 
     * customParams should be an object of custom parameters. For example: {amountToRemove: 1}
    */
    checkEdit(method, message, params) {
      return new Promise((resolve, reject) => {
          switch (method) {
            case 'transformToLowerCase':
              this.transformToLowerCase(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'transformToUpperCase':
              this.transformToUpperCase(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'removePunctuationFromEnd':
              this.removePunctuationFromEnd(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'removeAllPunctuationMarks':
              this.removeAllPunctuationMarks(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'generateSpellingMistakesToThirdOfWords':
              this.generateSpellingMistakesToThirdOfWords(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'addStringToStart':
              this.addStringToStart(params.amountOfWords, message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'addStringToEnd':
              this.addStringToEnd(params.amountOfWords, message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'putMessageWordsToMiddleOfSentence':
              this.putMessageWordsToMiddleOfSentence(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'generateSpellingMistakesToThirdOfWords':
              this.generateSpellingMistakesToThirdOfWords(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'generateSpellingMistakesToHalfOfWords':
              this.generateSpellingMistakesToHalfOfWords(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'generateSpellingMistakesToAllWords':
              this.generateSpellingMistakesToAllWords(message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            case 'removeWords':
              this.removeWords(params.amountOfWords, message).then((editedMessage) => {
                resolve(editedMessage);
              });
              break;
            default:
              console.log("No method name given. Resolving original message");
              resolve(message);
          }
      });
    }
  }
  
  module.exports = EditMessage;

})();
