import BasePage from "./base.page.js";
import TempEmail from "./temporary-email.page.js";

class CalculatorLegacy extends BasePage {
    get pricingFrameOuter() {
        return $('//iframe[contains(@src, "products/calculator-legacy")]')  
    }
    get pricingFrameInner() {
        return $('#myFrame')
    }
    get computeEngineBtn() {
        return $('#tab-item-1')
    }
    get numberOfInstancesInput() {
        return $('#input_100')
    }
    get operatingSystemDrpdwn() {
        return $('#select_113')
    }
    get freeOs() {
        return $('#select_option_102')
    }
    get provisioningModelDrpdwn() {
        return $('#select_117')
    }
    get regularOpt() {
        return $('#select_option_115')
    }
    get machineSeriesDrpdwn() {
        return $('#select_125')
    }
    get n1Option() {
        return $('#select_option_224')
    }
    get machineTypeDrpdwn() {
        return $('#select_127')
    }
    get standard8Opt() {
        return $('#select_option_474')
    }
    get addGpusChckbx() {
        return $('//md-checkbox[@aria-label="Add GPUs"][1]')
    }
    get gpuTypeDrpdwn() {
        return $('#select_510')
    }
    get nvidiaTeslaV100Opt() {
        return $('#select_option_517')
    }
    get numberOfGpusDrpdwn() {
        return $('#select_512')
    }
    get oneGpuOpt() {
        return $('#select_option_520')
    }
    get localSsdDrpdwn() {
        return $('#select_469')
    }
    get ssd2by375() {
        return $('#select_option_495')
    }
    get locationDrpdwn() {
        return $('#select_133')
    }
    get frankfurtOpt() {
        return $('#select_option_268')
    }
    get committedUsageDrpdwn() {
        return $('#select_140')
    }
    get oneYearOpt() {
        return $('#select_option_138')
    }
    get addToEstimateBtn() {
        return $('//button[contains(text(),"to Estimate")][1]')
    }
    //Regular Expression for VM Class
    get summaryProvisionModel() {
        return $('//div[contains(text(), "Provisioning")]')
    }
    get findRegular() {
        async () => {
        let regular = await CalculatorLegacy.summaryProvisionModel.getText()
        return regular
        }   
    }
    get verficationForRegular() {
        let reg = new RegExp ("Regular")
        return reg
    }
    //Regular Expression for Instance Type
    get summaryInstance() {
        return $('//div[contains(text(), "Instance")]')
    }
    get findInstanceType() {
        async () => {
        let instance = await CalculatorLegacy.summaryInstance.getText()
        return instance
        }
    }
    get verficationForInstance() {
        let reg = new RegExp ("n1-standard-8")
        return reg
    }
    //Regular Expression for Region
    get summaryRegion() {
        return $('//div[contains(text(), "Region")]')
    }
    get findRegion() {
        async () => {
        let region = await CalculatorLegacy.summaryRegion.getText()
        return region
        }
    }
    get verficationForRegion() {
        let reg = new RegExp ("Frankfurt")
        return reg
    }
    //Regular Expression for SSD
    get summarySsd() {
        return $('//div[contains(text(), "SSD:")]')
    }
    get findSsd() {
        async () => {
        let ssd = await CalculatorLegacy.summarySsd.getText()
        return ssd
        }
    }
    get verficationForSsd() {
        let reg = new RegExp ("2x375")
        return reg
    }
    //Regular Expression for Commitment Term
    get summaryCommitment() {
        return $('//div[contains(text(), "term")]')
    }
    get findCommitment() {
        async () => {
        let term = await CalculatorLegacy.summaryCommitment.getText()
        return term
        }
    }
    get verficationForTerm() {
        let reg = new RegExp ("1 Year")
        return reg
    }
    //Manual Calculation
    async manualCalculation() {
        let textPriceOfInstance = $('//div[contains(text(), "Instance")]//following-sibling::div[contains(text(), "USD")]')
        let textPriceOfSsd = $('//div[contains(text(), "SSD:")]//following-sibling::div[contains(text(), "USD")]')
        let textTotalCost = $('//b[contains(text(), "Total Estimated")]')
        let fullTextOfPriceOfInstance = await textPriceOfInstance.getText()
        let instancePrice = parseFloat(fullTextOfPriceOfInstance.slice(4))
        let fullTextOfPriceOfSsd = await textPriceOfSsd.getText()
        let ssdPrice = parseFloat(fullTextOfPriceOfSsd.slice(4))
        let fullTextOfTotal = await textTotalCost.getText()
        let totalCostPrice = parseFloat(fullTextOfTotal.slice(-20, -12).replace(",", ""))
        let add = instancePrice + ssdPrice
        if (add === totalCostPrice) {
            console.log(`Instance type cost: ${instancePrice}
            Local SSD cost: ${ssdPrice}
            Total Cost: ${totalCostPrice}`);
        } console.log("Manual Calculation is not same as the calculation that is done automatically");
        return totalCostPrice
        

    }
    getTotal(){
        return this.total
    }
    //Emailing
    get emailBtn() {
        return $('//button[@title="Email Estimate"]')
    }
    get emailInput() {
        return $('//input[@type="email"]')
    }
    get sendEmailBtn() {
        return $('//button[contains(text(),"Email")]')
    }



}

export default new CalculatorLegacy