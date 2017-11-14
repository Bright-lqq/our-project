<template>
    <div>
        <div class="module-outer super-prefer">
            <div class="caption-outer">
                <div class="caption-inner">
                    <div class="caption-wrap">
                        <div class="caption-txt">亲子温泉</div>
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
            <div class="module-desc">带娃父母的最佳选择。宝宝玩的开心安全，爸妈泡温泉轻松省心，快陪宝宝度过一个完美周末吧！</div>
            <ul class="dataContainer">
                <li class="card-item"  v-for="item in parentchildInfo" :key="item.id">
                    <a class="card-link">
                        <div class="card-show img-container mpg-defaultimg-large">
                            <img class="topic-img" :src="item.imgUrl"></img>
                            <span class="list-location">北京</span>
                        </div>
                        <div class="card-info">
                            <div class="card-name ellipsis2">{{item.title}}</div>
                            <div class="card-main clrfix">
                                <div class="card-sale price">￥<em class="price-num">{{item.price}}</em></div>
                                <ul class="lighttxt-list">
                                    <li class="lighttxt-item border-left lighttxt-light">{{item.characteristic1}}</li>
                                    <li class="lighttxt-item border-left">{{item.characteristic2}}</li>
                                    <li class="lighttxt-item border-left">{{item.characteristic3}}</li>
                                </ul>
                            </div>
                            <div class="card-comment">{{item.comment}}</div>
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
            parentchildInfo() {
                return this.$store.state.activity.parentchildInfo
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
</style>

<style scoped>
    .caption-inner::after {
        background-image: linear-gradient(to right,#32daef,#349bf2);
    }
    .caption-wrap::before {
        background: #32daef;
    }
    .caption-wrap::after {
        background: #349bf2;
    }
    .caption-txt {
        background-image: linear-gradient(to right,#32daef,#349bf2);
    }
    .tag-item {
        background-image: linear-gradient(to right,#32daef,#349bf2);
    }
</style>