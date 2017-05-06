'use strict'

const delimiter = require('../config.json').keys.delimiter
const filterJoinSegments = require('*lib/utils/filterJoin')(delimiter)
const validateHash = require('*lib/crypto/validateHash')

async function createDocument({ bucket }, params = {}, prefix = '') {
  let key = filterJoinSegments(prefix, params.id)
  let valid = await validateHash(params.doc)
  let result = valid && await bucket.upsert_(key, params.doc)

  return result
}

module.exports = createDocument
