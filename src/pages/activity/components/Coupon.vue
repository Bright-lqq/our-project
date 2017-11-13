<template>
<div v-show="show">
    <div class="mask"></div>
    <div class="dialog-outer">
        <div class="coupon-outer">
            <div class="coupon-inner">
                <div class="coupon-num price">￥<em class="price-num">5</em></div>
                <div class="coupon-detail">
                    <div class="coupon-title">新客门票代金券 </div>
                    <div class="coupon-time">有效期30天</div>
                </div>
            </div>
        </div>
        <div class="dialog-content">
            <div class="dialog-inner">
                <div class="login-outer">
                    <div class="login-notes">您还未登陆哦！</div>
                    <ul class="form-container">
                        <li class="form-item">
                            <input class="form-input" type="tel" maxlength="11" data-pattern="1[0-9]{10}" placeholder="请输入手机号">
                        </li>
                        <li class="form-item">
                            <input class="form-input" placeholder="请输入验证码" type="tel" maxlength="6" data-pattern="[0-9]{6}">
                            <span class="form-btn form-disabled">获取验证码</span>
                        </li>
                    </ul>
                    <div class="dialog-btn form-disabled">登录领取</div>
                    <div class="form-note">
                        <span class="agree-protocol agree-checked">若您没有去哪儿网账号，输入手机号我们将自动为您注册账号，并将用您的去哪儿账户参与抽奖。</span>
                        若您没有去哪儿网账号，输入手机号我们将自动为您注册账号，并将用您的去哪儿账户参与抽奖。
                    </div>
                </div>
                <div class="result-outer">
                    <div class="result-desc">领取中...</div>
                    <div class="dialog-btn">确定</div>
                </div>
                <div class="rule-outer">
                    <div class="rule-title">活动规则</div>
                    <ul>
                        <li class="rule-item">1.该代金券仅限去哪儿无线新客可领；</li>
                        <li class="rule-item">2.该代金券使用时间为领取30天之内。</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="dialog-close" @click="handleCloseClick"></div>
    </div>
</div>
</template>
<script>

 export default {
    props: ["show"],

    methods: {
        handleCloseClick() {
            this.$emit("close");
        }
    }
 }
</script>
<style>
.mask {
    position: fixed;
    z-index: 4;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.dialog-outer {
    
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 9.3%;
    width: 81.25%;
    transform: translateY(-50%);
}
.coupon-outer {
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    margin-top: -7%;
    width: 100%;
    padding: 0 12.9%;
}
.coupon-inner {
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 37.6%;
    background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2309nationalday09/coupon_bg.png) center/contain no-repeat;
}
.coupon-inner::before {
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: 12%;
    left: 37.2%;
    width: .02rem;
    height: 66%;
    background: #ececec;
}
.coupon-num {
    overflow: hidden;
    position: absolute;
    top: 40%;
    left: 2%;
    margin-top: -.4rem;
    width: 35.2%;
    color: #f44;
    font-size: .56rem;
    line-height: .8rem;
    text-align: center;
}
.coupon-num .price-num {
    margin-left: -.12rem;
    font-size: .8rem;
}
.coupon-detail {
    position: absolute;
    top: 45%;
    left: 37.3%;
    width: 60%;
    transform: translateY(-50%);
}
.coupon-title {
    color: #f44;
    font-size: .28rem;
    line-height: .4rem;
}
.coupon-time {
    color: #616161;
    font-size: .24rem;
    line-height: .3rem;
}
.coupon-title, .coupon-time {
    margin-left: .2rem;
}
.dialog-content {
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 100%;
    background: #fdc844;
    border-radius: .16rem;
}
.dialog-content::before, .dialog-content::after {
    content: '\0020';
    position: absolute;
    z-index: 1;
    background: rgba(253,225,225,.1);
    border-radius: 50%;
}
.dialog-content::before {
    top: 0;
    left: -.14rem;
    width: 1.88rem;
    height: 1.88rem;
    box-shadow: 0.6rem 0.9rem 0.02rem -0.6rem rgba(253,225,225,.1);
}
.dialog-content::after {
    top: 0;
    right: -.14rem;
    margin-top: 28%;
    width: 1.1rem;
    height: 1.1rem;
}
.dialog-inner {
    position: relative;
    z-index: 2;
    padding-top: 19.2%;
}
.login-outer {
    margin: 0 8.6%;
    padding-bottom: .2rem;
}
.login-notes {
    color: #fff;
    font-size: .26rem;
    line-height: .4rem;
}
.form-container {
    overflow: hidden;
    margin-bottom: .3rem;
    border-radius: .06rem;
}
.form-item {
    position: relative;
    background: #fce0c2;
}
.form-input {
    display: block;
    width: 100%;
    height: .72rem;
    border: 0 none;
    background: transparent none;
    color: #6c3800;
    font: .28rem/.72rem tahoma,arial,'microsoft yahei','hiragino sans gb',sans-serif;
    text-indent: .28rem;
}
.form-disabled.form-btn {
    opacity: .5;
}
.form-btn {
    position: absolute;
    top: 0;
    right: .14rem;
    height: .72rem;
    background: #fce0c2;
    color: #6c3800;
    font-size: .28rem;
    line-height: .72rem;
    white-space: nowrap;
}
.form-item:not(:last-child) {
    border-bottom: .02rem solid #fff6d3;
}
.form-disabled.dialog-btn {
    background-color: #cfcfcf;
    background-image: linear-gradient(to bottom,#cfcfcf,#b6b6b6);
    color: #7a7a7a;
}
.dialog-btn {
    margin: .2rem 0;
    background-color: #fcd82e;
    background-image: linear-gradient(to bottom,#ff9000,#fe7800);
    color: #fff;
    font-size: .28rem;
    line-height: .54rem;
    letter-spacing: .1rem;
    text-align: center;
    box-shadow: 0 0.06rem 0.02rem #e3521b;
    border-radius: .54rem;
}
.form-disabled.dialog-btn {
    background-color: #cfcfcf;
    background-image: linear-gradient(to bottom,#cfcfcf,#b6b6b6);
    color: #7a7a7a;
}
.dialog-btn {
    margin: .2rem 0;
    background-color: #fcd82e;
    background-image: linear-gradient(to bottom,#ff9000,#fe7800);
    color: #fff;
    font-size: .28rem;
    line-height: .54rem;
    letter-spacing: .1rem;
    text-align: center;
    box-shadow: 0 0.06rem 0.02rem #e3521b;
    border-radius: .54rem;
}
.form-note {
    position: relative;
    padding-left: .3rem;
    color: #fff;
    font-size: .24rem;
    line-height: .32rem;
    vertical-align: middle;
}
.agree-protocol {
    position: absolute;
    top: .04rem;
    left: 0;
    width: .24rem;
    height: .24rem;
    background: #fff;
    font-size: 0;
    line-height: 0;
    border-radius: .04rem;
}
.form-note {
    position: relative;
    padding-left: .3rem;
    color: #fff;
    font-size: .24rem;
    line-height: .32rem;
    vertical-align: middle;
}
.agree-protocol.agree-checked::before {
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: -.02rem;
    left: -.02rem;
    width: 100%;
    height: 100%;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAMAAAAcqPc3AAAAbFBMVEUAAAD/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwn/fwl2Jl1SAAAAI3RSTlMA/KleNPfqjYV7dUgkHxIH4tvXtrFvZ1VAKsvEu7qkbE48C404stAAAACZSURBVCjPbZHbEsIgDERLgYq12Kvaetf9/39UCB3BsA9kOLMTNqTIStY5up+Q400PSI6XCsCOux3Gi/XugZz/Cq/jH96CVKZYCcJ6k+B2IHyxATxN3GU1NyPE8q1We/wg+jY6PFTGUU4dvFShfD2sESbit2J0xfxSzB0Z3XFPZi8RdG6zY1aWLUjw36JYguZhkhhcc656jm8fn9kTSFxZtDgAAAAASUVORK5CYII=) center/100% 100% no-repeat
}
.result-outer {
    display: none;
    margin: 0 8.6%;
    padding: .2rem 0;
}
.result-desc {
    color: #fff;
    font-size: .3rem;
    line-height: .42rem;
    text-align: center;
}
.rule-outer {
    overflow: hidden;
    overflow-y: auto;
    max-height: 1.08rem;
    padding: 3.8% 14%;
    background: #ff9600;
    border-radius: 0 0 .16rem .16rem;
}
.rule-title, .rule-item {
    color: #8e1c1c;
    line-height: .36rem;
}
.rule-title {
    font-size: .26rem;
}
.rule-item {
    font-size: .24rem;
}
.dialog-close {
    position: absolute;
    z-index: 3;
    top: -.8rem;
    right: 0;
    width: .4rem;
    height: .4rem;
    border: .04rem solid #fff;
    border-radius: 50%;
}
.dialog-close::before, .dialog-close::after {
    content: '\0020';
    position: absolute;
    top: 50%;
    left: 8%;
    margin-top: -.02rem;
    width: 84%;
    height: .04rem;
    background: #fff;
    transform-origin: center;
}
.dialog-close::before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.dialog-close::after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
<style scoped>
.mask {
    display:block;
}
.dialog-outer {
    display: block;
}

</style>