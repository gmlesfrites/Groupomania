import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'
import Profile from '../views/Profile.vue'

// import store from '../store'

Vue.use(VueRouter)

// const ifAuthenticated = (to, from, next) => {
//   if (store.state.auth.status.loggedIn) {
//     next()
//     return
//   }
//   next('/')
// }

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.state.auth.status.loggedIn) {
//     next()
//     return
//   }
//   next('/wall')
// }


  const routes = [
    {
      path: '/',
      name: 'Home',
      component : Home,
      // beforeEnter: ifNotAuthenticated
    },
    {
      path: '/home',
      name: 'Home',
      component : Home,
      // beforeEnter: ifNotAuthenticated
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      // beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      // beforeEnter: ifNotAuthenticated
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup

    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      // beforeEnter: ifAuthenticated
    },
    {
      path: '/terms',
      name: 'TermsOfUse',
      component: TermsOfUse
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router