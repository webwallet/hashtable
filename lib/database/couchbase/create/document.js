'use strict'

const filterJoinSegments = (...segments) => segments.filter(x => !!x).join('::')

async function createDocument({ bucket }, params = {}, prefix = '') {
  let key = filterJoinSegments(prefix, params.id)
  let result = await bucket.upsert_(key, params.value)

  return result
}

module.exports = createDocument
