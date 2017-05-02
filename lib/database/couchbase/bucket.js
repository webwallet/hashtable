'use strict'

const Cluster = require('./cluster')

class Bucket {
  constructor({ host, port, cluster }) {
    this.cluster = cluster || new Cluster({host, port})
  }
  async open({ name = 'default', auth = {} } = {}) {
    return new Promise((resolve, reject) => {
      let bucket = this.cluster.openBucket(name, auth.password, error => {
        return error ? reject(error) : resolve(bucket)
      })
    })
  }
}

module.exports = Bucket
