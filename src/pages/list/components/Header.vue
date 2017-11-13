<template>
    <div class="header">
        <a class="header-left" href = "">
            <i class="iconfont icon-return"></i>
        </a>
        <input class = "header-input" />
        <span class="header-right">
            <a data-search="submit" class="search-submit" rel="nofollow" id="search-form-submit">搜索</a>
        </span>
    </div>
</template>

<script>


</script>

<style scoped>
.header {
    position: relative;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
}
.header-left {
    float: left;
    width: .4rem;
    line-height: .44rem;
    padding:.2rem;
    color: #fff;
    font-size: .36rem;
    text-align: left;
}
.header-input {
    position: relative;
    width: 4.62rem;
    height: .4rem;
    line-height: .4rem;
    padding: .1rem 0;
    border: 0;
    font-size: .28rem;
    border-radius: .06rem;
    background: #fff;
    margin-top: .14rem;
}
.header-right {
    display: inline-block;
    height: .88rem;
    line-height: .88rem;
    padding: 0 .1rem;
    float: right;
}
.search-submit {
    display: inline-block;
    width: .74rem;
    margin-right: .04rem;
    color: #fff;
    font-size: .28rem;
}
</style>
