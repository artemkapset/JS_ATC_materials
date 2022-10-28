const createOrderSchema = {
  title: 'create order',
  type: 'object',
  required: ['created', 'orderId'],
  properties: {
    created: {
      type: 'boolean',
    },
    orderId: {
      type: 'string',
      minLength: 5,
    },
  },
}

export default createOrderSchema
