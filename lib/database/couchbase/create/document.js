'use strict'

const delimiter = require('../config.json').keys.delimiter
const filterJoinSegments = require('../utils/filter-join')(delimiter)
const validateHash = require('../utils/crypto/validateHash')

async function createDocument({ bucket }, params = {}, prefix = '') {
  let key = filterJoinSegments(prefix, params.id)
  let valid = true//await validateHash(params.doc)
  let result = valid && await bucket.upsert_(key, params.body)

  return result
}

module.exports = createDocument
