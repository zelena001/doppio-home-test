const { $ } = require('@wdio/globals');
const Main = require('./main');

class SearchPage extends Main {
    /**
     * define selectors
     */
    get searchBarTextBox () {
        return $('//android.widget.AutoCompleteTextView[@resource-id="com.ebay.mobile:id/search_src_text"]');
    }

    /**
     * Enters the provided text into the search bar and submits the search
     * @param {string} text - The text to enter into the search bar
     */
    async searchWithText(text) {
        await this.setElementTextAndSubmit(this.searchBarTextBox, text);
    }
}

module.exports = new SearchPage();
