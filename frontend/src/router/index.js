import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import TermsOfUse from '../views/TermsOfUse.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component : Home,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/terms',
      name: 'TermsOfUse',
      component: TermsOfUse
    }
  ]

})