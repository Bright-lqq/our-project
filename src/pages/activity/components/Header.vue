<template>
    <header class="header">
        <router-link to="/">
            <a class="header-black">
                <span class="iconfont-head iconfont icon-return"></span>
            </a>
        </router-link>
        <h1>温泉5折起，精挑细选温泉清单</h1>
        <router-link to="/">
            <a class="header-bar header-logo">
                <span class="iconfont-head iconfont icon-06"></span>
                首页
            </a>
        </router-link>
    </header>
</template>

<style>
    .header {
        position: relative;
        background: #1ba9ba;
        text-align: center;
        color: #fff;
        border-bottom: #1b7a8b .02rem solid;
        height: .88rem;
        line-height: .88rem;
    }
    .header a {
        color: #fff;
    }
    .header-black {
        position: absolute;
        top: 0;
        width: .88rem;
        height: .88rem;
        left: 0;
        font-size: .32rem;
    }
    .iconfont-head {
        display: inline-block;
        width: .88rem;
        height: .88rem;
        font-size: .36rem;
        line-height: .88rem;
        text-decoration: none;
    }
    .header h1{
        overflow: hidden;
        margin: 0 1rem;
        font-weight: normal;
        font-size: .32rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .header-logo {
        line-height: .36rem;
    }
    .header-bar {
        right: 0;
        font-size: .24rem;
        position: absolute;
        top: 0;
        width: .88rem;
        height: .88rem;
    }
    .header-logo .iconfont-head {
        display: block;
        height: auto;
        padding-top: .1rem;
        line-height: 1;
    }
</style>