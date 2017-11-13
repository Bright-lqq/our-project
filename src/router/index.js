import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/pages/activity/Activity'
import Home from '@/pages/home/Home'
import Suggest from '@/pages/suggest/Suggest'
import List from '@/pages/list/List'
import Tour from '@/pages/tour/Tour'
import Detail from '@/pages/Detail/Detail'
import Weekendactivity from '@/pages/weekendactivity/Weekendactivity'

Vue.use(Router)

export default new Router({

	routes: [
	    {
	    	path: '/',
			name: 'Home',
			component: Home
		},{
			path: '/detail',
			name: 'Detail',
			component: Detail
	    },{
			path: '/suggest',
			name: 'suggest',
			component: Suggest
		},{
			path: '/list',
			name: 'List',
			component: List
		},{
			path: '/tour',
			name: 'tour',
			component: Tour
		},{
			path: '/activity',
			name: 'activity',
			component: Activity
    	},{
			path: '/weekendactivity',
			name: 'Weekendactivity',
			component: Weekendactivity
		}
	]
})
