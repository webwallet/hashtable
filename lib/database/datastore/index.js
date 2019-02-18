'use strict'

const { Datastore } = require('@google-cloud/datastore')
const { Gstore, instances } = require('gstore-node')

const gstore = new Gstore()
instances.set('hashtable', gstore)

const operations = require('./operations')

async function connect(params = {}) {
  let datastore = new Datastore(params)
  let context = {datastore}

  await gstore.connect(datastore)

  let db = {
    create: operations.create(context),
    read:   operations.read(context),
    // update: operations.update(context),
    // delete: operations.delete(context)
  }

  return db
}

module.exports = {
  connect
}
