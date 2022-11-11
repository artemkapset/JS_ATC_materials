describe("'webdriveruniversity - contact us page'", () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
  })

  it("valid submission - submit all information", async () => {
    await browser.url("/Contact-Us/contactus.html")
    const firstName = await $('//*[@name="first_name"]')
    const lastName = await $('//*[@name="last_name"]')
    const emailAddress = await $('//*[@name="email"]')
    const message = await $('//*[@name="message"]')
    const submitButton = await $('//input[@type="submit"]')
    await firstName.setValue("Joe")
    await lastName.setValue("Blogs")
    await emailAddress.setValue("joe_blogs123@mail.com")
    await message.setValue("Hello how are you?")
    await submitButton.click()
    const successfulSubmissionHeader = await $("#contact_reply > h1")
    await expect(successfulSubmissionHeader).toHaveText("Thank You for your Message!")
  })

  it("wait for exist", async () => {
    await browser.url(`https://the-internet.herokuapp.com/dynamic_loading/2`)
    const startButton = await $(`#start>button`)
    await startButton.waitForDisplayed({ timeout: 10000, interval: 500, timeoutMsg: "Button is not displayed after 10000 ms" })
    await startButton.click()
    const greeting = await $(`#finish>h4`)
    console.log(greeting)
    await greeting.waitForExist({ timeout: 6000 })
    console.log(greeting)
    const text = await greeting.getText()
    console.log("TEXT >>> ", text)
    await browser.pause(2000)
  })

  it("wait until", async () => {
    await browser.url(`https://automationteststore.com/`)
    const searchBar = await $(`div.search-bar`)
    await searchBar.waitForDisplayed()
    await searchBar.click()
    await searchBar.waitUntil(async function () {
      return (await this.getAttribute("class")).includes("open")
    })
  })

  it("browser log", async () => {
    console.log(`BROWSER >>>>>`, JSON.stringify(browser))
  })

  it("JS Execute - 1", async () => {
    await browser.url("/Hidden-Elements/index.html")
    await browser.execute(() => {
      return document.getElementById("not-displayed").setAttribute("id", "")
    })
    await browser.execute(() => {
      return (document.body.style.backgroundColor = "tomato")
    })
    await browser.pause(1000)
  })

  it("JS Execute - 2", async () => {
    await browser.url("/Contact-Us/contactus.html")
    const elementToClick = await $(`//input[@type='submit']`)
    await browser.execute("arguments[0].click();", elementToClick)
    await browser.pause(1000)
  })

  it("JS Execute - 3", async () => {
    await browser.url("https://automationteststore.com/")
    console.log(">>>>>", await browser.execute("return document.readyState;"))
    console.log()
  })

  it("dropdowns", async () => {
    await browser.url(`/Dropdown-Checkboxes-RadioButtons/index.html`)
    const pl_dropdown = await $(`#dropdowm-menu-1`)
    await pl_dropdown.selectByAttribute("value", "sql")
    await expect(pl_dropdown).toHaveValueContaining("sql")
    await browser.pause(1000)
  })

  it("dropdowns 2", async () => {
    await browser.url(`https://automationteststore.com/`)
    const searchBar = await $(`div.search-bar`)
    await searchBar.waitForDisplayed()
    await searchBar.click()
    await searchBar.waitUntil(async function () {
      return (await this.getAttribute("class")).includes("open")
    })
    // ul[@id='search-category']//a[text()='Skincare']
    const selectCategory = async (categoryName) => {
      const category = await $(`//ul[@id='search-category']//a[text()='${categoryName}']`)
      await category.click()
    }
    await selectCategory("Skincare")
    await selectCategory("Men")
    await browser.pause(2000)
  })

  it("state commands example 1", async () => {
    await browser.url(`/Dropdown-Checkboxes-RadioButtons/index.html`)
    const cabbage_rb = await $(`//input[@value='cabbage']`)
    const pumpkin_rb = await $(`//input[@value='pumpkin']`)
    await expect(await cabbage_rb.isEnabled()).toBeFalsy()
    await expect(await pumpkin_rb.isSelected()).toBeTruthy()
  })

  it("state commands example 2", async () => {
    await browser.url(`https://automationteststore.com/`)
    const itemsBtn = await $(`ul.topcart>li`)
    const shoppingCart = await $(`ul.dropdown-menu.topcartopen`)
    await expect(await shoppingCart.isExisting()).toBeTruthy() // элемент существует
    await expect(await shoppingCart.isDisplayed()).toBeFalsy() // элемент не виден
    await itemsBtn.moveTo()
    await itemsBtn.waitUntil(
      async function () {
        return (await this.getAttribute("class")).includes("open")
      },
      { timeout: 1500 }
    )
    await expect(await shoppingCart.isDisplayed()).toBeTruthy() // элемент виден
  })
})
