'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var reporter_1 = require('./dist/out-tsc/test/support/reporter');

exports.config = {
  params: {
    pageLoadTimeOut: 180000,
    waitForObjectTimeOut: 10000,
    normalStepTimeOut: 180000,
    extendedStepTimeOut: 360000,
    longJobTimeOut: 180 * 1000,
    shortJobTimeOut: 10 * 1000
  },
  allScriptsTimeout: 600000,
  ignoreUncaughtExceptions: true,
  restartBrowserBetweenTests: true,
  rootElement: 'dr-root',
  useAllAngular2AppRoots: true,
  //SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'localhost:3000',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['no-sandbox', 'disable-gpu']
    }
  },
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['./test/features/**/*.feature'],
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'tsconfig.json'
    });
  },
  onPrepare: function() {
    reporter_1.Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    compiler: [],
    format: 'json:./reports/json/cucumber_report.json',
    require: ['./test/**/*.steps.ts','./test/support/*.ts'],
    strict: true,
    tags: '@addcontact'
  },
  plugins: [
    {
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options: {
        // read the options part
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
      }
    }
  ],

};
