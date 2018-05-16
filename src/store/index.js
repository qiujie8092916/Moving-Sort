import Vue from 'vue'
import Vuex from 'vuex'
import Stack from '@/utils/stack'
Vue.use(Vuex)

const { floor, random } = Math

export default new Vuex.Store({
  state: {
    range: 100,
    sortingSequence: [],
    stack: new Stack(),
    start: false,
    isUnique: true
  },
  mutations: {
    GENERATOR_SORTING_SEQUENCE (state) {
      state.sortingSequence = []
      for (let i = 0; i < state.range; i++) {
        let rand = floor(random() * state.range)
        if (!state.isUnique) {
          state.sortingSequence.push(rand)
        } else {
          while (isExist(state.sortingSequence, rand)) {
            rand = floor(random() * state.range)
          }
          state.sortingSequence.push(rand)
        }
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

function isExist (arr, ele) {
  return arr.indexOf(ele) > -1
}
