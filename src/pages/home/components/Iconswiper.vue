<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in abc" :key="index">
            <div class="category-container swipe">
                <div class="swipe-wrap">
                    <div class="swipe-item" v-for="innerItem in item" :key="innerItem.id">
                        <div class="category-item">
                            <a>
                                <div class="category-img-container">
                                    <img :src="innerItem.src">
                                </div>
                                <div class="keywords">{{innerItem.title}}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-personalize"  slot="pagination"></div>
    </swiper>
</template> 
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import {mapGetters} from 'vuex';
    export default {
    name: 'carrouse',
    data() {
        return {
            swiperOption: {
                direction: 'horizontal',
                autoHeight: true,
                pagination:'.home-swiper-pagination',
                bulletClass : 'my-bullet',
                bulletActiveClass: 'bullet-active',
                observeParents: true,
                    }
                }
            },
            computed: mapGetters(['abc']),

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
    .bullet-active{
        background: rgba(144,144,144,0.8);
    }
</style>