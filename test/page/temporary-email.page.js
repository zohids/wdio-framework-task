import BasePage from "./base.page.js";
import CalculatorLegacy from "./calculator-legacy.page.js"

class TempEmail extends BasePage{
    get tempEmailUrl() {
        return 'https://internxt.com/temporary-email'
    }
    get copyBtn() {
        return $('//p[text()="Copy email"]')
    }
    get receivedEmail() {
        return $('//p[text()="Google Cloud Price Estimate"]')
    }
    get refreshBtn() {
        return $('//span[text()="Refresh"]')
    }
    async comparison() {
        let totalCost = $('//td/h3[contains(text(), "USD")]')
        let totalCostText = await totalCost.getText()
        let totalCostInNumbers = parseFloat(totalCostText.slice(4).replace(",", ""))
        // console.log(totalCostInNumbers);
        // console.log(CalculatorLegacy.getTotal);
        return totalCostInNumbers
        
    }

}

export default new TempEmail