import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import VeeValidate from "vee-validate";

import Vuex from 'vuex';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.use(VeeValidate);

Vue.use(Vuex)

new Vue({
  router,
  // VeeValidate,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

