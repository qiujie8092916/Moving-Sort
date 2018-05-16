export default class Stack {
  constructor (arr) {
    this.stack = arr || []
  }
  push (ele) {
    return this.stack.push(ele)
  }
  pop () {
    return this.stack.pop()
  }
  size () {
    return this.stack.length
  }
  clear () {
    this.stack = []
  }
  isEmpty () {
    return !this.stack.length
  }
  peek () {
    return this.stack[this.stack.size() - 1]
  }
}
