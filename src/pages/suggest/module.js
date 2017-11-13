import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA, SET_LISTDATA, SET_LIST, ADD_LIST, ADD_LIST_DATA } from './types.js'

export default {
	state: {
		hotviewInfo: [],
		hotcityInfo: [],
		historyInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.hotviewInfo = payload.hotviewInfo;
			state.hotcityInfo = payload.hotcityInfo;
		},
		[SET_LIST](state, payload) {
			state.historyInfo = payload;
		},
		[ADD_LIST_DATA](state, payload) {
			state.historyInfo.push(payload);
			console.log(state.historyInfo)
		}
	},
	
	actions: {
		[AJAX_GET_DATA]({commit}) {
			axios.get('/static/suggest.json')
				.then((res) => {
					commit(SET_DATA, res.data.data)
				})
		},
		
		[SET_LISTDATA]({commit}) {
			commit(SET_LIST, [])
		},

		[ADD_LIST]({commit}, res) {
			// console.log(res+"     moudle")
			commit(ADD_LIST_DATA, res)
		}
	}

}   