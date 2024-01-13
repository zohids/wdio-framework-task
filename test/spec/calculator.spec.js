import HomePage from "../page/home.page.js";
import SearchResultPage from "../page/search-result.page.js"
import Calculator from "../page/calculator.page.js";
import CalculatorLegacy from "../page/calculator-legacy.page.js"
import TestData from "./test-data.js"

describe("Navigating to Calculator", () => {
    it("Hurt Me Plenty", async () => {
        await HomePage.open()
        await HomePage.searchBtn.click();
        await HomePage.searchField.setValue(TestData.searchInput)
        await HomePage.pressingEnter();
        
        await SearchResultPage.calculatorLink.click()

        await Calculator.addToEstimateBtn[1].click()

        if (await Calculator.legacyVersionLink.isExisting()) {
            await Calculator.legacyVersionLink.click()

            await Calculator.switchingTab()

            await CalculatorLegacy.computeEngineBtn.click()
            await CalculatorLegacy.numberOfInstancesInput.setValue(TestData.numberOfInstances)
            await CalculatorLegacy.operatingSystemDrpdwn.click()
            await CalculatorLegacy.freeOs.click()
            await CalculatorLegacy.provisioningModelDrpdwn.click()
            await CalculatorLegacy.regularOpt.click()
            await CalculatorLegacy.machineSeriesDrpdwn.click()
            await CalculatorLegacy.n1Option.click()
            await CalculatorLegacy.machineTypeDrpdwn.click()
            await CalculatorLegacy.standard8Opt.click()
            await CalculatorLegacy.addGpusChckbx.click()
            await CalculatorLegacy.gpuTypeDrpdwn.click()
            await CalculatorLegacy.nvidiaTeslaV100Opt.click()
            await CalculatorLegacy.numberOfGpusDrpdwn.click()
            await CalculatorLegacy.oneGpuOpt.click()
            await CalculatorLegacy.localSsdDrpdwn.click()
            await CalculatorLegacy.ssd2by375.click()
            await CalculatorLegacy.locationDrpdwn.click()
            await CalculatorLegacy.frankfurtOpt.click()
            await CalculatorLegacy.committedUsageDrpdwn.click()
            await CalculatorLegacy.oneYearOpt.click()
            await CalculatorLegacy.addToEstimateBtn.click()

            if (expect(CalculatorLegacy.findRegular)
            .toHaveTextContaining(CalculatorLegacy.verficationForRegular)) {
                console.log('>>>>> VM Class: Regular');
            }
            if (expect(CalculatorLegacy.findInstanceType)
                .toHaveTextContaining(CalculatorLegacy.verficationForInstance)){
                console.log('>>>>> Instance Type: n1-standard-8');
            }
            if (expect(CalculatorLegacy.findRegion)
                .toHaveTextContaining(CalculatorLegacy.verficationForRegion)){
                console.log('>>>>> Region: Frankfurt');
            }
            if (expect(CalculatorLegacy.findSsd)
                .toHaveTextContaining(CalculatorLegacy.verficationForSsd)){
                console.log('>>>>> SSD: 2x375 GB');
            }
            if (expect(CalculatorLegacy.findCommitment)
                .toHaveTextContaining(CalculatorLegacy.verficationForTerm)){
                console.log('>>>>> Commitment term: 1 Year');
            }
            await CalculatorLegacy.manualCalculation();
        }
        else{
            await Calculator.computeEngineBtn.click()
            await Calculator.advancedSettingsSwitch.click()
            await Calculator.numberOfInstancesInput.setValue(TestData.numberOfInstances)
            await Calculator.operatingSystemDropdown.click()
            await Calculator.freeOs.click()
            await Calculator.regularBtn.click()
            await Calculator.machineSeriesDropdown.click()
            await Calculator.optionN1.click()
            await Calculator.machineTypeDropdown.click()
            await Calculator.optionStandard8.click()
            await Calculator.addGpuSwitch.click()
            await Calculator.gpuModelDropdown.click()
            await Calculator.nvidiaTeslaV100.click()
            await Calculator.numberOfGpusDropdown.click()
            await Calculator.option1Gpu.click()
            await Calculator.localSsdDropdown.click()
            await Calculator.option2by375Gb.click()
            
            await Calculator.regionDropdown.click()
            if(await Calculator.frankfurtOption.isExisting() == false) {
                await Calculator.optionEurope.click()
            }else {
                await Calculator.frankfurtOption.click()
            }
    
            await Calculator.discount1YearBtn.click()
    
            await Calculator.totalCost()
    
            await Calculator.moreOptionsBtn.click()
            await Calculator.viewDetailsOption.click()
    
            await switchToFrame(Calculator.iFrame)
            
            if(expect(await Calculator.provisioningModelTxt.getText()).toEqual(TestData.verificationOfConfigs.model)){
                console.log("Provisioning model: Regular");
            }     
            if(expect(await Calculator.instanceTypeTxt.getText()).toEqual(TestData.verificationOfConfigs.type)){
                console.log("Instance Type: n1-standard-8, vCPUs: 8, RAM: 30 GB");
            }     
            if(expect(await Calculator.regionTxt.getText()).toHaveTextContaining(TestData.verificationOfConfigs.region)){
                console.log(`Region: Netherlands (europe-west4)`);
            }     
            if(expect(await Calculator.chosenSsdTxt.getText()).toEqual(TestData.verificationOfConfigs.ssd)){
                console.log("Local SSD: 2x375GB");
            }     
            if(expect(await Calculator.commitmentTermTxt.getText()).toEqual(TestData.verificationOfConfigs.term)){
                console.log("Committed use discount options: 1 year");
            }

            expect(Calculator.totalCalculationInUI()).toEqual(TestData.totalCost())
        
        }
    })
    

})