import { ApiClient } from '../api/client.js'

describe('Try auth', () => {
  it('Try auth', async () => {
    const client = new ApiClient()
    const accessToken = await client.authController.register()
    console.log('>>> accessToken: ', accessToken)
  })
})
