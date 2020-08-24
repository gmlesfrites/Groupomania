import UserService from '../services/user.service'

export const user = {
  name : 'user',
  
  namespaced: true,
  state: {
    allUsers: '',
    oneUser:''
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
  // getters :{
  //   getUserById : (state) => {
  //     return state.auth.user
  //   },
  //   getAllUsers : (state) => {
  //     return state.allUsers
  //   }
  // }
}
