import { JsonRequest } from 'http-req-builder'
import { BaseController } from './base.controller.js'

export class OrderController extends BaseController {
  async createNewOrder(data) {
    return (await new JsonRequest().method('POST').prefixUrl(this.params.prefixUrl).url('orders').bearerToken(this.params.token).body(data).send())
      .body
  }
}
