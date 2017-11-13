<template>
	<div style="background: #f5f5f5;">
		<div>{{$store.state.name}}</div>
		<index-header />
		<index-swiper :swiperInfo = "swiperInfo" />
		<index-iconswiper />
		<index-activity />
		<index-hotlist :hostInfo = "hostInfo" />
		<index-weekendlist />
	</div>
</template>

<script>
	import header from './components/Header'
	import swiper from './components/Swiper'
	import iconswiper from './components/Iconswiper'
	import activity from './components/Activity'
	import hotlist from './components/Hotlist'
	import weekendlist from './components/WeekendList'
	import axios from 'axios'
	import { AJAX_GET_DATA } from './types.js'
	import { mapState, mapActions } from 'vuex'

	export default {
		components: {
			"index-header": header,
			"index-swiper": swiper,
			"index-iconswiper": iconswiper,
			"index-activity": activity,
			"index-hotlist":hotlist,
			"index-weekendlist":weekendlist
		},

		computed: mapState({
			swiperInfo: (state) => {
				return state.home.swiperInfo
			},
			hostInfo: (state) => {
				return state.home.hostInfo
			},

		}),

		mounted() {
			!this.swiperInfo.length && this.getHomeData(),
			!this.hostInfo.length && this.getHomeData()
		},

		methods: mapActions({
			getHomeData: (dispatch) => {
				dispatch(AJAX_GET_DATA)
			}
		})

		
	}
</script>

<style scoped>

</style>
