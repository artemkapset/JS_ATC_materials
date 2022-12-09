const { Given, When, Then } = require('@wdio/cucumber-framework')

const ProductPage = require('../pageobjects/product.page')

Then('User validates that element {string} is dispalyed with text {string} on Product page', async function (element, text) {
  await expect(await ProductPage[element]).toBeDisplayed()
  await expect(await ProductPage[element]).toHaveTextContaining(text)
})
