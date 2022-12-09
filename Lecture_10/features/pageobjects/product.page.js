const BasePage = require('./base.page')

class ProductPage extends BasePage {
  get productName() {
    return $('h1.productname')
  }
}

module.exports = new ProductPage()
