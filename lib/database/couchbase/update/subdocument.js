'use strict'

const delimiter = require('../config.json').keys.delimiter
const filterJoinSegments = require('*lib/utils/filterJoin')(delimiter)
const executeOperation = require('../execute')

async function updateSubdocument({ bucket }, params = {}, options) {
  let {prefix = '', path, command} = options
  let key = filterJoinSegments(prefix, params.id)
  let update = bucket.mutateIn(key)[command](path, params.doc, true)

  return executeOperation(update)
}

module.exports = updateSubdocument
