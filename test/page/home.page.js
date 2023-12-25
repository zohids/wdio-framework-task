import BasePage from "./base.page.js";

class HomePage extends BasePage {
    open() {
        return super.open("")
        
    }
    
    get searchBtn() {
        return $ ('//div[@jsname="Ohx1pb"]')
    }

    get searchField() {
        return $ ('//input[@type="text"]')
    }
}

export default new HomePage