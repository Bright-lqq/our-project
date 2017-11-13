<template>
	<div class="recommend-container">
		<h3 class="recommend-title border-bottom">看了该景点的人还看了</h3>
		<div class="recommend-list" v-for="item in recommendInfo" :key="item.id">
			<div class="recommend-item">
				<img class="recommend-img" :src="item.src" style="">
				<div class="recommend-info border-bottom">
					<div class="recommend-sight">
						{{item.title}}
						<span class="recomment-sightstar">{{item.span}}</span>
					</div>
					<div class="recommend-price price">&yen
						<em class="price-num">{{item.price}}</em>
						<span class="recommend-flag">起</span>
					</div>
					<div class="recommend-comment">
						<span class="starlevel">
							<i class="iconfont icon-wuxing starlevel-icon"></i>
						</span>
						<span class="recommend-commentnum">{{item.num}}</span>
					</div>
					<div class="recommend-position">
						<span class="recommend-subposition border-left">{{item.name}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["recommendInfo"]
	}
</script>

<style scoped>
	.recommend-container {
		margin-top: .2rem;
    	margin-bottom: .4rem;
    	position: relative;
	}
	.recommend-title {
		padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}
	.border-bottom {
		border-bottom:.02rem solid #dadada;
	}
	.recommend-title::after {
	    content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    border-radius: .04rem;
	}
	.recommend-list {
		overflow: hidden;
    	background: #fff;
	}
	.recommend-img {
		margin: .2rem .2rem 0 .2rem;
	    width: 1.62rem;
	    height: 1.62rem;
	    float: left;
	}
	.recommend-info {
		position: relative;
	    padding-top: .2rem;
	    margin-left: 2.02rem;
	    height: 1.8rem;
	}
	.recommend-sight {
	    height: .4rem;
	    line-height: .4rem;
	    font-size: .3rem;
	    color: #212121;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.recomment-sightstar {
    	color: #adadad;
	}
	.recommend-price {
		position: absolute;
	    right: .2rem;
	    top: .2rem;
	    line-height: .4rem;
	    font-size: .2rem;
	    vertical-align: baseline;
	    color: #ff9800;
	}
	.price-num {
		font-size: .36rem;
	}
	.recommend-flag {
    	color: #9e9e9e;
	}
	.starlevel {
		color: #00bcd4;
	}
	.recommend-comment {
		margin-top: .4rem;
	}
	.starlevel-icon {
		font-size: .2rem;
	}
	.recommend-commentnum {
	    margin-left: .1rem;
	    line-height: .28rem;
	    font-size: .24rem;
	    vertical-align: middle;
	    color: #9e9e9e;
	}
	.recommend-position {
	    position: absolute;
	    bottom: .24rem;
	    left: 0;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.recommend-subposition {
   		padding: .04rem .04rem 0 .1rem;
   		color: #9e9e9e;
    	font-size: .24rem;
	}
</style>