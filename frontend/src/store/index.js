import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module';
import { user } from './user.module'
import { message } from './message.module'

Vue.use (Vuex)

export default new Vuex.Store({
  state: {
  },
  getters : {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    user,
    message
  }
})

