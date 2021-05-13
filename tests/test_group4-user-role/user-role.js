import {Role} from 'testcafe';
import {pageHeader, } from "../page_model/pageHeader";
import {loginPage} from "../page_model/loginPage";
import {manageAccountPage} from "../page_model/manageAccountPage";
import {myDownloadsPage1} from "../page_model/myDownloadsPage";
import {credentials} from "../utils/credentials";

fixture `Login functionality`
    .page `https://www.devexpress.com/`;

const userRole = Role('https://devexpress.com/MyAccount/LogIn', async t => {
    await t
        .typeText(loginPage.loginInput, credentials.user1.login, {paste: true})
        .pressKey('tab')
        .typeText(loginPage.passwordInput, credentials.user1.password, {paste: true})
        .click(loginPage.termOfUserCheckbox)
        .click(loginPage.loginButton);
});

test('Logged user can buy a product', async t => {
    await t.useRole(userRole);
});
