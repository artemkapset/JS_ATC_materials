// inContainerValue - сколько чернил в ручке
// letterSize - размер букв

export default class Pen {
  constructor(inContainerValue) {
    // setter is being calling here :-)
    this.inContainerValue = inContainerValue
  }

  get inContainerValue() {
    return this._inContainerValue
  }

  set inContainerValue(value) {
    if (value < 0) {
      console.error("Value must be >= 0")
      return
    }
    this._inContainerValue = value
  }

  get letterSize() {
    return this._letterSize
  }

  set letterSize(value) {
    if (value < 1) {
      console.error("Value must be >= 1")
      return
    }
    this._letterSize = value
  }

  isWorking() {
    return this._inContainerValue >= 0
  }

  writeString(str) {
    if (!this.isWorking()) {
      return ""
    }

    const stringSize = str.length * this.letterSize

    if (stringSize <= this.inContainerValue) {
      this.inContainerValue -= stringSize
      return str
    } else {
      const partOfString = str.substring(0, this.inContainerValue)
      this.inContainerValue = 0
      return partOfString
    }
  }

  printItself() {
    console.log(this)
  }
}
