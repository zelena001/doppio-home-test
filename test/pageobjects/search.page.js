const { $ } = require('@wdio/globals');
const Main = require('./main');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Main {
    /**
     * define selectors using getter methods
     */
    get searchBarTextBox () {
        return $('//android.widget.AutoCompleteTextView[@resource-id="com.ebay.mobile:id/search_src_text"]');
    }

    async searchWithText(text) {
        await this.page.setElementTextAndSubmit(this.searchBarTextBox, text);
    }
}

module.exports = new SearchPage();
