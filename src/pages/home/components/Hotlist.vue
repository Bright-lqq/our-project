<template>
    <div class = "hot_list">
        <h2 class = "hot_nav">热销推荐</h2>
        <div class = "hot_content">
            <router-link to="../detail">
                <ul class = "hotList">
                    <li class = "hot_gugong" v-for = "list in hostInfo" :key = "list.id">
                        <img class = "hot_img" :src="list.img" alt="">
                        <div class = "hot_center">
                             <h3 class = "hot_title">{{list.title}}</h3>
                             <h4 class = "hot_introduce">{{list.introduce}}</h4>
                             <div class="hot-price">¥<em class="hot_num">{{list.num}}</em><span class="hot-text">起</span></div>
                        </div>
                    </li>
                </ul>
            </router-link>
            <div class = "hot_more">
                <a href="">查看所有产品</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[ "hostInfo" ]
    }
</script>

<style scoped>
    .hot_list {
        width: 100%;
        height: 11.06rem;
        background: #fff;
    }
    .hot_list .hot_nav {
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        color: #212121;
        background: #eee;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hot_content {
        width: 100%;
        height: 10.26rem;
    }
    .hotList {
        width: 100%;
        height: 9.4rem;
    }
    .hot_gugong {
        position: relative;
        overflow: hidden;
        height: 1.4rem;
        padding: .24rem;
        border-bottom: .02rem solid #eee;
    }
    .hot_img {
        position: absolute;
        top: .24rem;
        left: .24rem;
        width: 1.4rem;
        height: 1.4rem;
    }
    .hot_center {
        margin-left: 1.6rem;
    }
    .hot_title {
        overflow: hidden;
        margin-top: .04rem;
        margin-bottom: .1rem;
        color: #212121;
        font-size: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hot_introduce {
        overflow: hidden;
        margin-bottom: .1rem;
        height: .4rem;
        line-height: .4rem;
        color: #9e9e9e;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hot-price {
        color: #ff8300;
    }
    .hot_num {
        font-size: .36rem;
        padding: 0 .04rem;
    }
    .hot-text {
        color: #9e9e9e;
        font-size: .24rem;
    }
    .hot_more {
        margin-top: -.02rem;
        height: .88rem;
        color: #00afc7;
        line-height: .88rem;
        text-align: center;
    }
</style>
