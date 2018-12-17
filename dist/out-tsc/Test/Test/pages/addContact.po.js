"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var basePage_1 = require("./basePage");
var AddContactPage = /** @class */ (function (_super) {
    __extends(AddContactPage, _super);
    function AddContactPage() {
        var _this = _super.call(this) || this;
        _this.addDrpdwn = protractor_1.element(protractor_1.by.cssContainingText('li a', 'Add'));
        _this.addAContact = protractor_1.element(protractor_1.by.cssContainingText('li a', 'Add a contact'));
        _this.firstNameTxtBox = protractor_1.$('input#firstname');
        _this.lastNameTxtBox = protractor_1.$('input#lastname');
        _this.emailTxtBox = protractor_1.$('input#email');
        _this.companyNameTxtBox = protractor_1.$('input#company');
        _this.functionTxtBox = protractor_1.$('input#function');
        _this.telephone1TxtBox = protractor_1.$('input#phone1');
        _this.telephone2TxtBox = protractor_1.$('input#phone2');
        _this.mobileTxtBox = protractor_1.$('input#cellphone');
        _this.faxTxtBox = protractor_1.$('input#fax');
        _this.commentsTxtBox = protractor_1.$('textarea#comments');
        _this.createdByContactBtn = protractor_1.element(protractor_1.by.cssContainingText('button', 'Created by contact'));
        _this.username = protractor_1.element(protractor_1.by.css('input[type="text"]'));
        _this.password = protractor_1.element(protractor_1.by.css('input[type="password"]'));
        return _this;
    }
    AddContactPage.prototype.selectAddContact = function () {
        var _this = this;
        return this.addDrpdwn.click().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addAContact.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AddContactPage.prototype.fillDetailsOfContact = function () {
        this.firstNameTxtBox.sendKeys('Priyanka');
        this.lastNameTxtBox.sendKeys('Maryala');
        this.emailTxtBox.sendKeys('mpriyanka@adaps.com.au');
        this.companyNameTxtBox.sendKeys('adaps');
        this.functionTxtBox.sendKeys('adaps');
        this.telephone1TxtBox.sendKeys('0123456789');
        this.telephone2TxtBox.sendKeys('0123456789');
        this.mobileTxtBox.sendKeys('0123456789');
        this.faxTxtBox.sendKeys('0123456789');
        return this.commentsTxtBox.sendKeys('comments');
    };
    AddContactPage.prototype.createContact = function () {
        return this.createdByContactBtn.click();
    };
    AddContactPage.prototype.checkStatus = function () {
        var until = protractor_1.protractor.ExpectedConditions;
        var deferred = protractor_1.protractor.promise.defer();
        protractor_1.browser.wait(until.presenceOf(protractor_1.element(protractor_1.by.cssContainingText('div', 'Contact form Priyanka Maryala updated.'))), 10).then(function () { return true; }, function () { return false; });
        return deferred.promise;
    };
    AddContactPage.prototype.login = function () {
        this.username.sendKeys('priyankaadaps');
        this.password.sendKeys('priyankaadaps');
        return protractor_1.element(protractor_1.by.cssContainingText('button', 'Login')).click();
    };
    return AddContactPage;
}(basePage_1.BasePage));
exports.AddContactPage = AddContactPage;
//# sourceMappingURL=addContact.po.js.map