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
          args: ['no-sandbox', 'disable-gpu']
        }
      },

      directConnect: true,
      // seleniumAddress: 'http://localhost:4444/wd/hub',
      
    specs: ['./Test/**/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: '192.168.99.1:3000/',

    beforeLaunch: function() {
        require('ts-node').register({
          project: 'tsconfig.json'
        });
      },

      cucumberOpts: {
       compiler: "ts:ts-node/register",
       //compiler: [],
        strict: true,
        // format: ['pretty'],
        require: ['./Test/stepdefinitions/*.steps.ts', './Test/support/hooks.js'],
        tags: '@addcontact'
    }
};
