<template>
    <div class = "hot_list">
        <h2 class = "hot_nav">热销推荐</h2>
        <div class = "hot_content">
            <ul class = "hotList">
                <li class = "hot_gugong" v-for = "list in lists" :key = "list.id">
                    <img class = "hot_img" :src="list.img" alt="">
                    <div class = "hot_center">
                         <h3 class = "hot_title">{{list.title}}</h3>
                         <h4 class = "hot_introduce">{{list.introduce}}</h4>
                         <div class="hot-price">¥<em class="hot_num">{{list.num}}</em><span class="hot-text">起</span></div>
                    </div>
                </li>
            </ul>
            <div class = "hot_more">
                <a href="">查看所有产品</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists:[{
                    id: 1,
                    img: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
                    title: "故宫",
                    introduce: "东方宫殿建筑代表，世界宫殿建筑典范",
                    num: "65"
                },{
                    id: 2,
                    img: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg",
                    title: "八达岭长城",
                    introduce: "不到长城非好汉",
                    num: "25"
                },{
                    id: 3,
                    img: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
                    title: "颐和园",
                    introduce: "保存完整的一座皇家行宫御苑",
                    num: "1"
                },{
                    id: 4,
                    img: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
                    title: "北京欢乐谷",
                    introduce: "七大主题园区带你畅享北京欢乐谷",
                    num: "65"
                },{
                    id: 5,
                    img: "http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg",
                    title: "慕田峪长城",
                    introduce: "秀美长城，关键是人少",
                    num: "65"
                }]
            }
        }
    }
</script>

<style scoped>
    .hot_list {
        width: 100%;
        height: 11.06rem;
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
