'use strict'

const schemas = require('../schemas')

async function readEntity(kind, context, params = {}) {
  let Entity = schemas[kind]
  if (!Entity) throw new Error('invalid-entity-kind')

  return Entity.get(params.id)
    .then(entity => {
      let entities = entity instanceof Array ? [...entity] : [entity]
      return entities.map(entity => entity.plain())
    })
}

async function readTransactionOutput(context, params) {
  let output = {}
  let results = await readEntity('transaction', context, params)
  let { body } = results.find(result => result.id === params.id)

  if (body && body.data && body.data.outputs) {
    output = body.data.outputs[params.index]
  }

  return output
}

const operations = (context) => {
  return {
    iou: params => readEntity('iou', context, params),
    address: params => readEntity('address', context, params),
    transaction: {
      record: params => readEntity('transaction', context, params),
      output: params => readTransactionOutput(context, params)
    }
  }
}

module.exports = operations
