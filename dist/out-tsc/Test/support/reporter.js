"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
var reporter = require("cucumber-html-reporter");
var fs = require("fs");
// tslint:disable-next-line:no-implicit-dependencies
var mkdirp = require("mkdirp");
var path = require("path");
var jsonReports = path.join(process.cwd(), '/reports/json');
var htmlReports = path.join(process.cwd(), '/reports/html');
// tslint:disable-next-line:prefer-template
var targetJson = jsonReports + '/cucumber_report.json';
var cucumberReporterOptions = {
    jsonFile: targetJson,
    // tslint:disable-next-line:prefer-template
    output: htmlReports + '/cucumber_reporter.html',
    reportSuiteAsScenarios: true,
    theme: 'hierarchy'
};
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.createDirectory = function (dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    };
    Reporter.createHTMLReport = function () {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error('Failed to save cucumber test results to json file.');
            }
        }
    };
    return Reporter;
}());
exports.Reporter = Reporter;
//# sourceMappingURL=reporter.js.map