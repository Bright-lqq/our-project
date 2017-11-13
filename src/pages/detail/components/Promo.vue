<template>
	<div class="ticket-group border-bottom">
		<h3 class="ticket-type border-bottom">
			<span class="ticketype-ticket"></span>
			促销票
		</h3>
		<div>
			<div class="ticket-type-con" v-for="list in promoInfo" :key="list.id" id="example">
				<div class="ticket-type-info border-bottom">
					<h5 class="ticket-type-name ellipsis2">
						{{list.name}}
					</h5>
					<div class="ticket-type-price price">&yen<em class="price-num">{{list.price}}</em>
						<span class="ticket-numword">起</span>
					</div>
					<i class="iconfont icon-down-trangle-copy-copy1 ticket-type-extend" @click="handleUpDownClick(list.id)"></i>
				</div>
				<div class="ticket-default" id="ticket-default" v-if="showItem(list.id)">
					<div class="ticket-item  border-top" v-for="list2 in promoInfo2">
						<div class="ticket-main">
							<div>
								<h4 class="ticket-title-name">{{list2.name}}</h4>
								<h6 class="ticket-title ellipsis2">{{list2.title}}</h6>
								<ul class="ticket-light"></ul>
								<ul class="ticket-light">
									<span>
										<i class="iconfont icon-shizhong ticket-icon"></i>
										{{list2.time}}
									</span>
									<span class="ticket-desctag">
										<i class="iconfont icon-duihao ticket-icon"></i>
										{{list2.sales}}
									</span>
								</ul>
							</div>
						</div>
						<div class="ticket-side flexbox-layout border-left">
							<a href="/"title="list.title2" class="ticket-link">
								<strong class="ticket-sale price">&yen<em class="price-num">{{list2.price}}</em>
								</strong>
								<em class="ticket-btn promote-ablebtn">{{list2.ablebtn}}</em>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["promoInfo","promoInfo2"],
		data() {
			return {
				outsideClickArr: [],
				ifShow: 0
			}
		},
		methods: {
			showItem(value) {
				var isShow = false;
				for(var i = 0; i < this.outsideClickArr.length; i++) {
					if(value == this.outsideClickArr[i]) {
						isShow = true;
						break;
					}
				}
				return isShow;
			},
			handleUpDownClick(index) {
				let inArray = false;
				for(var i = 0; i < this.outsideClickArr.length; i++) {
					if(this.outsideClickArr[i] == index) {
						inArray = true;
						this.outsideClickArr.splice(i,1);
						break;
					}
				}
				if(!inArray) {
					this.outsideClickArr.push(index);
				}
			}
		}
	}	
	
	
</script>

<style scoped>
.ticket-group {
	margin-top: .2rem;
	background: #fff;
}
.ticket-type {
	overflow: hidden;
	position: relative;
	z-index: 4;
	margin-bottom: -.02rem;
	padding: 0 .2rem;
	height: .88rem;
	background: #fff;
	color: #333;
	font-size: .32rem;
	line-height: .88rem;
	text-indent: .4rem;
}
.ticketype-ticket {
	display: inline-block;
	position: absolute;
	width: .36rem;
	height: .36rem;
	top: .26rem;
	left: .2rem;
	background: url(../../../app/img/detail.png) 0 -.45rem no-repeat;
	margin-right: .1rem;
	background-size: .4rem 3rem;
}
.ticket-type-info {
	position: relative;
	margin-bottom: -.02rem;
	padding: .24rem .2rem;
	background: #fff;
	border-top: .04rem solid #eee;
}
.ticket-type-name {
	margin-right: 1.8rem;
	color: #333;
	font-size: .3rem;
	line-height: .48rem;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.ticket-type-price {
	right: .46rem;
	margin-top: -.28rem;
	color: #ff9800;
	font-size: .24rem;
	overflow: hidden;
	position: absolute;
	top: 50%;
	height: .4rem;
	line-height: .4rem;
}
.ticket-numword {
	display: inline-block;
	color: #9e9e9e;
	font-size: .24rem;
}
.ticket-type-extend {
	position: absolute;
	top: 50%;
	height: .4rem;
	line-height: .4rem;
	right: .2rem;
	margin-top: -.22rem;
	color: #bbb;
	font-size: .32rem;
	overflow: hidden;	   
}
.ticket-default {
	width:100%;
	background: #f5f5f5;
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
.ticket-title-name {
	margin-right: .1rem;
	font-size: .3rem;
	overflow: hidden;
	line-height: .34rem;
	max-width: 2.5rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #666;
}
.ticket-title {
	margin-top: .1rem;
	font-size: .24rem;
	color: #666;
}
.ticket-light {
	padding: .04rem 0 .08rem 0;
	font-size: .1rem;
	color: #666;
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
	line-height: .3rem;
	font-size: .36rem;
}
.ticket-redpacket {
	border: .02rem solid #ff6b62;
}
</style> 