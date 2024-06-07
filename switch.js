import { NUM_OF_LOOKUPS } from './constants.js'

export function switchStatment (method) {
  switch (method) {
    case 'POST':
    case 'PUT':
    case 'PATCH':
    case 'TRACE':
    case 'SEARCH':
    case 'PROPFIND':
    case 'PROPPATCH':
    case 'LOCK':
      return true
    default:
      return false
  }
}

let i = 0
console.time('switch')
while (i < NUM_OF_LOOKUPS) {
  switchStatment('POST')
  switchStatment('PUT')
  switchStatment('PATCH')
  switchStatment('TRACE')
  switchStatment('SEARCH')
  switchStatment('PROPFIND')
  switchStatment('PROPPATCH')
  switchStatment('LOCK')
  switchStatment('GET')
  switchStatment('HEAD')
  switchStatment('DELETE')
  switchStatment('OPTIONS')
  i++
}
console.timeEnd('switch')
