// tslint:disable-next-line:no-implicit-dependencies
import * as reporter from 'cucumber-html-reporter';
import * as fs from 'fs';
// tslint:disable-next-line:no-implicit-dependencies
import * as mkdirp from 'mkdirp';

import * as path from 'path';
const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');
// tslint:disable-next-line:prefer-template
const targetJson = jsonReports + '/cucumber_report.json';

const cucumberReporterOptions = {
  jsonFile: targetJson,
  // tslint:disable-next-line:prefer-template
  output: htmlReports + '/cucumber_reporter.html',
  reportSuiteAsScenarios: true,
  theme: 'hierarchy'
};

export class Reporter {
  static createDirectory(dir: string): any {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  }

  static createHTMLReport(): any {
    try {
      reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
    } catch (err) {
      if (err) {
        throw new Error('Failed to save cucumber test results to json file.');
      }
    }
  }
}
