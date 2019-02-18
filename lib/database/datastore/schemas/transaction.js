'use strict'

const { transaction } = require('@webwallet/schemas').joi

const { instances } = require('gstore-node')
const gstore = instances.get('hashtable')
const { Schema } = gstore

const schema = new Schema({
  body: {joi: transaction.record.body, excludeFromIndexes: true},
})

module.exports = gstore.model('Transaction', schema)
