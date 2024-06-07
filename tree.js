import { NUM_OF_LOOKUPS } from './constants.js'

class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class Tree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    const rnLoop = true
    while (rnLoop) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  has (value) {
    if (!this.root) return null

    let current = this.root
    const rnLoop = true

    while (rnLoop) {
      if (!current) return false
      if (value === current.value) return true

      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
  }
}

const methods = ['POST', 'PUT', 'PATCH', 'TRACE', 'SEARCH', 'PROPFIND', 'PROPPATCH', 'LOCK']
const tree = new Tree()

methods.forEach(method => tree.insert(method))

let i = 0
console.time('tree')
while (i < NUM_OF_LOOKUPS) {
  tree.has('POST')
  tree.has('PUT')
  tree.has('PATCH')
  tree.has('TRACE')
  tree.has('SEARCH')
  tree.has('PROPFIND')
  tree.has('PROPPATCH')
  tree.has('LOCK')
  tree.has('GET')
  tree.has('HEAD')
  tree.has('DELETE')
  tree.has('OPTIONS')
  i++
}
console.timeEnd('tree')
