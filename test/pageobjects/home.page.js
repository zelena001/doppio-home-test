const { $ } = require('@wdio/globals')
const Main = require('./main');

/**
 * Home page containing specific selectors and methods for a home page
 */
class HomePage extends Main {
    /**
     * define selectors using getter methods
     */
    get searchBar () {
        return $('//android.widget.TextView[@content-desc="Search Keyword Search on eBay"]');
    }

    async clickSearchBar() {
        await this.searchBar.click();
    }
    
}

module.exports = new HomePage();
