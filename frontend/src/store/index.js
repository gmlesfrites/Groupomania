import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module';

import axios from 'axios'
// TODO import { auth } from './auth.module';

// const axios = require('axios');

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
