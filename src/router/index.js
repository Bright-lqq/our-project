import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Detail from '@/pages/Detail/Detail'
import Suggest from '@/pages/suggest/Suggest'


Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, 
    {
			path: '/suggest',
			name: 'suggest',
			component: Suggest
		}
  ]
})
