'use strict'

const createDocument = require('./document')

module.exports = (db) => {
  return {
    raw: params => createDocument(db, params),

    iou: params => createDocument(db, params, 'iou'),
    address: params => createDocument(db, params, 'adr'),
    transaction: params => createDocument(db, params, 'txn'),

    // block: params => createDocument(db, params, 'blk'),
    // stack: params => createDocument(db, params, 'stk')
  }
}
