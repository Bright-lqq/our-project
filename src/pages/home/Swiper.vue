<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
        <div class="swiper-img-con">
             <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png" />
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="swiper-img-con">
             <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" />
        </div>
    </swiper-slide>
     <swiper-slide>
         <div class="swiper-img-con">
             <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg" />
        </div>
    </swiper-slide>
     <swiper-slide>
         <div class="swiper-img-con">
             <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg" />
        </div>
    </swiper-slide>
     <swiper-slide>
         <div class="swiper-img-con">
             <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/c5/2b4166f592b33202.jpg_640x200_27b41388.jpg" />
        </div>
    </swiper-slide>
     <swiper-slide>
         <div class="swiper-img-con">
             <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" />
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
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination:'.swiper-pagination',
          bulletClass : 'my-bullet',
          bulletActiveClass: 'bullet-active',
          observeParents: true,
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
    
    .swiper-img-con{
        width:100%;
        height:0;
        padding-bottom:31.25%;
    }
    .swiper-img{
        width:100%;
    }
    .swiper-pagination{
        height:.2rem;
    }
    .my-bullet{
        display:inline-block;
        width:.13rem;
        height:.13rem;
        background:rgba(144,144,144,0.5);
        border-radius:50%;
        margin-left:.08rem;
    }
    .bullet-active{
        background:#fff!important;
    }

</style>