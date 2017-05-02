'use strict'

const Cluster = require('./cluster')

class Bucket {
  static async open({ host, port, name = 'default', auth = {}, cluster } = {}) {
    this.cluster = cluster || new Cluster({host, port})

    return new Promise((resolve, reject) => {
      let bucket = this.cluster.openBucket(name, auth.password, error => {
        return error ? reject(error) : resolve(bucket)
      })
    })
  }
}

module.exports = Bucket
