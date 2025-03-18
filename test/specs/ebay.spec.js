const homePage  = require('../pageobjects/home.page');
const Main = require('../pageobjects/main');
const searchPage = require('../pageobjects/search.page');
const searchResultPage = require('../pageobjects/search-result.page');

describe('Test Ebay App Feature', () => {
    before(async () => {
        // Open the eBay app before the test
        //await driver.startActivity('com.ebay.mobile', 'com.ebay.mobile.home.impl.main.MainActivity');
        await Main.openApp();
        await driver.pause(5000); // Wait for 5 seconds to ensure the app is fully loaded
    });

    after(async () => {
        // Close the eBay app after the test
        //await driver.terminateApp('com.ebay.mobile');
        await Main.closeApp();
    });

    it('Search with valid keyword - item price should not be zero', async () => {
        // Example: Click on the search bar
        //const searchBar = await $('//android.widget.TextView[@content-desc="Search Keyword Search on eBay"]');
        //await searchBar.click();
        await homePage.clickSearchBar();
        await searchPage.searchWithText('Tesla');
        expect (await searchResultPage.getItemPrice(1),'Price is zero').not.toEqual('$0.00');

        //const searchBarTextBox = await $('//android.widget.AutoCompleteTextView[@resource-id="com.ebay.mobile:id/search_src_text"]');
        //await searchBarTextBox.setValue('Tesla');
        //await driver.pressKeyCode(66); // Press Enter key to search

        // Example: Wait for search results to load
        //await driver.pause(5000); // Wait for 5 seconds to see the results

        // Example: Get the price of the first item in the search results
        //const firstItemPrice = await $('(//android.view.ViewGroup[@resource-id="com.ebay.mobile:id/search_item_card_details"])[1]/android.widget.TextView[1]');
        //console.log(await firstItemPrice.getText());
    });
});