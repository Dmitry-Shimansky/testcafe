import {Selector} from 'testcafe';

class PageModel {
    constructor() {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }
}

export const pageModel = new PageModel();
