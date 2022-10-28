import got from 'got'
// standart nodejs assertion lib
import { strict as assert } from 'assert'
import { URLSearchParams } from 'url'
import { ToolController } from '../api/controller/tool.controller.js'
import { ApiClient } from '../api/client.js'
import { faker } from '@faker-js/faker'
import arrayHelper from '../helpers/arrayHelper.js'

import schemas from '../jsonSchemas/schemas.js'

import chai from 'chai'
import ajv from 'chai-json-schema-ajv'
chai.use(ajv)
const expect = chai.expect

// how to handle timeout 2000 ms error
// https://pramod-mallick.medium.com/mocha-with-selenium-webdriver-exception-timeout-of-2000ms-exceeded-89df7b6230c6

describe('Tool rental API', () => {
  // before
  it('Get a single tool', async () => {
    const toolId = 1225
    const response = await got(`https://simple-tool-rental-api.glitch.me/tools/${toolId}`)
    const tool = JSON.parse(response.body)
    assert(tool.inStock)
  })

  // before
  it('Get all tools', async () => {
    const category = 'ladders'
    const available = true

    // const response = await got(`https://simple-tool-rental-api.glitch.me/tools?category=${category}&available=${available}`)

    const response = await got(`https://simple-tool-rental-api.glitch.me/tools`, {
      searchParams: new URLSearchParams({ category: category, available: available }),
    })

    const tools = JSON.parse(response.body)
    assert(tools.length > 0, `Expected tools array has length greater than 0`)
    assert(
      tools.every((tool) => tool.inStock),
      `Expected every tool is in stock`
    )
    assert(
      tools.every((tool) => tool.category === category),
      `Expected every tool has ${category} category`
    )
  })

  // after 1
  it('Get a single tool', async () => {
    const toolId = 1225
    const tool = await new ToolController().getToolById(toolId)
    assert(tool.inStock)
  })

  // after 1
  it('Get all tools', async () => {
    const searchParams = {
      category: 'ladders',
      available: true,
    }

    const tools = await new ToolController().getAll(searchParams)

    assert(tools.length > 0, `Expected tools array has length greater than 0`)
    assert(
      tools.every((tool) => tool.inStock),
      `Expected every tool is in stock`
    )
    assert(
      tools.every((tool) => tool.category === searchParams.category),
      `Expected every tool has ${searchParams.category} category`
    )
  })

  // after 2
  it('Get a single tool', async () => {
    const toolId = 1225
    const client = new ApiClient()
    const tool = await client.toolController.getToolById(toolId)
    assert(tool.inStock)
  })

  // after 2
  it('Get all tools', async () => {
    const searchParams = {
      category: 'ladders',
      available: true,
    }
    const client = new ApiClient()
    const tools = await client.toolController.getAll(searchParams)

    assert(tools.length > 0, `Expected tools array has length greater than 0`)
    assert(
      tools.every((tool) => tool.inStock),
      `Expected every tool is in stock`
    )
    assert(
      tools.every((tool) => tool.category === searchParams.category),
      `Expected every tool has ${searchParams.category} category`
    )
  })

  it('Create new order', async () => {
    const client = await ApiClient.getAuthorizedClient()

    const searchParams = {
      available: true,
    }

    const tools = await client.toolController.getAll(searchParams)

    const orderToCreate = {
      toolId: arrayHelper.getRandomItem(tools).id,
      customerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      comment: faker.random.words(5),
    }

    const createdOrder = await client.orderController.createNewOrder(orderToCreate)
    assert(createdOrder.created, `Expected order is created`)

    // Schema validation:
    expect(createdOrder).to.be.jsonSchema(schemas.createOrderSchema, 'message')
  })
})
