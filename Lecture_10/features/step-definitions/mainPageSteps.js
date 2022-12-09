const { Given, When, Then } = require('@wdio/cucumber-framework')

const MainPage = require('../pageobjects/main.page')

When('User selects category {string} on Main page', async function (category) {
  await MainPage.header.selectCategory(category)
})

When('User searches item with name {string} on Main page', async function (name) {
  await MainPage.header.makeSeacrh(name)
})
