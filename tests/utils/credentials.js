import {Selector} from 'testcafe';

class Credentials {
    constructor() {
        this.user1 = {
            login: "asseks@tut.by",
            password: "11223344"
        }
    }
}

export const credentials = new Credentials();
