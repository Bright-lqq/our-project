<template>
    <div class="mp-banner mp-img-container">
        <img src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg"></img>
        <div class="mp-banner-detail">
            <h2 class="mp-banner-title">
                <span class="mp-banner-meteor"></span>
                <span class="mp-banner-star"></span>
                <strong class="mp-banner-txt">温泉五折起</strong>
                <span class="mp-banner-star"></span>
                <span class="mp-banner-meteor mp-banner-meteor-right"></span>
            </h2>
            <div class="mp-banner-desc mp-ellipsis">精挑细选温泉清单</div>
        </div>
        <div class="mp-location-outer">
        <div class="mp-location-expand">北京</div>
    </div>
    </div>
    
</template>
<style>
.mp-banner {
    position: relative;
    padding-bottom: 56.4%;
    background-color: #fff;
}
.mp-img-container {
    overflow: hidden;
    width: 100%;
    height: 0;
}
.mp-banner::after {
    content: '\0020';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.mp-banner img {
    width: 100%;
    vertical-align: top;
}
.mp-banner-detail {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    max-width: 90%;
    color: #fff;
    text-align: center;
    transform: translate(-50%,-50%);
}
.mp-banner-title {
    display: inline-block;
    white-space: nowrap;
}
.mp-banner-meteor {
    display: inline-block;
    position: relative;
    width: .6rem;
    height: .02rem;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;
    background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);
}
.mp-banner-meteor::before {
    content: '\0020';
    position: absolute;
    top: -.02rem;
    right: 0;
    width: 50%;
    height: .02rem;
    background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);
}
.mp-banner-star {
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
.mp-banner-star::before {
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
.mp-banner-star::after {
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
.mp-banner-txt {
    display: inline-block;
    overflow: hidden;
    max-width: 60%;
    min-width: 30%;
    font-size: .36rem;
    line-height: .5rem;
    vertical-align: middle;
}
.mp-banner-meteor-right {
    background-image: linear-gradient(to right,#fff,rgba(255,255,255,0));
}
.mp-banner-meteor-right::before {
    right: auto;
    left: 0;
    background-image: linear-gradient(to right,#fff,rgba(255,255,255,0));
}
.mp-banner-desc {
    font-size: .44rem;
    line-height: .6rem;
}
.mp-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-location-outer {
    position: absolute;
    width: 100%;
}
.mp-location-expand {
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
.mp-location-expand::before {
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