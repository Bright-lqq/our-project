<template>
    <div class="coupon-module">
        <div class="coupon-entrance clrfix">
            <div class="coupon-value price">￥<em class="price-num">5</em></div>
            <div class="coupon-info">
                <div class="coupon-name ellipsis">先领券再泡汤 </div>
                <div class="coupon-desc ellipsis">- 门票新客代金券 -</div>
            </div>
            <div class="coupon-btn" @click="handleClick">立即领取</div>
        </div>
        <activity-coupon :show="couponShow" v-on:close="handleCouponClose"></activity-coupon>
    </div>
</template>

<script>
    import coupon from "./Coupon"

    export default {
        data() {
            return {
                couponShow: false
            }
        },
        methods: {
            handleClick() {
                console.log(1)
                this.couponShow = true;
            },
            handleCouponClose() {
                this.couponShow = false;
            }
        },
        components: {
            "activity-coupon": coupon
        }
    }
</script>

<style>
    .coupon-module {
        margin-bottom: .2rem;
        padding: .16rem 0;
        background: #fff;
    }
    .coupon-entrance {
        position: relative;
        margin: 0 auto;
        width: 81.3%;
        height: 1.6rem;
        color: #fff;
        background-image: linear-gradient(to right,#ffd033,#ff5d11);
        border-radius: .06rem;
    }
    .coupon-entrance::before {
        content: '\0020';
        position: absolute;
        top: 50%;
        right: -.14rem;
        margin-top: -.14rem;
        width: .3rem;
        height: .3rem;
        background: #fff;
        border-radius: 50%;
    }
    .price {
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .coupon-value {
        overflow: hidden;
        float: left;
        width: 25%;
        height: 1.6rem;
        font-size: .32rem;
        line-height: 1.5rem;
        text-align: right;
    }
    .coupon-value .price-num {
        margin-left: .1rem;
        font-size: 1rem;
    }
    .coupon-info {
        float: left;
        width: 53%;
        text-align: center;
    }
    .coupon-name {
        padding-top: .36rem;
        font-size: .36rem;
        line-height: .5rem;
    }
    .coupon-desc {
        font-size: .24rem;
        line-height: .34rem;
    }
    .ellipsis {
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .coupon-btn {
        float: right;
        width: .28rem;
        padding: .2rem .4rem;
        border-left: .02rem dotted rgba(255,255,255,.5);
        font-size: .28rem;
        line-height: .3rem;
        text-align: center;
    }
</style>