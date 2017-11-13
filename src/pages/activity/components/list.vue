<template>
   <div class = "mp-main">
   		<div class="mp-product-item" v-for = "activity in activityInfo" :key = "activity.id">
			<div class="mp-productimg-wrapper">
				<img class = "mp-productimg-img" :src="activity.src">
			</div>
			<div class="mpp-product-info">
				<p class="product-name">{{activity.name}}</p>
				<p class="product-desc">{{activity.desc}}</p>
				<div class="mpp-product-price">
                    <span class="mpp-product-qunarprice">¥<em class= "mpp-product-num">{{activity.num}}</em><span class="mpp-product-pricestart">起</span>
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
	.mp-product-item {
		background: #fff;
	    position: relative;
	    margin-bottom: .2rem;
	}
	.mp-productimg-wrapper {
		overflow: hidden;
	    height: 0;
	    width: 100%;
	    padding-bottom: 43.37288%;
	}
	.mp-productimg-img {
		display: block;
		width: 100%;
	}
	.mpp-product-info {
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
	.mpp-product-price {
		position: absolute;
	    top: .25rem;
	    right: .2rem;
	}
	.mpp-product-qunarprice {
		color: #ff8300;
    	font-size: .18rem;
	}
	.mpp-product-pricestart {
		color: #616161;
    	font-size: .22rem;
	}
	.mpp-product-num {
		font-size: .4rem;
	    margin-left: .04rem;
	    font-weight: bold;
	}
</style>

