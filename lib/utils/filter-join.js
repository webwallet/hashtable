'use strict'

function filters(type) {
  switch (type) {
  case 'truthy': default:
    return element => !!element
    break;
  }
}

const filterJoinSegments = (delimiter, filter) => {
  return (...segments) => segments.filter(filters(filter)).join(delimiter)
}

module.exports = filterJoinSegments
