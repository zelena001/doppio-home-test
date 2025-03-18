const { $ } = require('@wdio/globals');
const Main = require('./main');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultPage extends Main {

    resultItem(index) {
        return $(`(//android.view.ViewGroup[@resource-id="com.ebay.mobile:id/search_item_card_details"])[${index}]`);
    }

    async getItemPrice(index) {
        const itemElement = this.resultItem(index);
        const itemPriceElement = itemElement.$('android.widget.TextView[1]');
        return await itemPriceElement.getText();
    }
}

module.exports = new SearchResultPage();