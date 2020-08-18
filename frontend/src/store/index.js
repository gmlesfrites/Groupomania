import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module';

//Authentication service
const axios = require('axios').default;

Vue.use (axios)
Vue.use (Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    retrieveToken(context, credentials) {
      axios.post('/login', {
        email: credentials.email,
        password: credentials.password
      })
      .catch(error => error )
      .then(response => response.json())
      .then()

    },
  },
  modules: {
    auth
  }
})
