<template>
	<div class="hot-search">
		<div class="hot-search-head">
			<span class="hot-search-head-title">热门搜索</span>
			<span class="hot-search-head-change" @click="handleChangeClick()">
				<i class="iconfont icon-iconfontrefresh"></i>
				换一批
			</span>
		</div>
		<div class="hot-search-content">
			<div class="hot-view-spot">
				<div class="view-spot-icon">
					<img class="view-spot-icon-item" src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" />
				</div>
				<div class="view-spot-item">
					<div class="view-link-wrapper" ref="view">
						<a class="spot-item-link" @click="handleClearClick(item.viewName)" v-for="item in hotviewInfo" :key="item.id" >{{item.viewName}}</a>
					</div>
				</div>
			</div>
			<div class="hot-city">
				<div class="hot-city-icon">
					<img class="hot-city-icon-item" src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png"  />
				</div>
				<div class="hot-city-item">
					<div class="city-link-wrapper" ref="city">
						<a class="city-item-link" v-for="item in hotcityInfo" :href="item.link" :key="item.id" >{{item.cityName}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex"
	import {ADD_LIST} from "../types"

	export default {
		data() {
			return {
				history: [],
				view_times: 0,
				city_times: 0,
				view_defaultTop : 0,
				city_defaultTop : 0
			}
		},
		computed: {
			hotviewInfo() {
				return this.$store.state.suggest.hotviewInfo
			},
			hotcityInfo() {
				return this.$store.state.suggest.hotcityInfo
			}
		},
		mounted() {
			this.view_defaultTop = this.$refs.view.style.top;
			this.city_defaultTop = this.$refs.city.style.top;
		},
		methods: {
			...mapActions({
		    	handleClearClick: function(dispatch, res){
		    		dispatch(ADD_LIST, res)
		    	}
	    	}),
	    	handleChangeClick() {

				var view_height = document.defaultView.getComputedStyle(this.$refs.view, null)['height'];

				var viewHeightValue = parseFloat(view_height)

				var view_numbers = Math.ceil(viewHeightValue / 90);
				
				this.view_times++;
				if(this.view_times < view_numbers) {
					this.$refs.view.style.top = - (this.view_times * 1.72) + "rem";
				}else{
					this.$refs.view.style.top = this.view_defaultTop;
					this.view_times = 0;
				}
				
				var city_height = document.defaultView.getComputedStyle(this.$refs.city, null)['height'];

				var cityHeightValue = parseFloat(city_height)
				var city_numbers = Math.ceil(cityHeightValue / 33);
				
				this.city_times++;
				if(this.city_times < city_numbers-2) {
					this.$refs.city.style.top = - (this.city_times * .86) + "rem";
				}else{
					this.$refs.city.style.top = this.city_defaultTop;
					this.city_times = 0;
				}
				
			}
		}
	}
</script>

<style scoped>
	.hot-search-head {
		display: block;
		height: .64rem;
		line-height: .64rem;
		background: #f0f5f6;
		border-bottom: 1px solid #dce5e7;
		padding: 0 .2rem;
		overflow: hidden;
	}
	.hot-search-head-title {
		display: block;
		float: left;
		font-size: .26rem;
		color: #888;
	}
	.hot-search-head-change {
		display: block;
		float: right;
		font-size: .26rem;
		color: #00afc7;
	}
	.hot-view-spot {
		height: 1.8rem;
		background: #fff;
		border-bottom: 1px solid #dce5e7;
	}
	.view-spot-icon {
		float: left;
		width: .72rem;
		height: 1.3rem;
		margin: .25rem 0;
		border-right: 1px solid #dce5e7;
		line-height: 1.3rem;
		text-align: center;
	}
	.view-spot-icon-item, .hot-city-icon-item  {
		width: .3rem;
		height: .3rem;
	}
	.hot-city {
		height: .9rem;
		border-bottom: 1px solid #dce5e7;
		overflow: hidden;
	}
	.view-spot-item {
		float: left;
		width: 5.66rem;
		height: 1.8rem;
		overflow: hidden;
	}
	.view-link-wrapper {
		position: relative;
		top: 0;
		width: 5.66rem;
		z-index: 1;
	}
	.city-link-wrapper {
		position: relative;
		top: 0;
		width: 5.66rem;
		overflow: hidden;
		z-index: 1;
	}
	.spot-item-link, .city-item-link {
		display: inline-block;
		max-width: 2.89rem;
		height: .36rem;
		line-height: .36rem;
		border-right: 1px dashed #c9cccd;
		margin: .25rem 0;
		padding: 0 .3rem;
		text-align: center;
		font-size: .26rem;
		color: #333;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.hot-city-icon {
		float: left;
		width: .72rem;
		height: .9rem;
		line-height: .9rem;
		border-right: 1px solid #dce5e7;
		text-align: center;
	}
	.hot-city-item {
		float: left;
		height: .9rem;
		z-index: 1;
	}
</style>
