import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Storybook from '@/pages/Storybook/Storybook.vue'

Vue.use(Router)

// For the moment we will use this, then we will use the state
Vue.prototype.$getCoffees = null

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/storybook',
      name: 'storybook',
      component: Storybook
    }
  ]
})
