<template>
   <div class = "main">
   		<div class="product-item" v-for = "activity in activityInfo" :key = "activity.id">
			<div class="productimg-wrapper">
				<img class = "productimg-img" :src="activity.src">
			</div>
			<div class="product-info">
				<p class="product-name">{{activity.name}}</p>
				<p class="product-desc">{{activity.desc}}</p>
				<div class="product-price">
                    <span class="product-qunarprice">¥<em class= "product-num">{{activity.num}}</em><span class="product-pricestart">起</span>
                    </span>
                </div>
			</div>
		</div>
   </div>
</template>

<script>
	export default {
        props:[ "activityInfo" ],
    }
</script>

<style scoped>
.product-item {
	background: #fff;
	position: relative;
	margin-bottom: .2rem;
}
.productimg-wrapper {
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 43.37288%;
}
.productimg-img {
	display: block;
	width: 100%;
}
.product-info {
	position: relative;
	padding: .14rem .2rem .24rem .2rem;
}
.product-name {
	overflow: hidden;
	padding-right: 2.2rem;
	color: #212121;
	font-size: .36rem;
	line-height: .54rem;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.product-desc {
	overflow: hidden;
	color: #616161;
	font-size: .26rem;
	line-height: .45rem;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.product-price {
	position: absolute;
	top: .25rem;
	right: .2rem;
}
.product-qunarprice {
	color: #ff8300;
	font-size: .18rem;
}
.product-pricestart {
	color: #616161;
	font-size: .22rem;
}
.product-num {
	font-size: .4rem;
	margin-left: .04rem;
	font-weight: bold;
}
</style>

