'use strict'

const bluebird = require('bluebird')
const directory = require('require-directory')
const database = directory(module)

async function init(params = {}) {
  let bucket = await database.bucket.open(params)

  return bluebird.promisifyAll(bucket, {suffix: '_'})
}

module.exports = {
  init
}
