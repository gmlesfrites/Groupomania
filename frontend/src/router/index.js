import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'

// import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'Profile',
      // lazy-loaded
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/mod',
      name: 'Moderator',
      // lazy-loaded
      component: () => import('../views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('../views/BoardUser.vue')
    },
    {
      path: '/terms',
      name: 'TermsOfUse',
      component: TermsOfUse
    }
  ]


const router = new VueRouter({
  mode: 'history',

  routes
})

export default router


// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/signup', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

// export default router