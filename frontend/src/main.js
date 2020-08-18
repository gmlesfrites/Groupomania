import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VeeValidate from 'vee-validate'
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

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
// Vue.directive('linkified', linkify)

Vue.use(VeeValidate)
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

