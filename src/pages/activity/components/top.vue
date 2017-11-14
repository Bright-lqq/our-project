<template>
    <div class="gotop" id="gotop" @click="handleClick" >
        <div class="gotop-inner">
            <span class="gotop-arrow"></span>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        var that = this;
        window.onscroll = function(e){
            var e = e || window.event;
            that.y = document.documentElement.scrollTop||document.body.scrollTop;
            var mapTotop = document.getElementById("gotop")
            if(that.y > 810) {
                mapTotop.style.display = "block";
            }else {
                mapTotop.style.display = "none";
            }
            that.height = parseInt(document.defaultView.getComputedStyle(document.body, null)['height']);           
        }
        this.totalHeight =  parseInt(document.defaultView.getComputedStyle(document.body, null)['height']);
    },
    data : function() {
        return {
            y : 0,
            totalHeight : 0,
            height : 0
        }
    },
    computed:{
        translatey : function(){
            return (this.y / this.height).toFixed(4)*100;
        }
    },
    methods:{
        handleClick : function() {
            document.documentElement.scrollTop = 0;
        }
    } 
}
</script>
<style>
    .gotop {
        position: fixed;
        display: none;
        z-index: 99;
        right: .2rem;
        bottom: 0;
        width: .9rem;
        height: .9rem;
        background: rgba(0,0,0,.6);
        -webkit-border-radius: .5rem;
        -moz-border-radius: .5rem;
        border-radius: .5rem;
        transform: translateY(100%);
        transition: 400ms;
        transform: translate(0px, -1rem) translateZ(0px);
    }
    .gotop-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: .2rem;
        height: .14rem;
        margin-left: -.1rem;
        background: #fff;
        font-size: 0;
        line-height: 0;
    }
    .gotop-arrow {
        position: absolute;
        overflow: hidden;
        top: -.16rem;
        left: -.1rem;
        width: 0;
        height: 0;
        border-width: 0 .2rem .16rem;
        border-style: solid;
        border-color: transparent transparent #fff;
    }
</style>