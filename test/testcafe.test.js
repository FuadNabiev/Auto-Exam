import { Selector } from 'testcafe';

// Define the test suite (fixture)
fixture`TestCafe Example Page`
    .page`https://devexpress.github.io/testcafe/example`


test('Check h1 title', async t => {
    const windows = Selector('#windows')
    await t
        .click(windows);
    await t
        .expect(windows.checked).eql(true);
    await t
        .expect(windows.value).eql('Windows');
})