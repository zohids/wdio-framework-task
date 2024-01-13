class TestData {
    get searchInput() {
        return "Google Cloud Platform Pricing Calculator"
    }
    get numberOfInstances() {
        return 4
    }
    async comparison() {
        let totalCost = $('//td/h3[contains(text(), "USD")]')
        let totalCostText = await totalCost.getText()
        let totalCostInNumbers = parseFloat(totalCostText.slice(4).replace(",", ""))
        return totalCostInNumbers 
    }
    get verificationOfConfigs() {
        return {
            model: "Regular",
            type: "n1-standard-8, vCPUs: 8, RAM: 30 GB",
            region: "europe",
            ssd: "2x375GB",
            term: "1 year"
        }
    }
    async totalCost() {
        let totalCost = $('//div[text()="Compute"]//following-sibling::label[contains(text(), "$")]')
        let totalCostTxt = await totalCost.getText()
        let priceNum = parseFloat(totalCostTxt.slice(1).replace(",", ""))
        return priceNum
    }
}

export default new TestData