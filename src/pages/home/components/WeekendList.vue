<template>
    <div class="lazy-load" id="weekend-trip">
        <h2 class="modtitle">周末去哪儿</h2>
            <div>
                <router-link to="../activity">
                    <div class="product-item" v-for="list in weekendlist" :key="list.id">
                        <a href="#" class="fulllink">
                            <div class="product-imgcontainer image-ready">
                                <img :src="list.src" :alt="list.tip" />
                            </div>
                            <div class="product-info">
                                <p class="product-name">{{list.name}}</p>
                                <p class="product-desc">{{list.article}}</p>
                            </div>
                        </a>
                    </div>
                </router-link>
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                weekendlist:[{
                    id:1,
                    src:"http://img1.qunarzz.com/sight/source/1505/72/1aa52fbc3bd5ed.jpg_r_640x214_3739b5ca.jpg",
                    tip:"开封必游TOP10",
                    name:"开封必游TOP10",
                    article:"这里处处是铮铮烈骨，你不心动吗"
                },{
                    id:2,
                    src:"http://img1.qunarzz.com/sight/source/1509/cc/dac4f7757e5f73.jpg_r_640x214_c4d9b673.jpg",
                    tip:"金秋中原",
                    name:"金秋中原",
                    article:"人生若只如初见，愿与你相识在初秋的黄河之城"
                },{
                    id:3,
                    src:"http://img1.qunarzz.com/sight/source/1507/bc/a38d6d9537f2b7.jpg_r_640x214_48c6c64b.jpg",
                    tip:"玩转开封",
                    name:"玩转开封",
                    article:"原来当地人都是这么玩的"
                },{
                    id:4,
                    src:"http://img1.qunarzz.com/sight/source/1505/9a/0c90d7a944a32b.jpg_r_640x214_f7f31d22.jpg",
                    tip:"那些年的斑驳时光",
                    name:"那些年的斑驳时光",
                    article:"时光中斑驳的古城，古建筑"
                },{
                    id:5,
                    src:"http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    tip:"郑州必游TOP5",
                    name:"郑州必游TOP5",
                    article:"这里处处是铮铮烈骨，你不心动吗"
                }]
            }
        }
    }

</script>

<style scoped>
    .modtitle {
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        color: #212121;
        background:#eee;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .product-item {
        position: relative;
        margin-bottom: .1rem;
        background: #fff;
    }
    .fulllink {
        display: block;
        width: 100%;
        height: 100%;
    }
    .product-imgcontainer {
        overflow: hidden;
        height: 0;
        padding-bottom: 37.4375%;
    }
    .product-imgcontainer img {
        transition: opacity 400ms;
        width: 100%;
    }
    .product-info {
        position: relative;
        padding: .14rem .2rem .2rem .2rem;
    }
    .product-item .product-name {
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .product-item .product-desc {
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
