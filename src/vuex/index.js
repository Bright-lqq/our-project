import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'
import list from '../pages/list/module.js'
import weekendactivity from '../pages/weekendactivity/module.js'
import detail from '../pages/detail/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		list: list,	
		weekendactivity:weekendactivity,
		detail: detail
	}
})