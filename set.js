import { ALL_METHODS, NUM_OF_LOOKUPS } from './constants.js'

const methods = new Set(ALL_METHODS)

let i = 0
console.time('set')
while (i < NUM_OF_LOOKUPS) {
  methods.has('POST')
  methods.has('PUT')
  methods.has('PATCH')
  methods.has('TRACE')
  methods.has('SEARCH')
  methods.has('PROPFIND')
  methods.has('PROPPATCH')
  methods.has('LOCK')
  methods.has('GET')
  methods.has('HEAD')
  methods.has('DELETE')
  methods.has('OPTIONS')
  i++
}
console.timeEnd('set')
