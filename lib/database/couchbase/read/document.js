'use strict'

const filterJoinSegments = (...segments) => segments.filter(x => !!x).join('::')

async function readDocument({ bucket }, params = {}, prefix = '') {
  let key = filterJoinSegments(prefix, params.id)
  let value = await bucket.get_(key)

  return value
}

module.exports = readDocument
