'use strict'

const readDocument = require('./document')
const readSubdocument = require('./subdocument')

module.exports = (db) => {
  return {
    raw: params => readDocument(db, params),

    iou: params => readDocument(db, params, 'iou'),
    address: params => readDocument(db, params, 'adr'),
    transaction: {
      record: params => readDocument(db, params, 'txn'),
      outputs: params => readSubdocument(db, params, 'txn', 'data.outputs')
    },

    // block: params => readDocument(db, params, 'blk'),
    // stack: params => readDocument(db, params, 'stk')
  }
}
