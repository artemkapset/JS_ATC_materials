const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const chai = require('chai')
chai.use(deepEqualInAnyOrder)
const { expect } = chai
const { Given, When, Then } = require('@wdio/cucumber-framework')
const TablePage = require('../pageobjects/pageWithTable.page')

When('User recives table data', async function () {
  this.add('tableData', await TablePage.table.getTableData())
})

Then('User validates that row № {int} table contains data:', async function (index, table) {
  const [expectedTableRow] = table.hashes()
  const sharedTableData = this.sharedData.tableData[index - 1]
  let actualTableRow = {}

  for (const property in sharedTableData) {
    actualTableRow[property] = await sharedTableData[property].getText()
  }

  expect(actualTableRow).to.deep.equalInAnyOrder(expectedTableRow)
})
