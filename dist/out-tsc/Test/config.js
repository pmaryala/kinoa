"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    params: {
        normalStepTimeOut: 180000,
    },
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/features/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "localhost:3000/",
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        // format: ['pretty'],
        require: ['../test/**/*.steps.js', '../test/support/hooks.js'],
        tags: '@addcontact'
    }
};
//# sourceMappingURL=config.js.map