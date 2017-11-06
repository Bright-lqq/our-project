<template>
    <swiper :options="swiperOption" class="home-swiper">
        <swiper-slide v-for="item in swiperInfo" :key="item.id">
            <router-link :to="item.link">
                <div>
                    <img class="home-swiper-img-con" :src="item.imgUrl" />
                </div>
            </router-link>
        </swiper-slide>
        <div class="home-swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        props: [ "swiperInfo" ],
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    direction: 'horizontal',
                    autoHeight: true,
                    pagination:'.swiper-pagination',
                    bulletClass : 'home-swiper-bullet',
                    bulletActiveClass: 'home-swiper-bullet-active',
                    observeParents: true
                }
            }
        },

        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .home-swiper {
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;
    }
    .home-swiper-img-con {
        width: 100%;
    }
    .home-swiper-pagination {
        height: .2rem;
    }
    .home-swiper-bullet {
        display: inline-block;
        width: .13rem;
        height: .13rem;
        background: rgba(144,144,144,0.5);
        border-radius: 50%;
        margin-left: .08rem;
    }
    .home-swiper-bullet-active {
        background: #fff;
    }
</style>