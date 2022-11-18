import allureReporter from '@wdio/allure-reporter'
import Header from './components/header.comp'

export default class BasePage {
  get header() {
    return Header
  }

  async pressKey(key) {
    allureReporter.addStep(`User press ${key}`)
    await browser.keys(key)
  }

  open(path) {
    allureReporter.addStep(`User opens ${path} page`)
    return browser.url(`https://automationteststore.com/${path}`)
  }
}
