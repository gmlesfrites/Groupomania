import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TermsOfUse',
    name: 'TermsOfUse',
    component: TermsOfUse
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
