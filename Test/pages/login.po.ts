import { BasePage } from "./basePage";
import { ElementFinder, element, by, promise } from "protractor";

export class LoginPage extends BasePage {
username: ElementFinder;
password: ElementFinder;

    constructor() {
        super();
        this.username = element(by.css('input[type="text"]'));
        this.password = element(by.css('input[type="password"]'));
    }
    
    login():promise.Promise<any> {
        this.username.sendKeys('priyankaadaps');
        this.password.sendKeys('priyankaadaps');
        
        return element(by.cssContainingText('button', 'Login')).click();
        }
    }