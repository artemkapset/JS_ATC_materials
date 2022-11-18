import BasePage from './base.page'

class ProductPage extends BasePage {
  get productName() {
    return $('h1.productname')
  }
}

export default new ProductPage()
