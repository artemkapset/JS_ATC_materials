import { ToolController } from './controller/tool.controller.js'
import { OrderController } from './controller/order.controller.js'
import { AuthController } from './controller/auth.controller.js'

export class ApiClient {
  /**
   * @param params - object with token and prefixUrl (base url)
   */
  constructor(params = {}) {
    const defaultParams = {
      prefixUrl: 'https://simple-tool-rental-api.glitch.me/',
      token: undefined,
    }

    const mergedParams = {
      ...defaultParams,
      ...params,
    }

    this.toolController = new ToolController(mergedParams)
    this.orderController = new OrderController(mergedParams)
    this.authController = new AuthController(mergedParams)
  }

  static async getAuthorizedClient(creds = {}) {
    return new ApiClient({ token: await new ApiClient().authController.register(creds) })
  }
}
