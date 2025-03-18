const {  driver } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Main {
    async openApp() {
        await driver.startActivity('com.ebay.mobile', 'com.ebay.mobile.home.impl.main.MainActivity');
    }

    async closeApp() {
        await driver.terminateApp('com.ebay.mobile');
    }

    async setElementTextAndSubmit(locator, text) {
        const element = await $(locator);
        await element.setValue(text);
        await driver.pressKeyCode(66); // Press Enter key to submit
    }
    
}
