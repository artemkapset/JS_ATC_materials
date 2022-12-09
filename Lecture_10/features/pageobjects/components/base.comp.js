module.exports = class BaseComponent {
  async pressKey(key) {
    await browser.keys(key)
  }
}
