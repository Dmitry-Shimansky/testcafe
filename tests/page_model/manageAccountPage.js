import {Selector} from 'testcafe';

class ManageAccountPage {
    constructor() {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }
}

export const manageAccountPage = new ManageAccountPage();
