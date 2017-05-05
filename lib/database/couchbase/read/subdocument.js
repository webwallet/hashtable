'use strict'

const filterJoinSegments = (...segments) => segments.filter(x => !!x).join('::')

async function readSubdocument({ bucket }, params = {}, prefix = '', path) {
  let key = filterJoinSegments(prefix, params.id)
  path += typeof params.index === 'number' ? `[${params.index}]` : ''
  let builder = bucket.lookupIn(key).get(path)

  let value = new Promise ((resolve, reject) => {
    builder.execute((error, response) => {
      let value = response.contents.reduce((reducer, {path, error, value}) => {
        return (reducer[path] = error || value) && reducer
      }, {})

      return resolve({error, value})
    })
  })

  return value
}

module.exports = readSubdocument
