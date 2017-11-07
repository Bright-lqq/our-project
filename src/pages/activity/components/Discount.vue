<template>
    <div class="mp-coupon-module">
        <div class="mp-coupon-entrance clrfix">
            <div class="mp-coupon-value mp-price">￥<em class="mp-price-num">5</em></div>
            <div class="mp-coupon-info">
                <div class="mp-coupon-name mp-ellipsis">先领券再泡汤 </div>
                <div class="mp-coupon-desc mp-ellipsis">- 门票新客代金券 -</div>
            </div>
            <div class="mp-coupon-btn">立即领取</div>
        </div>
    </div>
</template>
<style>
.mp-coupon-module {
    margin-bottom: .2rem;
    padding: .16rem 0;
    background: #fff;
}
.mp-coupon-entrance {
    position: relative;
    margin: 0 auto;
    width: 81.3%;
    height: 1.6rem;
    color: #fff;
    background-image: linear-gradient(to right,#ffd033,#ff5d11);
    border-radius: .06rem;
}
.mp-coupon-entrance::before {
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
.mp-price {
    font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.mp-coupon-value {
    overflow: hidden;
    float: left;
    width: 25%;
    height: 1.6rem;
    font-size: .32rem;
    line-height: 1.5rem;
    text-align: right;
}
.mp-price-num {
    margin-left: .1rem;
    font-size: 1rem;
}
.mp-coupon-info {
    float: left;
    width: 53%;
    text-align: center;
}
.mp-coupon-name {
    padding-top: .36rem;
    font-size: .36rem;
    line-height: .5rem;
}
.mp-coupon-desc {
    font-size: .24rem;
    line-height: .34rem;
}
.mp-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-coupon-btn {
    float: right;
    width: .28rem;
    padding: .2rem .4rem;
    border-left: .02rem dotted rgba(255,255,255,.5);
    font-size: .28rem;
    line-height: .3rem;
    text-align: center;
}
</style>