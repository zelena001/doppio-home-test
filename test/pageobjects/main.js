const { driver } = require('@wdio/globals');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Main {
    
    /**
     * Opens the eBay app and waits for it to load
     */
    async openApp() {
        await driver.startActivity('com.ebay.mobile', 'com.ebay.mobile.home.impl.main.MainActivity');
        await driver.pause(5000); // Wait for 5 seconds to ensure the app is fully loaded
    }

    /**
     * Closes the eBay app
     */
    async closeApp() {
        await driver.terminateApp('com.ebay.mobile');
    }

    /**
     * Sets the provided text into the specified element and submits it
     * @param {WebdriverIO.Element} element - The element to set the text in
     * @param {string} text - The text to set in the element
     */
    async setElementTextAndSubmit(element, text) {
        await element.setValue(text);
        await driver.pressKeyCode(66);
    }
}