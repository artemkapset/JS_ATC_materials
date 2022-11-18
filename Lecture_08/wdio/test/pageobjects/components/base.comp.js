import allureReporter from '@wdio/allure-reporter'

export default class BaseComponent {
  async pressKey(key) {
    allureReporter.addStep(`User press ${key}`)
    await browser.keys(key)
  }
}
