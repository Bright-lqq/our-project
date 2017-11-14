import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA, GET_DATA } from './types.js'

export default {
	state: {
		viewInfo: [],
		itemInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.viewInfo = payload.viewInfo;
			state.itemInfo = payload.itemInfo;
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/tour.json')
				.then((response) => {
					context.commit(SET_DATA, response.data.data);
				})
				.catch();
		}
	}
}