import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Storybook from '@/pages/Storybook/Storybook.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cafe/:id',
      name: 'cafe',
      component: Home
    },
    {
      path: '/storybook',
      name: 'storybook',
      component: Storybook
    }
  ]
})
