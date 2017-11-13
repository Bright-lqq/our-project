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
                <div class="product-item" v-for="list in weekendInfo" :key="list.id">
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
            </div>
    </div>
</template>

<script>
    export default {
         props: [ "weekendInfo" ]
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
