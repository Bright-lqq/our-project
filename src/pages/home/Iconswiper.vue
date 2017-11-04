<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
        <div class="category-container swipe">
            <div class="swipe-wrap">
                <div class="swipe-item">
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
                            </div>
                            <div class="keywords">景点门票</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png">
                            </div>
                            <div class="keywords">动植物园</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png">
                            </div>
                            <div class="keywords">故宫</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png">
                            </div>
                            <div class="keywords">一日游</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png">
                            </div>
                            <div class="keywords">必游榜单</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png">
                            </div>
                            <div class="keywords">秋色美</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png">
                            </div>
                            <div class="keywords">游乐场</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png">
                            </div>
                            <div class="keywords">泡温泉</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="category-container swipe">
            <div class="swipe-wrap">
                <div class="swipe-item">
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png">
                            </div>
                            <div class="keywords">城市观光</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png">
                            </div>
                            <div class="keywords">玻璃栈道</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png">
                            </div>
                            <div class="keywords">名胜古迹</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png">
                            </div>
                            <div class="keywords">周边游</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png">
                            </div>
                            <div class="keywords">自然风光</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png">
                            </div>
                            <div class="keywords">古北水镇</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png">
                            </div>
                            <div class="keywords">景点讲解</div>
                        </a>
                    </div>
                    <div class="category-item">
                        <a>
                            <div class="category-img-container">
                                <img src="http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png">
                            </div>
                            <div class="keywords">全部</div>
                        </a>
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
        opacity: 1;
        margin-top: .2rem;
        color: #212121;
        font-size: .28rem;
    }
    .bullet-active{
        background: rgba(144,144,144,0.8);
    }

</style>