import HomePage from "../page/home.page.js";
import SearchResultPage from "../page/search-result.page.js"
import Calculator from "../page/calculator.page.js";
import CalculatorLegacy from "../page/calculator-legacy.page.js"
import TempEmail from "../page/temporary-email.page.js";
import { Key } from 'webdriverio'

describe('Hardcore', () => {
    it("Hardcore", async () => {
        await browser.maximizeWindow();
        await HomePage.open()
        await HomePage.searchBtn.click();
        await HomePage.searchField.setValue("Google Cloud Platform Pricing Calculator")
        await browser.keys("Enter")
        
        await SearchResultPage.calculatorLink.click()

        await Calculator.addToEstimateBtn[1].click()
        await Calculator.legacyVersionLink.click()

        await browser.closeWindow()

        await browser.switchWindow('https://cloud.google.com/products/calculator-legacy')

        await browser.switchToFrame(await CalculatorLegacy.pricingFrameOuter)
        await browser.switchToFrame(await CalculatorLegacy.pricingFrameInner)

        await CalculatorLegacy.computeEngineBtn.click()
        await CalculatorLegacy.numberOfInstancesInput.setValue(4)
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

        let title = await browser.getUrl()

        await browser.newWindow(TempEmail.tempEmailUrl)
        await browser.pause(3000)
        
        await TempEmail.copyBtn.click()
        

        await browser.switchWindow(title)
        await browser.switchToFrame(await CalculatorLegacy.pricingFrameOuter)
        await browser.switchToFrame(await CalculatorLegacy.pricingFrameInner)

        await CalculatorLegacy.emailBtn.click()
        await CalculatorLegacy.emailInput.click()

        await browser.keys([Key.Ctrl, 'v'])
        await browser.pause(3000)

        await CalculatorLegacy.sendEmailBtn.click()

        await browser.switchWindow(TempEmail.tempEmailUrl)

        await TempEmail.receivedEmail.waitForDisplayed(30000)
        await TempEmail.receivedEmail.click()
        expect(CalculatorLegacy.manualCalculation()).toEqual(TempEmail.comparison())
    })
});