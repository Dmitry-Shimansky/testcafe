import {Selector} from 'testcafe';

class MyDownloadsPage {
    constructor() {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }
}

export const myDownloadsPage1 = new MyDownloadsPage();
