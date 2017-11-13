<template>
	<div class="promote">
		<h3 class="ticket-type border-bottom">
			<i class="iconfont icon-dianzanmw promote-icon"></i>
			去哪儿推荐
		</h3>
		<div id="wrapper">
		    <div id="scroller">
			    <div>
					<div class="ticket-item  border-top" v-for="(list, index) in promoteInfo" :key="list.id">
						<div class="ticket-main">
							<div>
								<h6 class="ticket-title ellipsis2">{{list.title}}</h6>
								<ul class="ticket-light"></ul>
								<ul class="ticket-light">
									<span>
										<i class="iconfont 
										icon-shizhong ticket-icon"></i>
										{{list.time}}
									</span>
									<span class="ticket-desctag">
										<i class="iconfont icon-duihao ticket-icon"></i>
										{{list.sales}}
									</span>
								</ul>
							</div>
						</div>
						<div class="ticket-side flexbox-layout border-left">
							<a href="/"title="list.title2" class="ticket-link">
								<strong class="ticket-sale price">&yen<em class="price-num2">{{list.price}}</em></strong>
								<em class="ticket-btn promote-ablebtn">{{list.ablebtn}}</em>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    require('../../../utils/iscroll-probe.js');
	export default {
		props: [ "promoteInfo" ],
		mounted() {
			 this.myScroll = new IScroll("#wrapper",{ probeType: 3,mouseWheel:true});
		},
		updated() {
			this.myScroll.refresh();
		}
	}
	
</script>

<style scoped>

#wrapper {
	height: 4rem;
	overflow: hidden;
}
.promote {
	position: relative;
	background: #fff;
	margin-bottom: .2rem;
}
.ticket-type {
	overflow: hidden;
	position: relative;
	margin-bottom: -.02rem;
	padding: 0 .2rem;
	height: .88rem;
	line-height: .88rem;
	color: #333;
	font-size: .32rem;
}
.promote-icon {
	font-size: .4rem;
	color: #ff6b62;
}
.ticket-item {
	padding: .2rem .2rem .24rem .2rem;
	box-sizing: border-box;
	display: flex;	
}
.ticket-main {
	display: flex;
	align-items: center;
	flex: 2.92rem;
}
.border-top {
	border-top: 1px solid #eee;
}
.ticket-title {
	margin-right: .1rem;
	line-height: .52rem;
	font-size: .3rem;
	color: #333;
}
.ticket-light {
	padding: .04rem 0 .08rem 0;
	font-size: .1rem;
}
.ticket-icon {
	font-size: .1rem;
}
.ticket-sale {
	display: block;
	overflow: hidden;
	height: .32rem;
	font-size: .24rem;
	line-height: .28rem;
	text-align: center;
	color: #ff9800;
}
.ticket-desctag {
	margin-left: .2rem;
}
.ticket-light {
	padding: .04rem 0 .08rem 0;
	overflow: hidden;
}
.ticket-side {
	display: flex;
	align-items: center;
	flex: 1;
	border-left: 1px solid #eee;
}
.price-num {
	margin-left: .04rem;
	font-size: .32rem;
	line-height: .3rem;
}
.ticket-btn {
	display: block;
	background: #ff9800;
	height: .6rem;
	color: #fff;
	font-size: .28rem;
	line-height: .6rem;
	text-align: center;
	border-radius: .1rem;
} 
.ticket-link {
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding-left: .2rem;
}
.ticket-detail {
	padding: .04rem 0 .08rem 0;
	overflow: hidden;
}
.ticket-tag {
	overflow: hidden;
	float: left;
	margin: .04rem .06rem .04rem 0;
	padding: 0 .04rem;
	color: #ff6b62;
	font-size: .24rem;
	white-space: nowrap;
	border-radius: 2px;
}
.price-num {
	line-height: .24rem;
	font-size: .24rem;
}
.price-num2 {
	font-size: .36rem;
}
.ticket-redpacket {
	border: .02rem solid #ff6b62;
}
</style>
