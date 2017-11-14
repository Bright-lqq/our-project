<template>
<div>
    <div class="module-outer super-prefer">
        <div class="caption-outer">
            <div class="caption-inner">
                <div class="caption-wrap">
                    <div class="caption-txt">省心一日游</div>
                </div>
            </div>
        </div>
        <ul class="tag-list">
            <li  class="tag-item">
                <div class="tag-inner">家庭</div>
            </li>
            <li  class="tag-item">
                <div class="tag-inner">上班族</div>
            </li>
            <li  class="tag-item">
                <div class="tag-inner">情侣</div>
            </li>
        </ul>
        <div class="module-desc">再也不用担心出去玩太麻烦了，【去哪儿门票】为你精选了靠谱温泉一日游！拎包就走，想去哪儿就去哪儿！</div>
        <ul class="grid-list clrfix">
            <li class="grid-item" v-for="item in onedayInfo" :key="item.id">
                <a class="grid-link border">
                    <div class="grid-show img-container mpg-defaultimg-small">
                        <img :src="item.imgUrl" class="topic-img"></img>
                        <span class="list-location">北京出发</span>
                    </div>
                    <div class="grid-info">
                        <div class="grid-name ellipsis2">{{item.title}}</div>
                        <div class="grid-sale">
                            <span class="price">￥<em class="price-num">{{item.price}}</em></span>起
                        </div>
                        <div class="grid-btn">查看</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    computed: {
            onedayInfo() {

                return this.$store.state.activity.onedayInfo
                
            }
        }
}
    
</script>
<style>
    .tag-list {
        margin: .18rem 0;
        font-size: 0;
        line-height: 0;
        text-align: center;
    }
    .tag-item {
        display: inline-block;
        margin: 0 .08rem;
        padding: .02rem;
        border-radius: .04rem;
    }
    .tag-inner {
        padding: 0 .16rem;
        background: #fff;
        color: #212121;
        font-size: .24rem;
        line-height: .42rem;
    }
    .dataContainer {
        width: auto;
    }
    .card-item {
        position: relative;
        margin: .3rem 0;
    }
    .card-link {
        display: block;
    }
    .mpg-defaultimg-large {
        background: #e6e6e6 url(//s.qunarzz.com/piao_topic/image/common/default/640x280.jpg) 0 bottom no-repeat;
        background-size: 100% auto;
    }
    .card-show {
        padding-bottom: 39.4%;
    }
    .img-container {
        overflow: hidden;
        width: 100%;
        height: 0;
    }
    .topic-img {
        width: 100%;
        vertical-align: top;
    }
    .card-info {
        margin: 0 .2rem;
    }
    .card-name {
        margin-top: .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .38rem;
    }
    .ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .card-sale {
        float: right;
        color: #ff8300;
        font-size: .24rem;
        line-height: .4rem;
    }
    .card-sale .price-num {
        font-size: .4rem;
    }
    .card-main {
        margin: .08rem 0 .12rem;
    }
    .card-main .lighttxt-list {
        padding: .1rem 0 .04rem;
        overflow: hidden;
        height: .34rem;
    }
    .card-comment {
        padding: .1rem .2rem;
        background: #f6f6f6;
        color: #616161;
        font-size: .24rem;
        line-height: .34rem;
        border-radius: .04rem;
    }
    .grid-list {
        margin: 0 -.1rem .2rem;
        min-height: 1rem;
    }
    .grid-item {
        float: left;
        margin-top: .2rem;
        width: 50%;
    }
    .grid-link {
        display: block;
        margin: 0 .1rem;
    }
    .mpg-defaultimg-small {
        background: #cfcfcf url(//s.qunarzz.com/piao_topic/image/common/default/288x288.png) 0 bottom no-repeat;
        background-size: 100% auto;
    }
    .grid-show {
        position: relative;
        padding-bottom: 57.8%;
        background: #f0f0f0;
    }
    .img-container {
        overflow: hidden;
        width: 100%;
        height: 0;
    }
    .topic-img {
        width: 100%;
        vertical-align: top;
    }
    .grid-info {
        position: relative;
        margin: .2rem .2rem 0;
    }
    .grid-name {
        height: .76rem;
        color: #212121;
        font-size: .28rem;
        line-height: .38rem;
    }
    .ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .grid-sale {
        overflow: hidden;
        height: .8rem;
        color: #9e9e9e;
        font-size: .24rem;
        line-height: .8rem;
    }
    .grid-sale .price {
        margin-right: .04rem;
        color: #ff8300;
        font-size: .24rem;
    }
    .price {
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .grid-sale .price-num {
        font-size: .4rem;
    }
    .price-num {
        font: .28rem Tahoma,Helvetica,sans-serif;
    }
    .grid-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-right: .2rem;
        color: #616161;
        font-size: .24rem;
        line-height: .8rem;
    }
    .grid-btn::after {
        content: '\0020';
        overflow: hidden;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -.06rem;
        width: .12rem;
        height: .12rem;
        border-width: .02rem;
        border-style: solid;
        border-color: #9e9e9e #9e9e9e transparent transparent;
        transform: rotate(45deg);
    }
    .clrfix:after {
        content: "\0020";
        display: block;
        visibility: hidden;
        height: 0;
        clear: both;
    }
</style>
<style scoped>
    .caption-inner::after {
        background-image: linear-gradient(to right,#ffa305,#ff431d);
    }
    .caption-wrap::before {
        background: #ff52a3;
    }
    .caption-wrap::after {
        background: #ff3d4f;
    }
    .caption-txt {
        background-image: linear-gradient(to right,#ff52a3,#ff3d4f);
    }
    .tag-item {
        background-image: linear-gradient(to right,#ff52a3,#ff3d4f);
    }
</style>