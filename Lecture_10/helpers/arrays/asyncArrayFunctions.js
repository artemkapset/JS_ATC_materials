const asyncArrayFunctions = {
  async findIndexAsync(arr, asyncCallback) {
    const promises = arr.map(asyncCallback)
    const results = await Promise.all(promises)
    const index = results.findIndex((result) => result)
    return index
  },

  async findAsync(arr, asyncCallback) {
    const promises = arr.map(asyncCallback)
    const results = await Promise.all(promises)
    const index = results.findIndex((result) => result)
    return arr[index]
  },
}

module.exports = asyncArrayFunctions
