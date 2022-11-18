import TablePage from "../pageobjects/pageWithTable.page"

describe("Work with table", () => {
  it("Get table data", async () => {
    await TablePage.open()
    const tableData = await TablePage.table.getTableData()
    console.log()
  })
})
