const { setWorldConstructor, defineParameterType, World } = require("@cucumber/cucumber")

class CustomWorld extends World {
  sharedData = {}

  constructor(options) {
    super(options)
  }

  add(propertyName, data) {
    this.sharedData[propertyName] = data
  }
}

setWorldConstructor(CustomWorld)

const stringRegexp = /[^"]*/

defineParameterType({
  regexp: /date/,
  name: "date",
  useForSnippets: true,
  transformer(str) {
    return new Date().toDateString()
  },
})
