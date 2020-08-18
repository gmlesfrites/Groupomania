import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const axios = require('axios');
Vue.use (Axios)
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
  }
})
