<template>
    <div>
        <a href="/" class="header-back" v-if = "returnShow">
            <i class="iconfont icon-return header-back-icon"></i>
        </a>
        <div class="header" :style="{'opacity':headerReturnOpacity}">
            <a href="/" class="header-left">
                <i class="iconfont icon-return header-icon "></i>
            </a>
            <h1 mp-role="title" class="header-title">北京欢乐谷</h1>
        </div>
       <div class="detail-banner" @click="ifShowImgList">
            <div class="detail-banner-wrap">
                <img class="detail-banner-img" src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x330_a80ff353.jpg" alt="北京欢乐谷(AAAA景区)">
            </div>
            <div class="detail-banner-info">
                <div class="detail-banner-title">
                    北京欢乐谷(AAAA景区)
                </div>
                <div class="detail-imgswipeicon">
                    <i class="iconfont icon-font29 icon-imgswipeicon"></i>
                    <em class="detail-imgswipeicon-number">16</em>
                </div>
            </div>
        </div>
        <div v-if="showImgList" class="imgswiper" @click="closeImgList">
            <swiper :options="swiperOption" class="detail-swiper">
                <swiper-slide v-for="item in imgList" :key="item.id">
                    <div class="img-box">
                        <img class="detail-swiper-img-con" :src="item.imgUrl" />
                    </div>
                </swiper-slide>
                <div class="detail-imgswiper-bar"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        props:["imgList"],

        data() {
            return{
                returnShow: true,
                headerReturnOpacity: 0,
                scrollTop:0,
                swiperOption: {
                        direction: 'horizontal',
                        autoHeight: true,
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 10,
                        pagination:'.detail-imgswiper-bar',
                        paginationType: 'fraction',
                        observeParents: true
                },
                showImgList: false
            }
        },
        components: {
            swiper: swiper,
            "swiper-slide": swiperSlide
        },
        methods: {
            handleScroll() {
                var newScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(newScrollTop >= 10 && newScrollTop > this.scrollTop) {
                    this.scrollTop = newScrollTop;
                    this.returnShow = false;
                    this.headerReturnOpacity >= 1?this.headerReturnOpacity = 1:this.headerReturnOpacity += 0.03;
                }else if(newScrollTop <= 100 && newScrollTop < this.scrollTop){
                    this.returnShow = false;
                    this.scrollTop = newScrollTop;
                    this.headerReturnOpacity <= 0?this.headerReturnOpacity = 0:this.headerReturnOpacity -= 0.03;
                    if(newScrollTop == 0){
                        this.returnShow = true;
                        this.headerReturnOpacity = 0;
                    }
                }
            },
            ifShowImgList() {
                this.showImgList = true;
            },
            closeImgList() {
                this.showImgList = false;
            },
        },
        mounted() {
            window.addEventListener('scroll',this.handleScroll);
        }
    }
</script>

<style scoped>
    .imgswiper {
        overflow: hidden;
        padding-top: 3rem;
        position: fixed;
        z-index: 99;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #000;
    }
    .img-box {
        z-index: 999;
        width: 100%;
        height: 5rem;
    }
    .swiper-img {
        width: 100%;
        height: 100%;
    }
    .detail-swiper-img-con {
        width: 100%;
    }
    .header-back {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: .72rem;
        height: .72rem;
        background-color: #000;
        opacity: .5;
        border-radius: .36rem;
        z-index: 99;
    }
    .header-back-icon {
        display: block;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        line-height: .72rem
    }
    .detail-banner {
        position: relative;
    }
    .header {
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0px;
        height: .88rem;
        background: #00bcd4;
        z-index: 91;
    }
    .header-title {
        overflow: hidden;
        margin: 0 1rem;
        width: 3rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
        float: left;
    }
    .header-left {
        display: inline-block;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
        color:#fff;
        float: left;
    }
    .header-icon {
        display: inline-block;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        margin-left: .2rem;
    }
    .detail-banner-wrap {
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 55%;
    }
    .detail-banner-img {
        width: 100%;
    }
    .detail-banner-info {
        position: absolute;
        right: .2rem;
        bottom: .26rem;
        left: .2rem;
        min-height: .4rem;
    }
    .detail-banner-title {
        font-size: .32rem;
        color: #fff;
        line-height:.4rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    }
    .detail-imgswipeicon {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.2rem;
        height: .4rem;
        background: rgba(0,0,0,.5);
        border-radius: .2rem;
        font-size: .24rem;
        color: #fff;
        line-height: .4rem;
        text-align: center;
    }
    .icon-imgswipeicon {
        font-size: .24rem;
        color: #fff;
    }
    .detail-imgswipeicon-number {
        margin-left: .1rem;
    }
    
</style>