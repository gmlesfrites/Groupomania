import MessageService from '../services/message.service'

export const message = {
  namespaced: true,
  state: {
    createdMessage: { status: '' },
    modifiedMessage: { status: '' },
    deletedMessage: { status: '' },
    messages: '',
  },
  actions: {
    getAllMessages({ commit }) {
      return MessageService.getAllMessages().then(
        (response) => {
          commit('getAllMessagesSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getAllMessagesFailure')
          return Promise.reject(error)
        }
      )
    },
    createMessage({ commit }, message) {
      return MessageService.createMessage(message).then(
        (response) => {
          commit('createMessageSuccess')
          return Promise.resolve(response.data)
        },
        (error) => {
          commit('createMessageFailure')
          return Promise.reject(error)
        }
      )
    },
    answerMessage({ commit }, message) {
      return MessageService.answerMessage(message).then(
        (response) => {
          commit('answerMessageSuccess')
          return Promise.resolve(response.data)
        },
        (error) => {
          commit('answerMessageFailure')
          return Promise.reject(error)
        }
      )
    },
    updateMessage({ commit }, message) {
      return MessageService.updateMessage(message).then(
        (response) => {
          commit('updateMessageSuccess')
          return Promise.resolve(response.data)
        },
        (error) => {
          commit('modifyMessageFailure')
          return Promise.reject(error)
        }
      )
    },
    deleteMessage({ commit }, payload) {
      return MessageService.deleteMessage(payload).then(
        (response) => {
          commit('deleteMessageSuccess')
          return Promise.resolve(response.data)
        },
        (error) => {
          commit('deleteMessageFailure')
          return Promise.reject(error)
        }
      )
    },
    deleteAdminMessage({ commit }, payload) {
        return MessageService.deleteAdminMessage(payload).then(
          (response) => {
            commit('deleteAdminMessageSuccess')
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('deleteAdminMessageFailure')
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
    },
    getAllMessagesFailure() {},
    createMessageSuccess(state) {
      state.createdMessage.status = 'Posted'
    },
    createMessageFailure(state) {
      state.createdMessage.status = 'Not posted'
    },
    answerMessageSuccess(state) {
      state.createdMessage.status = 'Answered'
    },
    answerMessageFailure(state) {
      state.createdMessage.status = 'Not answered'
    },
    updateMessageSuccess(state) {
      state.updatedMessage.status = 'Updated'
    },
    updateMessageFailure(state) {
      state.updatedMessage.status = 'Not updated'
    },
    deleteMessageSuccess(state) {
      state.deletedMessage.status = 'Deleted'
    },
    deleteMessageFailure(state) {
      state.deletedMessage.status = 'Not deleted'
    },
    deleteAdminMessageSuccess(state) {
      state.deletedAdminMessage.status = 'Deleted'
    },
    deleteAdminMessageFailure(state) {
      state.deletedAdminMessage.status = 'Not deleted'
    }
  }
}