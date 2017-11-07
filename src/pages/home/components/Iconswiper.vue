<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
            <div class="category-container swipe">
                <div class="swipe-wrap">
                    <div class="swipe-item">
                        <div class="category-item" v-for="list in pageone" :key="list.id">
                            <router-link to="../list">
                                <div class="category-img-container">
                                    <img :src="list.src">
                                </div>
                                <div class="keywords">{{list.title}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="category-container swipe">
                <div class="swipe-wrap">
                    <div class="swipe-item" >
                        <div class="category-item" v-for="list in pagetwo" :key="list.id">
                            <router-link to="../list">
                                <div class="category-img-container">
                                    <img :src="list.src">
                                </div>
                                <div class="keywords">{{list.title}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
    data() {
        return {
            swiperOption: {
            direction: 'horizontal',
            autoHeight: true,
            pagination:'.swiper-pagination',
            bulletClass : 'my-bullet',
            bulletActiveClass: 'bullet-active',
            observeParents: true,
            },
            pageone: [{
                id: 1,
                src: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                title: "景点门票"
            },{
                id: 2,
                src: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
                title: "动植物园"
            },{
                id: 3,
                src: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
                title: "故宫"
            },{
                id: 4,
                src: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
                title: "一日游"
            },{
                id: 5,
                src: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
                title: "必游榜单"
            },{
                id: 6,
                src: "http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png",
                title: "秋色美"
            },{
                id: 7,
                src: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
                title: "游乐场"
            },{
                id: 8,
                src: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
                title: "泡温泉"
            }],
            pagetwo: [{
                id: 1,
                src: "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                title: "城市观光"
            },{
                id: 2,
                src: "http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png",
                title: "玻璃栈道"
            },{
                id: 3,
                src: "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
                title: "名胜古迹"
            },{
                id: 4,
                src: "https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png",
                title: "周边游"
            },{
                id: 5,
                src: "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
                title: "自然风光"
            },{
                id: 6,
                src: "http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",
                title: "古北水镇"
            },{
                id: 7,
                src: "http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png",
                title: "景点讲解"
            },{
                id: 8,
                src: "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
                title: "全部"
            }]
            }
            },
            components: {
                swiper,
                swiperSlide
            }
        }
</script>
<style>
    .category-container {
        overflow: hidden;
        height: 3.7rem;
        padding-top: .1rem;
        background-color: #fff;
    }
    .swipe {
        position: relative;
        width: 100%;
        z-index: 2;
    }
    .swipe-wrap {
        overflow: visible;
        width: 100%;
    }
    .swipe-item {
        width: 100%;
        left: 0px;
        transition-duration: 300ms;
        transform: translate(0px, 0px) translateZ(0px);
    }
    .category-item {
        float: left;
        width: 25%;
        height: 1.3rem;
        padding-top: .3rem;
        text-align: center;
    }
    .category-item a {
        color: #00afc7;
        text-decoration: none;
    }
    .category-img-container {
        display: inline-block;
        background: #f0f5f8;
        border-radius: 20px;
        width: .66rem;
        height: .66rem;
    }
    .category-img-container img {
        width: .66rem;
        height: .66rem;
        background: 0;
    }
    .keywords {
        margin-top: .2rem;
        color: #212121;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
    	white-space: nowrap;
    }
    .bullet-active {
        background: rgba(144,144,144,0.8);
    }
</style>