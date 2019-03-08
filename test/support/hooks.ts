import { After, AfterAll, Before, BeforeAll } from 'cucumber';
import { browser } from 'protractor';


// tslint:disable-next-line:no-require-imports
const log4js = require('log4js');

BeforeAll({ timeout: 1000 * 1000 }, async () => {

});

// tslint:disable-next-line:typedef
After({ timeout: 100 * 1000 }, async function(scenario) {
  const screenShot = await browser.takeScreenshot();
  // tslint:disable-next-line:no-invalid-this
  this.attach(screenShot, 'image/png');
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
    .window().maximize();

  browser
    .manage()
    .timeouts()
    .implicitlyWait(6000);
 await browser.get('/');
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  await browser.quit();
});
