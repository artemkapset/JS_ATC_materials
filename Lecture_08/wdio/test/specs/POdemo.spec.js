import MainPage from "./../pageobjects/main.page"
import ProductPage from "./../pageobjects/product.page"

describe("Page Object demo", () => {
  it("Test without Page Object", async () => {
    await browser.url(`https://automationteststore.com/`)
    await $(`#filter_keyword`).click()
    await $(`#category_65`).click()
    await $(`#filter_keyword`).setValue("PAPER TOWNS BY JOHN GREEN")
    await browser.keys("Enter")
    await expect(await $("h1.productname")).toBeDisplayed()
    await expect(await $("h1.productname")).toHaveTextContaining(`Paper Towns by John Green`)
  })

  it("Test with Page Object", async () => {
    await MainPage.open()
    await MainPage.header.selectCategory("Books")
    await MainPage.header.makeSeacrh(`Paper Towns by John Green`)
    await expect(await ProductPage.productName).toBeDisplayed()
    await expect(await ProductPage.productName).toHaveTextContaining(`Paper Towns by John Green`)
  })
})
