const { $ } = require('@wdio/globals')
const Main = require('./main');

class HomePage extends Main {
    /**
     * define selectors
     */
    get searchBar () {
        return $('//android.widget.TextView[@content-desc="Search Keyword Search on eBay"]');
    }

    /**
     * Click Search bar to open search page
     */
    async clickSearchBar() {
        await this.searchBar.click();
    }
    
}

module.exports = new HomePage();
