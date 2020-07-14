import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import profile from '@/components/profile'
import skill from '@/components/skill'
import portfolio from '@/components/portfolio'
import contact from '@/components/contact'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
