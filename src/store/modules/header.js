import * as types from '../mutations-types'

const state = {
  index: 0,
  timer: 1,
  length: 0
}
const mutations = {
  [types.RECEIVE_LENGTH] (state, length) {
    state.length = length
  }
  // [types.SET_PAGES] (state, {obj}) {
  //   for (let i = 0; i < 3; i++) {
  //     obj[i].className = ''
  //   }
  //   let num = state.index
  //   if (state.index >= state.length) {
  //     num = 0
  //   } else if (state.index <= 0) {
  //     num = state.length
  //   }
  //   obj[num - 1].className = 'now'
  // }
}
const actions = {
  startTransition ({commit, state}, obj, page) {
    console.log(obj)
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      commit(types.ADD_TRANSITION, {obj})
      let offsetX = -state.index * 375 + 'px'
      commit(types.SET_TRANSLATE, {x: offsetX, y: 0, z: 0, obj})
      // commit(types.SET_PAGES, {page})
    }, 1500)
  }
}
export default {
  state,
  mutations,
  actions
}
