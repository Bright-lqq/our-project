import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		activityInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.activityInfo = payload;
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/weekendactivity.json')
				.then((response) => {
					context.commit(SET_DATA, response.data.data.activityInfo);
				})
		}
	}
}