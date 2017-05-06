'use strict'

/** Executes an operation builder instance (lookupIn or mutateIn) **/
async function execute(operation) {
  return new Promise((resolve, reject) => {
    operation.execute((error, response) => {
      let value = response.contents.reduce((reducer, element) => {
        let {path, error, value} = element
        reducer[path] = error || value
        return reducer
      }, {})

      return resolve({error, value})
    })
  })
}

module.exports = execute
