/*jshint esversion: 7*/
/*global __dirname, Object*/

(function() {
  'use strict';
  
  const express = require('express');
  const app = express();
  const fs = require('fs');
  const readMultipleFiles = require('read-multiple-files');
  
  app.use(express.static('./public'));
  
  app.get('/results', (req, res) => {
    fs.readdir('./results/WhiteSpaceTokenizer', function(err, filenames) {
      const filePaths = filenames.map((filename) => {
        return './results/WhiteSpaceTokenizer/' + filename;
      }); 
      let arr= [];
      readMultipleFiles(filePaths, 'utf8').subscribe({
        next(result) {
          arr.push(result);
        },
        complete() {
          res.json(arr);
        }
      });
    });
  });
  
  app.get('/results/simple', (req, res) => {
    fs.readdir('./results/simpleTokenizer', function(err, filenames) {
      const filePaths = filenames.map((filename) => {
        return './results/simpleTokenizer/' + filename;
      }); 
      let arr= [];
      readMultipleFiles(filePaths, 'utf8').subscribe({
        next(result) {
          arr.push(result);
        },
        complete() {
          res.json(arr);
        }
      });
    });
  });
  
  app.get('/', (req, res) => {
    res.sendFile('index.html');
  });
  
  app.listen('1337', () => {
    console.log("server running");
  });
  
})();