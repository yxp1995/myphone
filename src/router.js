import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/login'

const router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: Login
  }]
})

export default router
