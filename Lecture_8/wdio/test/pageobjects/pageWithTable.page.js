import Table from "./components/table.comp"

class TablePage {
  get table() {
    return Table
  }

  open() {
    return browser.url("https://the-internet.herokuapp.com/tables")
  }
}

export default new TablePage()
