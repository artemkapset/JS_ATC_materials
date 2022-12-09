const BasePage = require('./base.page')

class MainPage extends BasePage {
  open() {
    return super.open('/')
  }
}

module.exports = new MainPage()
