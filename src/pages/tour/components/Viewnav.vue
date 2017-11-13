<template>
	<div>
		<div class="transverse-view-nav" ref="transverse">
			<ul class="view-nav-wrapper">
				<li class="view-nav-item">
					<a href="" class="nav-item-link">八达岭长城</a>
				</li>
				<li class="view-nav-item">
					<a href="" class="nav-item-link">古北水镇</a>
				</li>
				<li class="view-nav-item">
					<a href="" class="nav-item-link">故宫</a>
				</li>
				<li class="view-nav-item">
					<a href="" class="nav-item-link">司马台长城</a>
				</li>
				<li class="view-nav-item">
					<a href="" class="nav-item-link">鸟巢</a>
				</li>
				<li class="view-nav-item">
					<a href="" class="nav-item-link">天安门广场</a>
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
					<li class="play-spots-item">
						<a href="" class="spots-item-link">八达岭长城</a>
					</li>
					<li class="play-spots-item">
						<a href="" class="spots-item-link">古北水镇</a>
					</li>
					<li class="play-spots-item">
						<a href="" class="spots-item-link">故宫</a>
					</li>
					<li class="play-spots-item">
						<a href="" class="spots-item-link">司马台长城</a>
					</li>
					<li class="play-spots-item">
						<a href="" class="spots-item-link">鸟巢</a>
					</li>
					<li class="play-spots-item">
						<a href="" class="spots-item-link">天安门广场</a>
					</li>
				</ul>
			</div>
			<span class="retract" @click="handleRetractClick">
				<i class="iconfont icon-down-trangle-copy-copy"></i>
			</span>
		</div>
		<ul class="play-list">
			<li class="play-list-item">
				<div class="list-item-icon">
					<img class="list-item-img" src="http://img1.qunarzz.com/p/tts3/1708/e0/9072ffc0ef322302.jpg_110x110_52fb9421.jpg" alt="">
				</div>
				<div class="">
					<h4 class="mp-list-productname mpg-ellipsis2">【7-12点天天发】八达岭长城+往返直通车+门票，自由可选！
					</h4>
					<div class="">
						<span class="mp-list-tagitemlight mpf-border-right">北京出发</span>
						<span class="mp-list-tagitem mpf-border-right">无自费</span>
						<span class="mp-list-tagitem mpf-border-right">无购物</span>
					</div>
					<div class="mp-list-cashback">
						
					</div>
					<div class="">
						<span class="">¥<em>45</em></span>
						<span class="">起</span>
					</div>
					<div class="mp-list-moreinfo">
						<span class="mp-list-text mpf-border-left">已售6898</span>
					</div>
				</div>
				<a href="" class="mp-list-link" title="">【7-12点天天发】八达岭长城+往返直通车+门票，自由可选！
				</a>
			</li>
		</ul>

	</div>

</template>

<script>
	export default {
		methods: {
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

    
</style>