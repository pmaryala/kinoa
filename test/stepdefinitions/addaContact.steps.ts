import { Then, When, Given } from 'cucumber';
import { AddContactPage } from '../pages/addContact.po';
import { expect } from 'chai';
import { browser } from 'protractor';
import { LoginPage } from '../pages/login.po';

var testConfig = require('../testdata/data.json');

const addContactPage: AddContactPage = new AddContactPage();
const loginPage: LoginPage = new LoginPage();


Given ('user logs in', { timeout: browser.params.normalStepTimeOut }, async () => {
  await loginPage.login(testConfig.username,testConfig.password);
});

When('I select add contact',{ timeout: browser.params.normalStepTimeOut }, async () => {
  await addContactPage.selectAddContact();
}
);

When('I fill details', { timeout: browser.params.normalStepTimeOut }, async () => {
  await addContactPage.fillDetailsOfContact();
  }
);
  
When('I create contact', { timeout: browser.params.normalStepTimeOut }, async () => {
  await addContactPage.createContact();
  await addContactPage.saveContact();
  }
);

Then('contact should be added', { timeout: browser.params.normalStepTimeOut }, async () => {
  await addContactPage.checkStatus().then(async text => {
    await expect(text).to.be.true;
    });
  }
);

When('I search a contact', { timeout: browser.params.normalStepTimeOut }, async () => {
  await addContactPage.searchForContact();
  }
);

Then('contact result should be displayed', { timeout: browser.params.normalStepTimeOut }, async () => {
  await addContactPage.searchResult().then(async status => {
    await expect(status).to.be.true;
    });
});