import BasePage from './base.page'

class MainPage extends BasePage {
  open() {
    return super.open('/')
  }
}

export default new MainPage()
