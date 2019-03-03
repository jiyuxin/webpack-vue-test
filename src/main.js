import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import acount from './vue/acount.vue'
import other from './vue/other.vue'
import login from './vue/login.vue'
import register from './vue/register.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {path: '/', redirect: '/acount'},
    {
      path: '/acount',
      component: acount,
      children: [
        {path: 'login', component: login},
        {path: 'register', component: register}
      ]
    },
    {path: '/other', component: other}
  ]
})

let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})