const Header = require('../pageobjects/components/header.comp')

module.exports = class BasePage {
  get header() {
    return Header
  }

  async pressKey(key) {
    allureReporter.addStep(`User press ${key}`)
    await browser.keys(key)
  }

  open(path) {
    return browser.url(`https://automationteststore.com/${path}`)
  }
}
