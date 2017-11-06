import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Suggest from '@/pages/suggest/Suggest'

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
		}
	]
})
