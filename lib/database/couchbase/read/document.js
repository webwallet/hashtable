'use strict'

const delimiter = require('../config.json').keys.delimiter
const filterJoinSegments = require('../utils/filter-join')(delimiter)

async function readDocument({ bucket }, params = {}, prefix = '') {
  let key = filterJoinSegments(prefix, params.id)
  let value = await bucket.get_(key)

  return value
}

module.exports = readDocument
