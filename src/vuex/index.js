import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'
import suggest from '../pages/suggest/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		suggest : suggest
	}
})