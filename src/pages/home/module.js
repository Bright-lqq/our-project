import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		swiperInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.swiperInfo = payload;
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/index.json?city=北京')
				.then((response) => {
					context.commit(SET_DATA, response.data.data.swiperInfo);
				})
		}
	}
}