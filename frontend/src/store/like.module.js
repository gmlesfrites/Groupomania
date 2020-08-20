import LikeService from '../services/like.service'

export const like = {
  namespaced: true,
  actions: {
    addLike({ commit }, payload) {
      return MessageService.addLike(payload).then(
        (response) => {
          commit('addLikeSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('addLikeFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    addLikeSuccess() {},
    addLikeFailure() {},
    getAllMessagesSuccess(state, response) {
      state.messages = response.data.results
    }
  }
}