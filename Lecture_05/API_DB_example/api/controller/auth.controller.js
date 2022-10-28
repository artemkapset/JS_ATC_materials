import { JsonRequest } from 'http-req-builder'
import { BaseController } from './base.controller.js'
import { faker } from '@faker-js/faker'

export class AuthController extends BaseController {
  async register({ clientName = faker.name.firstName(), clientEmail = faker.internet.email() } = {}) {
    const body = {
      clientName,
      clientEmail,
    }
    return (await new JsonRequest().method('POST').prefixUrl(this.params.prefixUrl).url('api-clients').body(body).send()).body.accessToken
  }
}
