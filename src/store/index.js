import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const { floor, random } = Math

class Stack {
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

export default new Vuex.Store({
  state: {
    range: 100,
    sortingSequence: [],
    stack: new Stack(),
    start: false
  },
  mutations: {
    GENERATOR_SORTING_SEQUENCE (state) {
      state.sortingSequence = []
      for (let i = 0; i < state.range; i++) {
        state.sortingSequence.push(floor(random() * state.range))
      }
    },
    SET_START (state, start) {
      if (start) {
        state.stack.push(start)
        state.start = start
      } else {
        state.stack.pop(false)
      }
      if (!start && state.stack.isEmpty()) {
        state.start = false
      }
    }
  }
})
