'use strict'

const updateSubdocument = require('./subdocument')

module.exports = (db) => {
  return {
    iou: {
      signatures: params => updateSubdocument(db, params, {
        prefix: 'iou', path: 'sigs', command: 'pushBack'
      })
    }
  }
}
