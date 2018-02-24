import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Storybook from '@/pages/Storybook/Storybook.vue'
import CustomMap from '@/pages/CustomMap/CustomMap.vue'
import VisualIntro from '@/pages/VisualIntro/VisualIntro.vue'
import VisualIntroStep2 from '@/pages/VisualIntroStep2/VisualIntroStep2.vue'
import Loader from '@/pages/Loader/Loader.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: VisualIntro
    },
    {
      path: '/filter',
      name: 'filter',
      component: VisualIntroStep2
    },
    {
      path: '/storybook',
      name: 'storybook',
      component: Storybook
    },
    {
      path:'/loader',
      name:'loader',
      component: Loader

    },
    {
      path: '/map',
      name: 'map',
      component: CustomMap,
      children: [
        {
          path: '/coffee/:id',
          name: 'coffee',
        },
      ]
    },
  ],
});
