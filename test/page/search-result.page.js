import BasePage from "./base.page.js";

class SearchResultPage extends BasePage {
    get calculatorLink() {
        return $('//div[@class="gsc-thumbnail-inside"]//a/b[text()="Google Cloud Pricing Calculator"]')
    }
}

export default new SearchResultPage