export default class BasePage {
    open (path) {
        return browser.url("https://cloud.google.com/")
    }
}