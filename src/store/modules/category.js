import * as types from '../mutations-types'

const state = {
  oddIndex: [],
  evenIndex: []
}
const getters = {
  oddIndexs: state => state.oddIndex,
  evenIndexs: state => state.evenIndex
}
const mutations = {
  [types.GET_ODD_INDEX] (state, index) {
    let allOddIndex = []
    for (let i = 0; i < index; index++) {
      if (index % 2 === 1) {
        allOddIndex.push(index)
      }
    }
    state.oddIndex = allOddIndex
  },
  [types.GET_EVEN_INDEX] (state, index) {
    let allEvenIndex = []
    for (let i = 0; i < index; index++) {
      if (index % 2 === 0) {
        allEvenIndex.push(index)
      }
    }
    state.evenIndex = allEvenIndex
  }
}
export default {
  state,
  getters,
  mutations
}
