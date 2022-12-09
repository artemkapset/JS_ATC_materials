const Table = require('../pageobjects/components/table.comp')

class TablePage {
  get table() {
    return Table
  }

  open() {
    return browser.url('https://the-internet.herokuapp.com/tables')
  }
}

module.exports = new TablePage()
