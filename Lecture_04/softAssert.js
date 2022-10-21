import lodash from 'lodash'

class SoftAssert {
  constructor() {
    this.softAssertErrors = []
  }

  add(assertExpression) {
    try {
      // when async code is being executed in the assert expression we have to use async/await mode
      assertExpression()
    } catch (error) {
      this.softAssertErrors.push(error)

      // logs below are for console
      console.log(`ERROR LOG => !=!=!=!=!=!=!=!=!=!=!`)
      console.log(error.message)
      console.log(`END OF THE ERROR LOG !=!=!=!=!=!=!`)
    }
  }

  assertAll() {
    // logs below are for console
    console.log(`---------------- TEST IS FINISHED ----------------`)
    if (this.softAssertErrors.length === 0) {
      return
    } else {
      const errors = lodash.cloneDeep(this.softAssertErrors)
      this.resetErrorsStorage()
      throw new Error(`TEST IS FAILED \n ${errors.map((er) => `${er.message} \n`)}`)
    }
  }

  resetErrorsStorage() {
    this.softAssertErrors = []
  }
}

export default new SoftAssert()
