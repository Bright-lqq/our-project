<template>
    <div class="note-outer">
        <a class="more-btn">查看更多温泉产品</a>
        <div class="note-caption">
            <span class="captionTxt">温泉贴士</span>
        </div>
        <div class="branch">
            <dl v-for="item in guardianInfo" :key="item.id">
                <dt class="note-title">{{item.title}}</dt>
                <dd class="note-desc">
                    <ul>
                        <li class="note-item">{{item.firststep}}</li>
                        <li class="note-item">{{item.secondstep}}</li>
                        <li class="note-item">{{item.threestep}}</li>
                        <li class="note-item">{{item.fourthstep}}</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
                guardianInfo() {
                    
                    return this.$store.state.activity.guardianInfo
                    
                }
            }
    }   
</script>
<style>
    .note-outer {
        padding: .2rem .3rem;
        background: #fff;
    }
    .more-btn {
        display: block;
        margin: .2rem auto;
        width: 44.5%;
        border: .02rem solid #fa0;
        color: #ff8a00;
        font-size: .28rem;
        line-height: .6rem;
        text-align: center;
        border-radius: .04rem;
    }
    .note-caption {
        position: relative;
        margin: .6rem auto 0;
        width: 1.7rem;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        text-align: center;
        background-image: linear-gradient(to right,#ffa604,#ff441e);
    }
    .note-caption::before {
        content: '\0020';
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        border-top: .12rem solid #fff;
        border-right: .12rem solid transparent;
    }
    .note-caption::after {
        content: '\0020';
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        right: 0;
        bottom: 0;
        border-top: .12rem solid transparent;
        border-right: .12rem solid #fff;
    }
    dl {
        display: block;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
    }
    .note-title {
        margin-top: .4rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
        text-align: center;
    }
    .note-desc {
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }
    .note-item {
        margin-top: .2rem;
    }
</style>