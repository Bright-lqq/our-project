<template>
    <div class="banner img-container">
        <img src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg"></img>
        <div class="banner-detail">
            <h2 class="banner-title">
                <span class="banner-meteor"></span>
                <span class="banner-star"></span>
                <strong class="banner-txt">温泉五折起</strong>
                <span class="banner-star"></span>
                <span class="banner-meteor banner-meteor-right"></span>
            </h2>
            <div class="banner-desc ellipsis">精挑细选温泉清单</div>
        </div>
        <div class="location-outer">
            <div class="location-expand" @click="handleClick">北京</div>
        </div>
        <activity-city :show="cityShow" v-on:close="handleCityClose"></activity-city>
        
    </div>
    
</template>
<script>

    import city from "./City.vue";
    export default {
        data() {
            return {
                cityShow: false
            }
        },
        methods: {
            handleClick() {
                this.cityShow = true;
            },
            handleCityClose() {
                this.cityShow = false;
            }
        },
        components: {
            "activity-city": city
        }
    }
</script>
<style>
.banner {
    position: relative;
    padding-bottom: 56.4%;
    background-color: #fff;
}
.img-container {
    overflow: hidden;
    width: 100%;
    height: 0;
}
.banner::after {
    content: '\0020';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.banner img {
    width: 100%;
    vertical-align: top;
}
.banner-detail {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    max-width: 90%;
    color: #fff;
    text-align: center;
    transform: translate(-50%,-50%);
}
.banner-title {
    display: inline-block;
    white-space: nowrap;
}
.banner-meteor {
    display: inline-block;
    position: relative;
    width: .6rem;
    height: .02rem;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;
    background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);
}
.banner-meteor::before {
    content: '\0020';
    position: absolute;
    top: -.02rem;
    right: 0;
    width: 50%;
    height: .02rem;
    background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);
}
.banner-star {
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-width: .08rem .1rem 0;
    border-style: solid;
    border-color: #fff transparent transparent;
    display: inline-block;
    position: relative;
    vertical-align: middle;
}
.banner-star::before {
    transform: rotate(72deg);
    content: '\0020';
    position: absolute;
    top: -.08rem;
    left: -.1rem;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-width: .08rem .1rem 0;
    border-style: solid;
    border-color: #fff transparent transparent;
}
.banner-star::after {
    transform: rotate(-72deg);
    content: '\0020';
    position: absolute;
    top: -.08rem;
    left: -.1rem;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-width: .08rem .1rem 0;
    border-style: solid;
    border-color: #fff transparent transparent;
}
.banner-txt {
    display: inline-block;
    overflow: hidden;
    max-width: 60%;
    min-width: 30%;
    font-size: .36rem;
    line-height: .5rem;
    vertical-align: middle;
}
.banner-meteor-right {
    background-image: linear-gradient(to right,#fff,rgba(255,255,255,0));
}
.banner-meteor-right::before {
    right: auto;
    left: 0;
    background-image: linear-gradient(to right,#fff,rgba(255,255,255,0));
}
.banner-desc {
    font-size: .44rem;
    line-height: .6rem;
}
.ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.location-outer {
    position: absolute;
    width: 100%;
}
.location-expand {
    position: absolute;
    z-index: 2;
    top: -.8rem;
    right: .2rem;
    min-width: .64rem;
    padding: 0 .5rem 0 .16rem;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: .32rem;
    line-height: .56rem;
    border-radius: .56rem;
}
.location-expand::before {
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: .2rem;
    margin-top: -.14rem;
    width: .16rem;
    height: .16rem;
    border-bottom: .04rem solid #fff;
    border-left: .04rem solid #fff;
    transform: rotate(-45deg);
}
</style>