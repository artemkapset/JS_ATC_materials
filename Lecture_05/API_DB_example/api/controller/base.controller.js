export class BaseController {
  /**
   * @param params - object with token and base url
   */
  constructor(params) {
    this.params = { ...params }
  }
}
