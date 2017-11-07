import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Activity from '@/pages/activity/Activity'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    }
  ]
})
