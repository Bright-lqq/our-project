import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'
import activity from '../pages/activity/moudle.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		activity: activity
	}
})