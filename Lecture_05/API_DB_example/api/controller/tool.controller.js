import got from 'got'
import { URLSearchParams } from 'url'

// // before
// import { JsonRequest } from '../request.js'
// after
import { JsonRequest } from 'http-req-builder'

import { BaseController } from './base.controller.js'

export class ToolController extends BaseController {
  // // before
  // async getAll(queryParams = {}) {
  //   const response = await got(`https://simple-tool-rental-api.glitch.me/tools`, {
  //     searchParams: new URLSearchParams(queryParams),
  //   })
  //   const tools = JSON.parse(response.body)
  //   return tools
  // }

  // // before
  // async getToolById(toolId) {
  //   const response = await got(`https://simple-tool-rental-api.glitch.me/tools/${toolId}`)
  //   const tool = JSON.parse(response.body)
  //   return tool
  // }

  // after 1
  async getAll(queryParams = {}) {
    return (await new JsonRequest().url('https://simple-tool-rental-api.glitch.me/tools').searchParams(new URLSearchParams(queryParams)).send()).body
  }

  // after 1
  async getToolById(toolId) {
    return (await new JsonRequest().url(`https://simple-tool-rental-api.glitch.me/tools/${toolId}`).send()).body
  }
}
