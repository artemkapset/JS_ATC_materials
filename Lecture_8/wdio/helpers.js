const elementHelpers = {
  async hoverAndClick(index) {
    const image = await $(`div.figure:nth-of-type(${index}) img`)
    const viewLink = await $(`div.figure:nth-of-type(${index}) a`)
    await image.moveTo()
    await viewLink.waitForDisplayed()
    await viewLink.click()
  },
}

export default elementHelpers
