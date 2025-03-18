const homePage  = require('../pageobjects/home.page');
const searchPage = require('../pageobjects/search.page');
const searchResultPage = require('../pageobjects/search-result.page');

describe('Test Ebay App Feature', () => {
    before(async () => {
        await homePage.openApp();
    });

    after(async () => {
        await homePage.closeApp();
    });

    it('Search with valid keyword - item price should not be zero', async () => {
        await homePage.clickSearchBar();
        await searchPage.searchWithText('Tesla');
        expect(await searchResultPage.getItemPrice(1)).not.toEqual('$0.00');
    });
});