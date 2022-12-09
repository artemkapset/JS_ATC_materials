const { Given, When, Then } = require('@wdio/cucumber-framework')

const pages = require('../pageobjects/pagesList')

Given('User is on the {string} page', async (page) => {
  await pages[page].open()
})

When('User waits for {int} second(s)', async (seconds) => {
  await browser.pause(seconds * 1000)
})

Then('User prints to the console custom parameter: {date}', (date) => {
  console.log('>>> Date is: ', date)
})

Given('the following users exist:', (table) => {
  const rows = table.hashes()
  // ...
})
