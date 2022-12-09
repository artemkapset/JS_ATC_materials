class Table {
  constructor() {
    this.table = '#table1'
    this.headersSelector = 'thead th'
    this.cellSelector = 'tbody td'
    this.rowSelector = 'tbody tr'
  }

  async getHeaders() {
    return $(this.table)
      .$$(this.headersSelector)
      .map(async (header) => {
        return { element: await header, name: await header.getText() }
      })
  }

  getRows() {
    return $(this.table).$$(this.rowSelector)
  }

  async getTableData() {
    const rows = await this.getRows()
    const result = rows.map(async (row) => {
      let result = {}
      const cells = await row.$$(this.cellSelector)
      let index = 0
      for (const cell of cells) {
        console.log(await cell.getText())
        result[(await this.getHeaders())[index].name] = await cell
        index += 1
      }
      return result
    })
    return await Promise.all(result)
  }
}

module.exports = new Table()
