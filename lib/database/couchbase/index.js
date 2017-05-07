'use strict'

const bluebird = require('bluebird')

const Bucket = require('./bucket')
const create = require('./create')
const read = require('./read')
const update = require('./update')
const delet3 = require('./delete')

const operations = {create, read, update, delete: delet3}

class Hashtable {
  static async connect(params = {}) {
    let bucket = await new Bucket(params).open(params)
    await bluebird.promisifyAll(bucket, {suffix: '_'})
    let context = {bucket}

    let db = {
      create: operations.create(context),
      read:   operations.read(context),
      update: operations.update(context),
      delete: operations.delete(context)
    }

    return db
  }
}

module.exports = Hashtable
