import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Suggest from '@/pages/suggest/Suggest'
import List from '@/pages/list/List'
import Activity from '@/pages/activity/Activity'



Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}, {
			path: '/suggest',
			name: 'suggest',
			component: Suggest
		},{
	        path: '/list',
	        name: 'List',
	        component: List
	    },{
	        path: '/activity',
	        name: 'Activity',
	        component: Activity
	    }
	]
})
