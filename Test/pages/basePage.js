"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.waitForElementToBeClickable = function (webElement, timeout) {
        var until = protractor_1.protractor.ExpectedConditions;
        var deferred = protractor_1.protractor.promise.defer();
        protractor_1.browser
            .wait(until.elementToBeClickable(webElement), timeout)
            .then(function () { return deferred.fulfill(true); }, function () { return deferred.fulfill(false); });
        return deferred.promise;
    };
    BasePage.prototype.waitForPresenceOf = function (webElement, timeout) {
        var until = protractor_1.protractor.ExpectedConditions;
        var deferred = protractor_1.protractor.promise.defer();
        protractor_1.browser
            .wait(until.presenceOf(webElement), timeout)
            .then(function () { return deferred.fulfill(true); }, function () { return deferred.fulfill(false); });
        return deferred.promise;
    };
    BasePage.prototype.waitForVisibilityOf = function (webElement, timeout) {
        var until = protractor_1.protractor.ExpectedConditions;
        var deferred = protractor_1.protractor.promise.defer();
        protractor_1.browser
            .wait(until.visibilityOf(webElement), timeout)
            .then(function () { return deferred.fulfill(true); }, function () { return deferred.fulfill(false); });
        return deferred.promise;
    };
    BasePage.prototype.waitForNotVisibilityOf = function (webElement, timeout) {
        var until = protractor_1.protractor.ExpectedConditions;
        var deferred = protractor_1.protractor.promise.defer();
        protractor_1.browser
            .wait(until.not(until.presenceOf(webElement)), timeout)
            .then(function () { return deferred.fulfill(true); }, function () { return deferred.fulfill(false); });
        return deferred.promise;
    };
    return BasePage;
}());
exports.BasePage = BasePage;
