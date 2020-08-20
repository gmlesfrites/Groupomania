import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Chat from '../views/Chat.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Profile from '../views/Profile.vue'

import store from '../store'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
    if (store.state.auth.status.loggedIn) {
      next()
      return
    }
    next('/chat')
  }
  
  const ifNotAuthenticated = (to, from, next) => {
    if (!store.state.auth.status.loggedIn) {
      next()
      return
    }
    next('/')
  }
  
    const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: ifAuthenticated
      
    },
    {
      path: '/terms',
      name: 'Terms',
      component: TermsOfUse
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router