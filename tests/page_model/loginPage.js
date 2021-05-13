import {Selector} from 'testcafe';

class LoginPage {
    constructor() {
        this.loginInput = Selector('#ctl00_ctl00_Content_Content_pLogin_tbEmail_I');
        this.passwordInput = Selector('#ctl00_ctl00_Content_Content_pLogin_tbPassword_I_CLND');
        this.termOfUserCheckbox = Selector('#ctl00_ctl00_Content_Content_pLogin_cbTermsOfUse_S');
        this.loginButton = Selector('#ctl00_ctl00_Content_Content_pLogin_bLogin');
    }
}

export const loginPage = new LoginPage();
