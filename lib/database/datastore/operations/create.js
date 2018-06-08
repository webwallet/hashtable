'use strict'

const schemas = require('../schemas')

async function createEntity(kind, context, params = {}) {
  let Entity = schemas[kind]
  if (!Entity) throw new Error('invalid-entity-kind')

  let id = params.id
  delete params.id
  let data = Entity.sanitize(params)
  let entity = new Entity(data, id)

  return entity.save()
    .then(entity => {
      return entity.plain()
    })
}

module.exports = (context) => {
  return {
    iou: params => createEntity('iou', context, params),
    address: params => createEntity('address', context, params),
    transaction: params => createEntity('transaction', context, params)
  }
}
