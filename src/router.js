import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/login';
import tabbar from './views/tabbar-layout';
import Home from './views/home';

const router = new VueRouter({
  routes: [{
    path: '/',
    component: tabbar,
    children: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]
  }]
})



export default router
