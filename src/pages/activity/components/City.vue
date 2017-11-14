<template>
<div v-show="show">
    <div class="mask"></div>
    <div class="dialog-outer dialog-area">
        <div class="area-more">
            <div class="area-type">热门省份</div>
            <template v-if="cityInfo.length !== 0">
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[0].hotcity" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">华北</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[1].northchina" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">东北</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[2].Northeast" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">华南</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[3].southchina" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">华东</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[4].eastchina" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">西北</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[5].northwest" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">西南</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[6].southwest" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
                <div class="area-type">华中</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout" v-for="item in cityInfo[7].centralchina" :key="item.id">
                        <span class="area-inner">{{item.city}}</span>
                    </li>
                </ul>
            </template>
        </div>
        <div class="dialog-close" id="close" @click="handleCouponClose"></div>
    </div>
</div>
</template>
<script>
import {mapState} from "vuex"
export default {
    props: ["show"],
    computed: mapState({
            cityInfo:(state) => {
                return state.activity.cityInfo
            }
        }),
    methods: {
        handleCouponClose() {
            this.$emit("close");
        }
    }
}
 
</script>
<style>
    .dialog-area {
        top: 55%;
        height: 80%;
    }
    .area-more {
        overflow: hidden;
        overflow-y: auto;
        height: 100%;
        display: block;
    }
    .area-type {
        color: #fff;
        font-size: .24rem;
        line-height: .6rem;
        text-indent: .18rem;
    }
    .dialog-area .area-item {
        float: left;
        margin-bottom: .16rem;
        width: 25%;
        height: auto;
    }
    .flexbox-item, .flexbox-layout {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .dialog-area .area-inner {
        display: block;
        margin: 0 .08rem;
        height: .4rem;
        padding: 0;
        background: #fff;
        color: #949494;
        line-height: .4rem;
        text-align: center;
        -webkit-border-radius: .4rem;
        -moz-border-radius: .4rem;
        -o-border-radius: .4rem;
        border-radius: .4rem;
    }
    .dialog-area .area-actived .area-inner {
        background: #ff8300;
        color: #fff;
    }
    </style>
    <style scoped>
    .mask {
        display:block;
    }
    .dialog-outer {
        display: block;
    }
    .dialog-area .dialog-close {
        top: 0;
    }
</style>