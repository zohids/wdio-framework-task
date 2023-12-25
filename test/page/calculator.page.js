import BasePage from "./base.page.js";

class Calculator extends BasePage {
    get addToEstimateBtn() {
        return $$('//button//descendant::span[text()="Add to estimate"]')
    }
    get computeEngineBtn() {
        return $('//h2[text()="Compute Engine"]')
    }
    get advancedSettingsSwitch() {
        return $('//button[@aria-label="Advanced settings"]')
    }
    get legacyVersionLink() {
        return $('//a[@href="https://cloud.google.com/products/calculator-legacy"]')
    }
    get numberOfInstancesInput() {
        return $('#c11')
    }
    get operatingSystemDropdown() {
        return $('//div[@data-field-type="106"]') // //div[@aria-controls="c64"]
    }
    get freeOs() {
        return $('//li[contains(@data-value, "free")]')
    }
    get regularBtn() {
        return $('//label[text()="Regular"]')
    }
    get machineSeriesDropdown() {
        return $('//div[@aria-controls="c28"]')
    }
    get optionN1() {
        return $('//li[@data-value="n1"]')
    }
    get machineTypeDropdown() {
        return $('//div[@aria-controls="c32"]')
    }
    get optionStandard8() {
        return $('//li[@data-value="n1-standard-8"]')
    }
    get addGpuSwitch() {
        return $('//button[@aria-label="Add GPUs"]')
    }
    get gpuModelDropdown() {
        return $('//div[@data-field-type="158"]') 
    }
    get nvidiaTeslaV100() {
        return $('//li[@data-value="nvidia-tesla-v100"]')
    }
    get numberOfGpusDropdown() {
        return $('//div[@data-field-type="174"]')
    }
    get option1Gpu() {
        return $('//ul[@aria-label="Number of GPUs"]/li[@data-value="1"]')
    }
    get localSsdDropdown() {
        return $('//div[@aria-controls="c40"]')
    }
    get option2by375Gb() {
        return $('//ul[@aria-label="Local SSD"]/li[@data-value="2"]')
    }
    get regionDropdown() {
        return $('//div[@aria-controls="c44"]')
    }
    get frankfurtOption() {
        return $('//li[contains(@data-value, "frankfurt")]')
    }
    get optionEurope() {
        return $('//li[contains(@data-value, "europe")]')
    }
    get discount1YearBtn() {
        return $('//label[text()="1 year"]')
    }
    get moreOptionsBtn() {
        return $('//button[@aria-label="More options"]')
    }
    get viewDetailsOption() {
        return $('//ul[@aria-label="Service options"]/li[1]')  //span[text()="View details"]
    }
    get iFrame() {
        return $('#hfcr')
    }
    get provisioningModelTxt() {
        return $('//div[text()="Provisioning Model"]//following-sibling::div[@class="EWphe HY0Uh"]')
        
    }
    get instanceTypeTxt() {
        return $('//div[text()="Machine type"]//following-sibling::div[contains(text(), "RAM")]')
    }
    get regionTxt() {
        return $('//div[text()="Region"]//following-sibling::div[@class="EWphe HY0Uh"]')
    }
    get chosenSsdTxt() {
        return $('//div[text()="Local SSD"]//following-sibling::div[@class="EWphe HY0Uh"]')
    }
    get commitmentTermTxt() {
        return $('//div[contains(text(), "discount opt")]//following-sibling::div[@class="EWphe HY0Uh"]')
    }
    //Manual Calculation
    async totalCost() {
        let totalCost = $('//div[text()="Compute"]//following-sibling::label[contains(text(), "$")]')
        let totalCostTxt = await totalCost.getText()
        let priceNum = parseFloat(totalCostTxt.slice(1).replace(",", ""))
        return priceNum
    }
    async totalCalculation() {
        let machineCost = $('//div[text()="Machine type"]//parent::div//following-sibling::div[contains(text(), "$")]')
        let gpuCost = $('//div[text()="Number of GPUs"]//parent::div//following-sibling::div[contains(text(), "$")]')
        let ssdCost = $('//div[text()="Local SSD"]//parent::div//following-sibling::div[contains(text(), "$")]')
        let bootDiskCost = $('//div[text()="Boot disk size (GiB)"]//parent::div//following-sibling::div[contains(text(), "$")]')
        let machineCostTxt = await machineCost.getText()
        let machineCostNum
        if(machineCostTxt.includes(",")) {
            machineCostNum = parseFloat(machineCostTxt.slice(1).replace(",", ""))
        }else {
            machineCostNum = parseFloat(machineCostTxt.slice(1))
        }
        let gpuCostTxt = await gpuCost.getText()
        let gpuCostNum
        if(gpuCostTxt.includes(",")) {
            gpuCostNum = parseFloat(gpuCostTxt.slice(1).replace(",", ""))
        }else {
            gpuCostNum = parseFloat(gpuCostTxt.slice(1))
        }
        let ssdCostTxt = await ssdCost.getText()
        let ssdCostNum
        if(ssdCostTxt.includes(",")) {
            ssdCostNum = parseFloat(gpuCostTxt.slice(1).replace(",", ""))
        }else {
            ssdCostNum = parseFloat(ssdCostTxt.slice(1))
        }
        let bootDiskCostTxt = await bootDiskCost.getText()
        let bootDiskCostNum
        if(bootDiskCostTxt.includes(",")) {
            bootDiskCostNum = parseFloat(bootDiskCostTxt.slice(1).replace(",", ""))
        }else {
            bootDiskCostNum = parseFloat(bootDiskCostTxt.slice(1))
        }
        let addTotal = machineCostNum + gpuCostNum + ssdCostNum + bootDiskCostNum
        return addTotal

    }
    
}

export default new Calculator