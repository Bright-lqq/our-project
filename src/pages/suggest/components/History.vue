<template>
	<div class="history" v-show="show">
		<div class="history-head">
			<span class="history-head-title">搜索历史</span>
			<span class="history-head-clear" @click="handleClearClick">
				<i class="iconfont icon-qingchu"></i>
				清除
			</span>
		</div>
		<div class="history-content">
			<div class="content-item">
				<div class="content-item-name" v-for="item in list">{{item}}</div>
				
			</div>
		</div>
	</div>
</template>

<script>

	import {SET_LISTDATA} from '../types'
	import { mapState, mapActions } from 'vuex'

	export default {

		methods: mapActions({
	    	handleClearClick: (dispatch) => {
	    		dispatch(SET_LISTDATA)
	    	}
	    }),

		computed : {
			...mapState({
			 	list:(state) => {
			 		return state.suggest.historyInfo;
			 	}
			}),

			show() {
				return this.list.length ? true : false;
			}
		}
	}
</script> 

<style scoped>
	.history {
		display: block;
		margin-top: .04rem;
	}
	.history-head {
		display: block;
		height: .64rem;
		line-height: .64rem;
		background: #f0f5f6;
		border-top: 1px solid #dce5e7;
		border-bottom: 1px solid #dce5e7;
		padding: 0 .2rem;
		overflow: hidden;
	}
	.history-head-title {
		display: block;
		float: left;
		font-size: .26rem;
		color: #888;
	}
	.history-head-clear {
		display: block;
		float: right;
		font-size: .26rem;
		color: #00afc7;
	}
	.history-content {
		height: 1.24rem;
		background: #fff;
		border-bottom: 1px solid #dce5e7;
	}
	.content-item {
		width: 100%;
		height: 1.24rem;
		white-space:nowrap;
		overflow-x: auto;
	}
	.content-item-name {
		display: inline-block;
		margin-top: .3rem;
		max-width: 2.89rem;
		height: .6rem;
		margin-left: .2rem;
		padding: 0 .15rem;
		border: 1px solid #c9cccd;
		border-radius: .06rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		line-height: .6rem;
		font-size: .26rem;
		color: #333;
	}


</style>