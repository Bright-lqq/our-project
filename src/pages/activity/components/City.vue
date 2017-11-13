<template>
<div>
    <div class="mask"></div>
    <div class="dialog-outer dialog-area">
        <div class="area-more">
            <div class="area-type">热门省份</div>
            <ul class="clrfix">
                <li class="area-item flexbox-layout" v-for="item in cityInfo" :key="item.id">
                    <span class="area-inner">{{item.city}}</span>
                </li>
                <li class="area-item flexbox-layout area-actived">

                </li>

            </ul>
            <div>
                <div class="area-type">华北</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout area-actived">
                        <span class="area-inner">北京</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">河北</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">天津</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">山西</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">内蒙古</span>
                    </li>
                </ul>
            </div>
            <div>
                <div class="area-type">东北</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">辽宁</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">吉林</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">黑龙江</span>
                    </li>
                </ul>
            </div>
            <div>
                <div class="area-type">华南</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">广东</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">海南</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">广西</span>
                    </li>
                </ul>
            </div>
            <div>
                <div class="area-type">华东</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">江西</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">江苏</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">福建</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">浙江</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">山东</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">安徽</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">上海</span>
                    </li>
                </ul>
            </div>
            <div>
                <div class="area-type">西北</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">陕西</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">甘肃</span>
                    </li>
                </ul>
            </div>
            <div>
                <div class="area-type">西南</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">四川</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">重庆</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">云南</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">贵州</span>
                    </li>
                </ul>
            </div>
            <div>
                <div class="area-type">华中</div>
                <ul class="clrfix">
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">湖北</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">河南</span>
                    </li>
                    <li class="area-item flexbox-layout">
                        <span class="area-inner">湖南</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="dialog-close" id="close"></div>
    </div>
   
</div>
</template>
<script>
 export default {
     computed: {
            cityInfo() {
                
                return this.$store.state.activity.cityInfo
                
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