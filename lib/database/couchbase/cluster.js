'use strict'

const couchbase = require('couchbase')

class Cluster {
  constructor({ scheme = 'couchbase', host = 'localhost', port} = {}) {
    let hostport = [host, port].filter(x => !!x).join(':')
    let url = `${scheme}://${hostport}`
    let cluster = new couchbase.Cluster(url)

    return cluster
  }
}

module.exports = Cluster
