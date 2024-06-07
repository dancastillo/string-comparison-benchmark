import { NUM_OF_LOOKUPS } from './constants.js'

export const ifStatement = (method) => {
  if (method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'TRACE' || method === 'SEARCH' || method === 'PROPFIND' || method === 'PROPPATCH' || method === 'LOCK') {
    return true
  } else {
    return false
  }
}

let i = 0
console.time('if')
while (i < NUM_OF_LOOKUPS) {
  ifStatement('POST')
  ifStatement('PUT')
  ifStatement('PATCH')
  ifStatement('TRACE')
  ifStatement('SEARCH')
  ifStatement('PROPFIND')
  ifStatement('PROPPATCH')
  ifStatement('LOCK')
  ifStatement('GET')
  ifStatement('HEAD')
  ifStatement('DELETE')
  ifStatement('OPTIONS')
  i++
}
console.timeEnd('if')
