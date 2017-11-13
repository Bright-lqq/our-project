import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		activityInfo: [],
		landscapeInfo: [],
		healthInfo: [],
		parentchildInfo: [],
		onedayInfo: [],
		guardianInfo: [],
		cityInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {

			state.activityInfo = payload.activityInfo;
			state.landscapeInfo = payload.landscapeInfo;
			state.healthInfo = payload.healthInfo;
			state.parentchildInfo = payload.parentchildInfo;
			state.onedayInfo = payload.onedayInfo;
			state.guardianInfo = payload.guardianInfo;
			state.cityInfo = payload.cityInfo;
			

		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
            axios.get('/static/activity.json')
				.then((response) => {
					console.log(response)
					context.commit(SET_DATA, response.data.data);
				})
		}
	}

	
}