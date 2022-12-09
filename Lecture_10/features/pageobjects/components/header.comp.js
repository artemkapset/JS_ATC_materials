const asyncArrayFunctions = require('../../../helpers/arrays/asyncArrayFunctions')
const BaseComponent = require('./base.comp')

class Header extends BaseComponent {
  get searchField() {
    return $(`#filter_keyword`)
  }

  get categoriesList() {
    return $$(`#search-category>li.search-category>a`)
  }

  async selectCategory(categoryName) {
    await this.searchField.click()
    const categories = await this.categoriesList
    const category = await asyncArrayFunctions.findAsync(categories, async (ct) => (await ct.getText()) === categoryName)
    await category.click()
  }

  async makeSeacrh(searchItemName) {
    await this.searchField.setValue(searchItemName)
    await super.pressKey('Enter')
  }
}

module.exports = new Header()
