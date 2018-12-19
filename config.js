"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = require('./dist/out-tsc/test/support/reporter');

exports.config = {
    params: {
        pageLoadTimeOut: 180000,
        waitForObjectTimeOut: 10000,
        normalStepTimeOut: 180000,
        extendedStepTimeOut: 360000,
        longJobTimeOut: 180 * 1000,
        shortJobTimeOut: 10 * 1000
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['no-sandbox', 'disable-gpu']
        }
      },
      ignoreUncaughtExceptions: true,
      directConnect: true,
       //seleniumAddress: 'http://localhost:4444/wd/hub',
      
    specs: ['./test/**/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://192.168.99.1:3000/',

    beforeLaunch: function() {
        require('ts-node').register({
          project: 'tsconfig.json'
        });
      },

      cucumberOpts: {
       compiler: "ts:ts-node/register",
       //compiler: [],
       format: 'json:./reports/json/cucumber_report.json',
        strict: true,
        // format: ['pretty'],
        require: ['./test/stepdefinitions/*.steps.ts', './test/support/hooks.js'],
        tags: '@addcontact'
    },

    plugins: [
      {
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
          // read the options part
          automaticallyGenerateReport: true,
          removeExistingJsonReportFile: true
        }
      }
    ],

    onComplete: function() {
      reporter.Reporter.createHTMLReport();
      }
};
