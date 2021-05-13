import {Selector} from 'testcafe';

class PageHeader {
    constructor() {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }
}

export const pageHeader = new PageHeader();
