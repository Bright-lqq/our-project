<template>
   <div class="detail-banner">
        <div class="detail-banner-wrap">
            <img class="detail-banner-img" src="http://img1.qunarzz.com/sight/p0/1709/53/5383877685ecaf77a3.img.jpg_600x330_8888c753.jpg" alt="郑州园博园">
        </div>
        <div class="detail-banner-info">
            <div class="detail-banner-title">
            郑州园博园
            </div>
            <div class="detail-imgswipeicon">
                <span class="detail-iconfont mp-imgswipeicon-icon"></span>
                <em class="detail-imgswipeicon-number">6</em>
            </div>
        </div>
   </div>
</template>
<script>

</script>
<style scoped>
    .detail-banner {
        position:relative;
    }
    .detail-banner-wrap {
        overflow:hidden;
        height:0;
        width:100%;
        padding-bottom:55%;
    }
    .detail-banner-img {
        width:100%;
    }
    .detail-banner-info {
        position:absolute;
        right:.2rem;
        bottom:.26rem;
        left:.2rem;
        min-height:.4rem;
    }
    .detail-banner-title {
        font-size:.32rem;
        color:#fff;
        line-height:.4rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    }
    .detail-imgswipeicon {
        position:absolute;
        right:0;
        top:0;
        width: 1.2rem;
        height: .4rem;
        background: rgba(0,0,0,.5);
        border-radius: .2rem;
        font-size: .24rem;
        color: #fff;
        line-height: .4rem;
        text-align: center;
    }
    .mp-iconfont {

    }
    .detail-imgswipeicon-number {
        margin-left:.1rem;
    }
</style>