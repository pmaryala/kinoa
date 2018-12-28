"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
          args: ['no-sandbox', 'disable-gpu', 'headless']
        }
      },
      ignoreUncaughtExceptions: true,
      directConnect: true,
       //seleniumAddress: 'http://localhost:4444/wd/hub',
      
    specs: ['./test/**/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://192.168.99.1:3000/#/login',

    beforeLaunch: function() {
        require('ts-node').register({
          project: 'tsconfig.json'
        });
      },

      cucumberOpts: {
       compiler: "ts:ts-node/register",
       //compiler: [],
       // format: 'json:./reports/json/cucumber_report.json',
        strict: true,
        // format: ['pretty'],
      require: ['./test/stepdefinitions/*.steps.ts', './test/support/hooks.ts'],
        tags: '@addcontact'
    },

    onComplete: function() {
      //reporter.Reporter.createHTMLReport();
      }
};
