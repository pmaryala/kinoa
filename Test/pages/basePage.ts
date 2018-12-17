import { browser,promise, protractor } from 'protractor';

export class BasePage  {

  waitForElementToBeClickable(webElement, timeout): promise.Promise<any> {
    const until = protractor.ExpectedConditions;
    const deferred = protractor.promise.defer();
    browser
      .wait(until.elementToBeClickable(webElement), timeout)
      .then(() => deferred.fulfill(true), () => deferred.fulfill(false));

    return deferred.promise;
  }

  waitForPresenceOf(webElement, timeout): promise.Promise<any> {
    const until = protractor.ExpectedConditions;
    const deferred = protractor.promise.defer();
    browser
      .wait(until.presenceOf(webElement), timeout)
      .then(() => deferred.fulfill(true), () => deferred.fulfill(false));

    return deferred.promise;
  }

  waitForVisibilityOf(webElement, timeout): promise.Promise<any> {
    const until = protractor.ExpectedConditions;
    const deferred = protractor.promise.defer();
    browser
      .wait(until.visibilityOf(webElement), timeout)
      .then(() => deferred.fulfill(true), () => deferred.fulfill(false));

    return deferred.promise;
  }

  waitForNotVisibilityOf(webElement, timeout): promise.Promise<any> {
    const until = protractor.ExpectedConditions;
    const deferred = protractor.promise.defer();
    browser
      .wait(until.not(until.presenceOf(webElement)), timeout)
      .then(() => deferred.fulfill(true), () => deferred.fulfill(false));

    return deferred.promise;
  }
}
