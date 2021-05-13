import {Selector} from 'testcafe';

fixture('testcafe demo').page('https://www.google.com')

test('my-first-test', async t => {
    await t
        .typeText('input[name="q"]', 'testcafe')
        .click('input[name="btnK"]')
        .expect(Selector('div.ellip')
        .innerText).contains('TestCafe')
});
