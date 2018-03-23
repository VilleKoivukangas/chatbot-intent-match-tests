/*jshint esversion: 6*/
/*global __dirname, Object*/

(function() {
  'use strict';
  
  module.exports = {
    getArrayOfEdits: () => {
     return [
       { 'editMethods': {'params': {}, 'methods': [''] }},
       { 'editMethods': {'params': {}, 'methods': ['transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['transformToUpperCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['removePunctuationFromEnd'] }},
       { 'editMethods': {'params': {}, 'methods': ['transformToLowerCase', 'removeAllPunctuationMarks'] }},
       { 'editMethods': {'params': {}, 'methods': ['transformToUpperCase', 'removePunctuationFromEnd'] }},
       { 'editMethods': {'params': {}, 'methods': ['transformToLowerCase', 'removeAllPunctuationMarks'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['transformToLowerCase', 'addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['transformToLowerCase', 'addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 10}, 'methods': ['transformToLowerCase', 'addStringToStart'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['transformToLowerCase', 'addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['transformToLowerCase', 'addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['transformToLowerCase', 'addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 10}, 'methods': ['transformToLowerCase', 'addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['addStringToEnd'] }},
       { 'editMethods': {'params': {'amountOfWords': 10}, 'methods': ['addStringToEnd'] }},
       { 'editMethods': {'params': {}, 'methods': ['putMessageWordsToMiddleOfSentence'] }},
       { 'editMethods': {'params': {}, 'methods': ['putMessageWordsToMiddleOfSentence', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['removePunctuationFromEnd', 'putMessageWordsToMiddleOfSentence', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['generateSpellingMistakesToThirdOfWords'] }},
       { 'editMethods': {'params': {}, 'methods': ['generateSpellingMistakesToThirdOfWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['removePunctuationFromEnd', 'generateSpellingMistakesToThirdOfWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['generateSpellingMistakesToHalfOfWords'] }},
       { 'editMethods': {'params': {}, 'methods': ['generateSpellingMistakesToHalfOfWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['removePunctuationFromEnd', 'generateSpellingMistakesToHalfOfWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['generateSpellingMistakesToAllWords'] }},
       { 'editMethods': {'params': {}, 'methods': ['generateSpellingMistakesToAllWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {}, 'methods': ['removePunctuationFromEnd', 'generateSpellingMistakesToAllWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['removeWords'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['removeWords'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['removeWords'] }},
       { 'editMethods': {'params': {'amountOfWords': 10}, 'methods': ['removeWords'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 10}, 'methods': ['removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 1}, 'methods': ['removePunctuationFromEnd','removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 3}, 'methods': ['removePunctuationFromEnd','removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 5}, 'methods': ['removePunctuationFromEnd','removeWords', 'transformToLowerCase'] }},
       { 'editMethods': {'params': {'amountOfWords': 10}, 'methods': ['removePunctuationFromEnd','removeWords', 'transformToLowerCase'] }}
     ]; 
    }
  };
  
})();

