<template>
	<div>
		<div class="transverse-view-nav" ref="transverse">
			<ul class="view-nav-wrapper">
				<li class="view-nav-item" v-for="item in viewInfo" :key="item.id">
					<a :href="item.link" class="nav-item-link">{{item.viewName}}</a>
				</li>
			</ul>
			<span class="spread" @click="handleSpreadClick">
				<i class="iconfont icon-down-trangle-copy-copy1"></i>
			</span>
		</div>
		<div class="play-spots" ref="play">
			<p class="play-spots-title">游玩景点<span class="title-supplement">(可多选)</span></p>
			<div class="play-spots-content">
				<ul class="play-spots-wrapper">
					<li class="play-spots-item" v-for="item in viewInfo" :key="item.id">
						<a :href="item.link" class="spots-item-link">{{item.viewName}}</a>
					</li>
				</ul>
			</div>
			<span class="retract" @click="handleRetractClick">
				<i class="iconfont icon-down-trangle-copy-copy"></i>
			</span>
		</div>
		<ul class="play-list">
			<li class="play-list-item" v-for="list in itemInfo" :key="list.id">
				<div class="list-item-icon">
					<img class="list-item-img" :src="list.imgUrl" alt="">
				</div>
				<div class="list-item-describe">
					<h4 class="list-item-title">{{list.title}}
					</h4>
					<div class="list-item-detail">
						<span class="list-item-origin">{{list.origin}}</span>
						<span class="without-expenses">{{list.expenses}}</span>
						<span class="without-shopping">{{list.shopping}}</span>
					</div>
					<div class="item-price">
						<span class="RMB">&yen;<em>{{list.RMB}}</em></span>
						<span class="item-price-mark">{{list.priceMark}}</span>
					</div>
					<div class="sold">
						<span class="sold-count">{{list.sold}}</span>
					</div>
				</div>
				
			</li>
		</ul>

	</div>

</template>

<script>
	import { AJAX_GET_DATA } from "../types"
	import { mapState, mapActions } from 'vuex'

	export default {
		
		computed: {
			viewInfo() {
				return this.$store.state.tour.viewInfo
			},
			itemInfo() {
				return this.$store.state.tour.itemInfo
			}
		},
		mounted() {
			this.GetTourData();
		},
		methods: {
			...mapActions({
		    	GetTourData: function(dispatch){
		    		dispatch(AJAX_GET_DATA)
		    	}
	    	}),
			handleSpreadClick() {
				this.$refs.transverse.style.display="none";
				this.$refs.play.style.display="block";
			},
			handleRetractClick() {
				this.$refs.transverse.style.display="block";
				this.$refs.play.style.display="none";
			}
		}
		
	}
</script>

<style scoped>
	.transverse-view-nav {
		position: relative;
		height: .84rem;
		background: #e5e7e8;
		overflow: hidden;
		border-bottom: 1px solid #bfc6ca;
		z-index: 2; 
		display: block;
	}
	.view-nav-wrapper {
		height: .84rem;
		line-height: .84rem;
		white-space: nowrap;
		overflow-x: auto;
	}
	.view-nav-wrapper::-webkit-scrollbar {
		display: none;
	}
	.view-nav-item {
		display: inline-block;
		height: .56rem;
		padding: 0 .08rem;
	}
	.nav-item-link {
		display: block;
		height: .56rem;
		padding: 0 .22rem;
		background: #fff;
		line-height: .56rem;
		text-align: center;
		font-size: .26rem;
		color: #212121;
		border-radius: .06rem;
	}
	.spread {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: .8rem;
		height: .78rem;
		background:  #e5e7e8;
		text-align: center;
		line-height: .78rem;
		font-size: .26rem;
		color: #aab2b7;
	}
	.play-spots {
		width: 100%;
		position: relative;
		background: #e5e7e8;
		z-index: 2;
		display: none;
	}
	.play-spots-title {
		height: .8rem;
		background: #e5e7e8;
		padding: 0 .22rem;
		border-bottom: .01rem solid #d7dbde;
		line-height: .84rem;
		font-size: .28rem;
		color: #212121;
	}
	.title-supplement {
		font-size: .24rem;
	}
	.retract{
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: .8rem;
		height: .8rem;
		background:  #e5e7e8;
		text-align: center;
		line-height: .78rem;
		font-size: .26rem;
		color: #aab2b7;
		border-left: .01rem solid #d7dbde;
		border-bottom: .01rem solid #d7dbde;
	}
	.play-spots-content {
		height: 6rem;
		overflow: hidden;
	}
	.play-spots-wrapper {
		float: left;
		width: 100%;
		padding: .12rem;
	}
	.play-spots-item {
		float: left;
		padding: 0 .08rem;
		margin: .08rem 0;
	}
	.spots-item-link {
		display: block;;
		height: .56rem;
		background: #fff;
		padding: 0 .22rem;
		border-radius: .06rem;
		line-height: .56rem;
		text-align: center;
		color: #212121;
		font-size: .26rem;
	}
	.list-item-detail {
	    position: relative;
	    top: .06rem;
	    overflow: hidden;
	    max-height: .58rem;
	    margin-right: 1rem;
	    padding-top: .06rem;
	    line-height: .24rem;
	    font-size: 0;
	}
	.list-item-icon {
		float: left;
		width: 1.6rem;
		height: 1.6rem;
		margin: .2rem;
	}
	.list-item-img {
		width: 1.6rem;
		height: 1.6rem;
	}
	.list-item-describe {
		position: relative;
		float: right;
		width: 4.2rem;
		height: 1.6rem;
		padding: .2rem .2rem .2rem 0;
		border-bottom: .01rem solid rgba(229, 231, 232, 0.55);
	}
	.list-item-title {
		height: .72rem;
		line-height: .36rem;
		font-size: .3rem;
		color: #212121;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.list-item-origin {
		display: inline-block;
		padding: 0 .1rem;
		font-size: .24rem;
		color: #00bcd4;;
	}
	.without-expenses, .without-shopping {
		display: inline-block;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #616161;
	}
	.item-price {
		position: absolute;
	    right: .2rem;
	    bottom: .48rem;
	    height: .32rem;
	    line-height: .32rem;
	    color: #9e9e9e;
	    text-align: right;
	}
	.item-price em {
		font-size: .32rem;
	}
    .RMB {
    	font-size: .22rem;
	    font-weight: bold;
	    color: #ff8300;
    }
	.item-price-mark {
		font-size: .24rem;
    	padding-left: .02rem;
	}
	.sold {
		position: absolute;
	    left: -.1rem;
	    bottom: .2rem;
	    width: 100%;
	    font-size: 0;
	    color: #9e9e9e;
	} 
    .sold-count {
    	padding: 0 .1rem;
    	font-size: .22rem;
    }
    
</style>