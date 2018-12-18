import { After, AfterAll, Before, BeforeAll } from 'cucumber';
import { browser } from 'protractor';

// tslint:disable-next-line:no-require-imports
const log4js = require('log4js');
const logger = log4js.getLogger();

BeforeAll({ timeout: 1000 * 1000 }, async () => {
  // await browser.get(config.baseUrl);
 
});


// tslint:disable-next-line:typedef
After({ timeout: 100 * 1000 }, async function(scenario) {
  // if (scenario.result.status === Status.FAILED)
  // screenShot is a base-64 encoded PNG
  const screenShot = await browser.takeScreenshot();
  // tslint:disable-next-line:no-invalid-this
  this.attach(screenShot, 'image/png');
  logger.info(`scenario ${scenario.pickle.name} completed execution`);
});

// tslint:disable-next-line:typedef
Before({ timeout: 100 * 1000 }, async function(scenario) {
  // tslint:disable-next-line:no-invalid-this
  this.context = {
    // tslint:disable-next-line:no-invalid-this
    ...this.context
  };
  browser.ignoreSynchronization = true;
 
  browser
    .manage()
    .window().setSize(1044, 784);
    
  browser
    .manage()
    .timeouts()
    .implicitlyWait(6000);
  await browser.get('localhost:3000/');
  logger.info(`scenario ${scenario.pickle.name} execution started`);
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  await browser.quit();
});
