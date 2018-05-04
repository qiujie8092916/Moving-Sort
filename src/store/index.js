import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const { floor, random } = Math

export default new Vuex.Store({
  state: {
    range: 100,
    sortingSequence: []
  },
  mutations: {
    generatorSortingSequence (state) {
      state.sortingSequence = []
      for (let i = 0; i < state.range; i++) {
        state.sortingSequence.push(floor(random() * state.range))
      }
    }
  }
})
