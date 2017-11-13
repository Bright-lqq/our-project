<template>
    <div class="baseinfo">
        <div class="baseinfo-address" id="card-address">
            <p class="baseinfo-address-txt">
                <i class="iconfont icon-dingwei address-icon"></i>
                北京市朝阳区东四环小武基北路
                <i class="iconfont icon-jinrugengduo Enter-icon"></i>
            </p>
        </div>
        <div class="baseinfo-intro border-top">
            <p class="baseinfo-intro-txt">
                <i class="iconfont icon-font29 address-icon"></i>
                查看景点简介及开放时间
                <i class="iconfont icon-jinrugengduo Enter-icon"></i>
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.baseinfo {
    position:relative;
    top:-.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    border-radius: .1rem .1rem 0 0;
}
.baseinfo-address {
    position:relative;
    height:.88rem;
    color:#212121;
    line-height:.88rem;
}
.baseinfo-address-txt {
    overflow:hidden;
    padding-right:.56rem;
    white-space:nowrap;
    text-overflow:ellipsis;
    border-bottom: 1px solid #eee;
}
.address-icon {
    margin-right:.2rem;
    color: #9e9e9e;
    font-size: .28rem;
}
.Enter-icon {
    position: absolute;
    right: 0;
    font-size: .42rem;
    color: #9e9e9e;
}
.baseinfo-intro {
    position:relative;
    height:.88rem;
    color:#212121;
    line-height:.88rem;
}
.baseinfo-intro-txt {
    overflow: hidden;
    padding-right: .56rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>