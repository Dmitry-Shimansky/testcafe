import {pageModel} from "../page_model/page_model";

test('A test with PageModel', async t => {
    await t
        .typeText(pageModel.nameInput, 'Peter Parker')
        .click(pageModel.submitButton);
});
