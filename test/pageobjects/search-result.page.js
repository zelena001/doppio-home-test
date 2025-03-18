const { $ } = require('@wdio/globals');
const Main = require('./main');

class SearchResultPage extends Main {
    /**
     * define selectors
     */
    resultItem(index) {
        return `(//android.view.ViewGroup[@resource-id="com.ebay.mobile:id/search_item_card_details"])[${index}]`;
    }

    resultItemPrice(){
        return `/android.widget.TextView[1]`;
    }

    /**
     * Gets the price of the item at the specified index in the search results
     * @param {number} index - The index of the item in the search results
     * @returns {Promise<string>} - The price of the item as a string
     */
    async getItemPrice(index) {
        const itemPrice =  $(this.resultItem(index) + this.resultItemPrice());
        return await itemPrice.getText();
    }

}

module.exports = new SearchResultPage();