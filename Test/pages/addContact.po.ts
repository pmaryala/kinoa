import { $, browser, by, element, ElementFinder, promise, ExpectedConditions } from "protractor";
import { BasePage } from "./basePage";

export class AddContactPage extends BasePage {
  addDrpdwn: ElementFinder;
  addAContact: ElementFinder;
  firstNameTxtBox: ElementFinder;
  lastNameTxtBox: ElementFinder;
  emailTxtBox: ElementFinder;
  companyNameTxtBox: ElementFinder;
  functionTxtBox: ElementFinder;
  telephone1TxtBox: ElementFinder;
  telephone2TxtBox: ElementFinder;
  mobileTxtBox: ElementFinder;
  faxTxtBox: ElementFinder;
  commentsTxtBox: ElementFinder;
  createByContactBtn: ElementFinder;
  saveBtn: ElementFinder;
  searchBox: ElementFinder;
  searchBtn: ElementFinder;
  resultsSection: ElementFinder;
  contactsTab: ElementFinder;

  constructor() {
    super();
    this.addDrpdwn = element(by.cssContainingText("a.dropdown-toggle", "Add"));
    this.addAContact = element(by.cssContainingText("li a", "Add a contact"));
    this.firstNameTxtBox = $("input#firstname");
    this.lastNameTxtBox = $("input#lastname");
    this.emailTxtBox = $("input#email");
    this.companyNameTxtBox = $("input#company");
    this.functionTxtBox = $("input#function");
    this.telephone1TxtBox = $("input#phone1");
    this.telephone2TxtBox = $("input#phone2");
    this.mobileTxtBox = $("input#cellphone");
    this.faxTxtBox = $("input#fax");
    this.commentsTxtBox = $("textarea#comments");
    this.createByContactBtn = element(
      by.xpath("//*[contains(text(),'Created')]")
    );
    this.saveBtn = element(by.xpath("//*[contains(text(),'Save')]"));
    this.searchBox = $("input#filtreContacts");
    this.searchBtn = element(by.cssContainingText("button", "Search"));
    this.resultsSection = element(by.xpath("//a[contains(text(),'Priyanka')]"));
    this.contactsTab = element(by.xpath("//a[contains(text(),'Contacts')]"));
  }

  selectAddContact(): promise.Promise<any> {
    browser.wait(ExpectedConditions.visibilityOf(this.addDrpdwn), 3000, 'error message')
    this.waitForPresenceOf(this.addDrpdwn, browser.params.waitForObjectTimeOut);
    this.waitForElementToBeClickable(
      this.addDrpdwn,
      browser.params.waitForObjectTimeOut
    );
    return this.addDrpdwn.click().then(async () => {
      await this.addAContact.click();
    });
  }

  fillDetailsOfContact(): promise.Promise<any> {
    this.firstNameTxtBox.sendKeys("Priyanka");
    this.lastNameTxtBox.sendKeys("Maryala");
    this.emailTxtBox.sendKeys("mpriyanka@adaps.com.au");
    this.companyNameTxtBox.sendKeys("adaps");
    this.functionTxtBox.sendKeys("adaps");
    this.telephone1TxtBox.sendKeys("0123456789");
    this.telephone2TxtBox.sendKeys("0123456789");
    this.mobileTxtBox.sendKeys("0123456789");
    this.faxTxtBox.sendKeys("0123456789");
    return this.commentsTxtBox.sendKeys("comments");
  }

  createContact(): promise.Promise<any> {
    this.waitForPresenceOf(
      this.createByContactBtn,
      browser.params.waitForObjectTimeOut
    );
    this.waitForElementToBeClickable(
      this.createByContactBtn,
      browser.params.waitForObjectTimeOut
    );
    return this.createByContactBtn.click();
  }

  saveContact(): promise.Promise<any> {
    this.waitForPresenceOf(this.saveBtn, browser.params.waitForObjectTimeOut);

    return this.saveBtn.click();
  }

  checkStatus(): promise.Promise<any> {
    return element(by.cssContainingText("div strong", "Info!")).isPresent();
  }

  searchForContact(): promise.Promise<any> {
    this.contactsTab.click();
    this.waitForPresenceOf(this.searchBox, browser.params.waitForObjectTimeOut);
    this.searchBox.sendKeys("Priyanka");
    this.waitForElementToBeClickable(
      this.searchBtn,
      browser.params.waitForObjectTimeOut
    );

    return this.searchBtn.click();
  }

  searchResult(): promise.Promise<any> {
    return this.resultsSection.isPresent();
  }
}
