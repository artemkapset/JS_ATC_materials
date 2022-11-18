import allureReporter from '@wdio/allure-reporter'
import asyncArrayFunctions from '../../../helpers/arrays/asyncArrayFunctions'
import BaseComponent from './base.comp'

class Header extends BaseComponent {
  get searchField() {
    return $(`#filter_keyword`)
  }

  get categoriesList() {
    return $$(`#search-category>li.search-category>a`)
  }

  async selectCategory(categoryName) {
    allureReporter.startStep(`User selects category '${categoryName}'`)

    await this.searchField.click()
    const categories = await this.categoriesList
    const category = await asyncArrayFunctions.findAsync(categories, async (ct) => (await ct.getText()) === categoryName)
    await category.click()

    const screenshot = await browser.takeScreenshot() // on this step screenshot is a string
    allureReporter.addAttachment('Category name', categoryName)
    allureReporter.addAttachment('Screenshot on Main page', Buffer.from(screenshot, 'base64'))
    allureReporter.endStep()
  }

  async makeSeacrh(searchItemName) {
    allureReporter.startStep(`User makes search '${searchItemName}'`)

    await this.searchField.setValue(searchItemName)
    await super.pressKey('Enter')

    allureReporter.addAttachment('Search item name', searchItemName)
    allureReporter.endStep()
  }
}

export default new Header()
