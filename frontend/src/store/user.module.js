import UserService from '../services/user.service'

export const user = {
  name : 'user',
  namespaced: true,
  state: {
    allUsers: '',
    user:'',
  },
  getters : {
    allUsers : state => {
      return state.allUsers;
    },
    user : state => {
      return state.auth.user
    }
  },
  actions: {
    getAllUsers({ commit }) {
      return UserService.getAllUsers().then(
        (response) => {
          commit('getAllUsersSuccess', response)
          return Promise.resolve(response)

        },
        (error) => {
          commit('getAllUsersFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    getAllUsersSuccess(state, response) {
      state.allUsers = response.data.results
    },
    getAllUsersFailure() {}
  },
}
