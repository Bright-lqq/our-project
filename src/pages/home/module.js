import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		swiperInfo: [],
		iconswiper: [],
		hostInfo: [],
		weekendInfo: []
	},
	
	mutations: {
		[SET_DATA](state, payload) {
			state.swiperInfo = payload.swiperInfo;
			state.iconswiper = payload.iconswiper;
			state.hostInfo = payload.hostInfo;
			state.weekendInfo = payload.weekendInfo;
		}
	},
	
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/index.json?city=北京')
				.then((response) => {
					context.commit(SET_DATA, response.data.data);
				})
				.catch();
		}
	},

	getters: {
		abc(state) {
			const result = [];
			state.iconswiper.forEach((value, index) => {
				let page = Math.floor(index / 8)
				if(!result[page]) {
					result[page] = [];
				}
				result[page].push(value);
			});
			return result
		}
	}
}