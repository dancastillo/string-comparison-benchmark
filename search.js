import { NUM_OF_LOOKUPS } from './constants.js'

export function linearSearch (target) {
  const methods = ['POST', 'PUT', 'PATCH', 'TRACE', 'SEARCH', 'PROPFIND', 'PROPPATCH', 'LOCK']
  for (let i = 0; i < methods.length; i++) {
    if (methods[i] === target) {
      return true
    }
  }
  return false
}

let i = 0
console.time('search')
while (i < NUM_OF_LOOKUPS) {
  linearSearch('POST')
  linearSearch('PUT')
  linearSearch('PATCH')
  linearSearch('TRACE')
  linearSearch('SEARCH')
  linearSearch('PROPFIND')
  linearSearch('PROPPATCH')
  linearSearch('LOCK')
  linearSearch('GET')
  linearSearch('HEAD')
  linearSearch('DELETE')
  linearSearch('OPTIONS')
  i++
}
console.timeEnd('search')
