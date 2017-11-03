import * as types from '../mutations-types'

const state = {
  collectBooks: []
}
const getters = {
  allBooks: state => state.collectBooks
}
const mutations = {
  [types.COLLECT_BOOKS] (state, {books}) {
    let allBooks = []
    for (let i = 0; i < books.length; i++) {
      let item = books[i]  //books=>content3.data
      for (let j = 0; j < item.dataList.length; j++) {
        let book = item.dataList[j]
        let test = allBooks.find(f => f.name === book.name
      )
        if (!test) {
          allBooks.push(book)
        }
      }
    }
    state.collectBooks = allBooks
  }
}
export default {
  state,
  getters,
  mutations
}
