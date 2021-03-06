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
    
    login(username,password):promise.Promise<any> {
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        console.log (`User credentials are : ${username} and  ${password}`);
        
        return element(by.cssContainingText('button', 'Login')).click();
        }
    }