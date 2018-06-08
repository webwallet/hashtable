'use strict'

const createDocument = require('./document')

module.exports = (context) => {
  return {
    iou: params => createDocument(context, params, 'iou'),
    address: params => createDocument(context, params, 'adr'),
    transaction: params => createDocument(context, params, 'txn')
  }
}
