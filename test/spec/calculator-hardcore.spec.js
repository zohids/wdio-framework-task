import HomePage from "../page/home.page.js";
import SearchResultPage from "../page/search-result.page.js"
import Calculator from "../page/calculator.page.js";
import CalculatorLegacy from "../page/calculator-legacy.page.js"
import TempEmail from "../page/temporary-email.page.js";
import { Key } from 'webdriverio'
import TestData from "./test-data.js"

describe('Hardcore', () => {
    it("Hardcore", async () => {
        await HomePage.open()
        await HomePage.searchBtn.click();
        await HomePage.searchField.setValue(TestData.searchInput)
        await HomePage.pressingEnter();
        
        await SearchResultPage.calculatorLink.click()

        await Calculator.addToEstimateBtn[1].click()
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

        await CalculatorLegacy.openingNewTab()
   
        await TempEmail.copyBtn.click()
        
        await CalculatorLegacy.switchingBack()

        await CalculatorLegacy.emailBtn.click()
        await CalculatorLegacy.emailInput.click()
        await CalculatorLegacy.pasting()

        await CalculatorLegacy.sendEmailBtn.click()

        await CalculatorLegacy.switchingToTempEmail()

        await TempEmail.receivedEmail.waitForDisplayed()
        await TempEmail.receivedEmail.click()
        expect(CalculatorLegacy.manualCalculation()).toEqual(TestData.comparison())
    })
});