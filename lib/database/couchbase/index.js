'use strict'

const bluebird = require('bluebird')

const bucket = require('./bucket')
const create = require('./create')
const read = require('./read')
const update = require('./update')
const delet3 = require('./delete')

const database = {bucket, create, read, update, delete: delet3}


async function init(params = {}) {
  let bucket = await database.bucket.open(params)
  await bluebird.promisifyAll(bucket, {suffix: '_'})
  let context = {bucket}

  let db = {
    create: database.create(context),
    read:   database.read(context),
    update: database.update(context),
    delete: database.delete(context)
  }

  return db
}

module.exports = {
  init
}
