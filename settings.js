/*jshint esversion: 6*/
/*global __dirname, Object*/

(function() {
  'use strict';
  
  const settingsObject = {
    "bow-ngram-maxent-iterations_100-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_300-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_500-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_1000-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_5000-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_100-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_300-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_500-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_1000-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_5000-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_100-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_300-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_500-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_1000-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-maxent-iterations_5000-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    // REMOVE BOW
    "ngram-maxent-iterations_100-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_300-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_500-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_1000-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_5000-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_100-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_300-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_500-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_1000-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_5000-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_100-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_300-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_500-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_1000-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-maxent-iterations_5000-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    // REMOVE NGRAM
    "bow-maxent-iterations_100-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_300-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_500-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_1000-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_5000-cutoff_0": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_100-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_300-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_500-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_1000-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_5000-cutoff_2": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_100-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "100",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_300-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "300",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_500-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "500",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_1000-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "1000",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-maxent-iterations_5000-cutoff_3": {
      "algorithm": "MAXENT",
      "iterations": "5000",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    "bow-ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": true
    },
    // REMOVE BOW
    "ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    "ngram-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": false,
      "ngram": true
    },
    // REMOVE NGRAM
    "bow-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_0": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "0",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_2": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "2",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    },
    "bow-naivebayes-iterations_0-cutoff_3": {
      "algorithm": "NAIVEBAYES",
      "iterations": "0",
      "cutoff": "3",
      "bow": true,
      "ngram": false
    }
  };
  
  module.exports = settingsObject;
})();