describe('Open eBay App', () => {
    before(async () => {
        // Open the eBay app before the test
        await driver.launchApp();
    });

    after(async () => {
        // Close the eBay app after the test
        await driver.closeApp();
    });
    it('should open the eBay app on the emulator', async () => {
        // Wait for the app to launch
        await driver.pause(5000); // Wait for 5 seconds to ensure the app is fully loaded

        // Example: Click on the search bar
        const searchBar = await $('//android.widget.TextView[@content-desc="Search Keyword Search on eBay"]');

        await searchBar.click();
const searchBarTextBox = await $('//android.widget.AutoCompleteTextView[@resource-id="com.ebay.mobile:id/search_src_text"]');
await searchBarTextBox.setValue('Tesla');
await driver.pressKeyCode(66);
        // Example: Enter a search query
        

        // Example: Press the search button
       const FirstItemPrice = await $('(//android.view.ViewGroup[@resource-id=\'com.ebay.mobile:id/search_item_card_details\'])[1]/android.widget.TextView[1]');
        console.log(await FirstItemPrice.getText());
        // Wait for results to load
        await driver.pause(5000); // Wait for 5 seconds to see the results
    });
});