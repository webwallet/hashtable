'use strict'

const {transaction} = require('@webwallet/schemas').joi
const gstore = require('gstore-node')()
const { Schema } = gstore

const schema = new Schema({
  body: {joi: transaction.record.body, excludeFromIndexes: true},
})

module.exports = gstore.model('Transaction', schema)
