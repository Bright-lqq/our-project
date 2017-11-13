import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './type.js'

export default {
	state: {
		listInfo: [],
		menuleftInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.listInfo = payload.listInfo;
			state.menuleftInfo = payload.menuleftInfo;
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/list.json')
				.then((response) => {
					console.log(response.data.data)
					context.commit(SET_DATA, response.data.data);
				})
		}
	}
}