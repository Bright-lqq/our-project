import axios from "axios";
import { SET_DATA, AJAX_GET_DATA } from './types.js';

export default {
	state: {
		promoteInfo: [],
		promoInfo: [],
		promoInfo2: [],
		TicketgroupInfo: [],
		CommentImg: [],
		recommendInfo: [],
		imgList: [],
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.imgList = payload.imgList;
			state.promoteInfo = payload.promoteInfo;
			state.promoInfo = payload.promoInfo;
			state.promoInfo2 = payload.promoInfo2;
			state.TicketgroupInfo = payload.TicketgroupInfo;
			state.CommentImg = payload.CommentImg;
			state.recommendInfo = payload.recommendInfo;
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/detail.json')
				.then((response) => {
					context.commit(SET_DATA, response.data.data)
				})
		}
	}
}


