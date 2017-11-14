<template>
    <div>
        <div class="module-outer">
            <ul class="anchor-list clrfix">
                <li class="anchor-item" v-for="item in activityInfo" :key="item.id">
                    <span class="anchor-inner border">{{item.title}}</span>
                </li>
            </ul>
            <div class="module">
                <div class="caption-outer">
                    <div class="caption-inner">
                        <div class="caption-wrap">
                            <div class="caption-txt">{{name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module-desc">{{introduce}}</div>
            <ul class="dataContainer">
                <li class="list-item border-top clrfix">
                    <a class="list-link">
                        <div class="list-show mpg-defaultimg-small">
                            <img class="topic-img" :src="imgSrc1"></img>
                            <span class="list-location">北京</span>
                        </div>
                        <div class="list-info">
                            <div class="list-name ellipsis2">{{title1}}</div>
                            <ul class="lighttxt-list">
                                <li class="lighttxt-item border-left lighttxt-light">{{type1}}</li>
                                <li class="lighttxt-item border-left">{{type2}}</li>
                            </ul>
                            <div class="list-price">
                                <span class="list-sale price">￥<em class="price-num">{{price1}}</em></span>
                                <span class="list-cost price"><em class="price-num">{{originalPrice1}}</em></span>
                            </div>
                            <div class="list-btn">马上抢</div>
                        </div>
                    </a>
                    <div class="list-favorite"></div>
                </li>
                <li class="list-item border-top clrfix">
                    <a class="list-link">
                        <div class="list-show mpg-defaultimg-small">
                            <img class="topic-img" :src="imgSrc2"></img>
                            <span class="list-location">北京</span>
                        </div>
                        <div class="list-info">
                            <div class="list-name ellipsis2">{{title2}}</div>
                            <ul class="lighttxt-list">
                                <li class="lighttxt-item border-left lighttxt-light">{{type3}}</li>
                                <li class="lighttxt-item border-left">{{type4}}</li>
                            </ul>
                            <div class="list-price">
                                <span class="list-sale price">￥<em class="price-num">{{price2}}</em></span>
                                <span class="list-cost price"><em class="price-num">{{originalPrice2}}</em></span>
                            </div>
                            <div class="list-btn">马上抢</div>
                        </div>
                    </a>
                    <div class="list-favorite"></div>
                </li>
            </ul>
        </div>
        <ul class="entrance-list"></ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "超值温泉",
				introduce: "近千家温泉逐一甄选。价格不高，格调很高；水质、水温、环境、路途、服务...想你所想，为你所选！",
				imgSrc1: "//img1.qunarzz.com/sight/p0/1507/d5/a9c70a3b26bd90e2e9274eae72ae6727.water.jpg_200x180_ddf33dd2.jpg",
				title1: "【特权日】北京九华温泉文化主题公园- 晚场温泉票（17:00-23:00使用）",
				type1: "露天温泉",
				type2: "温柔之乡",
				price1: "68",
				originalPrice1: "票面价￥150",
				imgSrc2: "//img1.qunarzz.com/sight/p0/1511/a5/a57e18e2084ec48190.water.jpg_200x180_879cfda0.jpg",
				title2: "温都水城温都水城两馆通票 - 成人票",
				type3: "儿童乐园",
				type4: "性价比高",
				price2: "128",
				originalPrice2: "票面价￥298"
            }
        },
        
        computed: {
            activityInfo() {
                return this.$store.state.activity.activityInfo
            }
        }
    }
</script>

<style>
    .module-outer {
        margin: .2rem 0;
        padding: .2rem;
        background: #fff;
    }
    .anchor-list {
        margin: .2rem .4rem 0;
    }
    .clrfix::after {
        content: "\0020";
        display: block;
        visibility: hidden;
        height: 0;
        clear: both;
    }
    .anchor-item {
        float: left;
        margin-bottom: .2rem;
        width: 33.33%;
    }
    .anchor-inner:first-child {
        color: #ff8a00;
    }
    .anchor-inner {
        display: block;
        overflow: hidden;
        margin: 0 .1rem;
        height: .64rem;
        color: #212121;
        font-size: .28rem;
        line-height: .64rem;
        text-align: center;
    }
    .border {
        position: relative;
    }
    .border::before { 
        content: "\0020";
        overflow: hidden;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: 1px solid #e0e0e0;
    }
    .anchor-item:first-child .border::before {
        border-color: #fa0;
    }
    .caption-outer {
        margin-top: .2rem;
        text-align: center;
    }
    .caption-inner {
        display: inline-block;
        overflow: hidden;
        position: relative;
        max-width: 60%;
        height: .5rem;
        padding: 0 .8rem;
    }
    .caption-inner::after {
        content: '\0020';
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        width: 100%;
        height: .02rem; 
    }
    .caption-wrap {
        display: inline-block;
        position: relative;
        z-index: 2;
        padding: 0 .2rem;
        background-color: #fff;
    }
    .caption-wrap::before {
        left: .04rem;
        content: '\0020';
        overflow: hidden;
        position: absolute;
        top: 50%;
        margin-top: -.04rem;
        width: .08rem;
        height: .08rem;
        border-radius: 50%;
    }
    .caption-wrap::after {
        right: .04rem;
        content: '\0020';
        overflow: hidden;
        position: absolute;
        top: 50%;
        margin-top: -.04rem;
        width: .08rem;
        height: .08rem;
        border-radius: 50%;
    }
    .caption-txt {
        display: inline-block;
        overflow: hidden;
        max-width: 100%;
        background-color: #fff;
        color: #000;
        font-size: .36rem;
        line-height: .5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .module-desc {
        position: relative;
        margin: .1rem 0;
        min-height: .4rem;
        padding: 0 .52rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
        text-align: justify;
    }
    .module-desc::before {
        content: '\0020';
        overflow: hidden;
        position: absolute;
        width: .32rem;
        height: .24rem;
        top: 0;
        left: .12rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAAXNSR0IArs4c6QAAA35JREFUSA21lktIVGEUx3VeGBW0E1NnLAqjpMemVVDQokSFwl6rokVBpItWYRDYA1q0iSTClhb0oIiUMsJND8hFC6WwVuU4jo0OaQ0OjqYz/b7rnOs339yrM4suXM7rf875f897S0oKfIaHh1tGRkZOFwjPgY2NjQXD4XDXxMTEmpwAhs90mHYmk/FGIpFb6XS6BX0BEpPBYPCFiXOzyd09NzfXTbx8ZmZmPTUaSktLZwVfKoqTjMfja5PJ5GNi9Vo85fV6D1ZXV7/VfI4qoz5CoIumqwRA82cM4BgyrXweCZhyampqHc0/4NebK1jZwsJCdzQa3WXm6DZLdh77id5cxbGbmcW7gnUkAMiXSCSeAtouQF3Cfnp+ft6eRj2mdEbeCOY2ddxmeFJyHAnA8A7J+wWkSwp/J7YnFAoN6X7RWXNF+iEYx9rkXyK3TfB5IJpfIPmsAHRJ8hfVvKam5ofuF318fLyc5ekBk7fbyc2Aa6H5DcErmXMKYL+Z3X5TB2j6Vzbfvqqqql+aL0dNpVIdOII5ziXjHMQ7l8xFLWcGYH8F9l4TBPuI3+8/sFzz0dHRHeSpXe/0XGbkec0V0CbA1NfR6IRTNiM/XllZGXGKiQ/y1yCft+mo+ZKRXxecKW0CTP1VlwJvGPlHM1G31WVDbpPuEx0C7aI7SYtAdtrN8y54NTI/b0AcpiTWaPqy9isunU+xWGy1S3xxCVi/jQDKTBDsoxRv41wneRO878DuNHHM3jbTl7VTXEgxNuc0kvRwO/Vy9pi1Zqz/IYo8dyliulMQa2JT9UmA4t/Qa8VeQfaSq74H6ljam3DrCkl6WM3UPdbdut8ZkZ9im3TACno9Az4jGGsPMPo5cRQiabqBnIYsdh7b+rAUkpvFtArWIuDxeKLiKELWKWx2Kn8Wkac+SLVq5lSOzEB/MQWyWPvMQ2LZY+pS28q3CKi7nSLq01vww6wNCJjR3Be9QDlEP2vZLQIqidtOrcufAgv89vl8NmF2dS95jwrMLYF8j2BtAtx2AwTUbZaSoJuEfWtFRUVc4thpSJzEfi0+Nwn2M39T9tVsE1AJ3FrvARxFdTsVs8Qv0uyB2QD/30Ag0Iy0Z8bEYPcTP8xr/8zYG0kHc07Vz2Mr717AIWQYOQimg+aOPyKSD9bDbakutlPoW8jzIgeZ3T5G3old7JGV0v9H/gMBi4VsMbCCvAAAAABJRU5ErkJggg==) 0 0/contain no-repeat;
    }
    .module-desc::after {
        content: '\0020';
        overflow: hidden;
        position: absolute;
        width: .32rem;
        height: .24rem;
        right: .12rem;
        bottom: 0;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAAAXNSR0IArs4c6QAAA4dJREFUSA3FlktIVFEYx507I6NDomkOI+lotWhRaIuC3otahPhYKClkDwiSaBEF7XosWgathF5kUJvaVCoFikllBS2KWmRFQfhIEQ1NJx9T8+j33eZcjvdeG1t14PB93//7/7/v3DvnnDueDG309/cXGYZxLJlMbgBezRzCf+H3+68UFRWNa1RXd2BgYK/H49mDpiJF+Ii9VVpa2m0XeBRA0yZELYiWK0yz816vd19JScl9DbPcsbGx0Nzc3HW0VRaoOdTtCYfD1dh5BZuNWelugG6E1kIUQbNRn89XWVxc/FjDMtAYg4ODvdhtOm73adpB83psTHLGyMhIANGNNE2F64/FYu002SiBGkNDQyfSNRUunFq0raqPQTEpFFaF0ticRCLRqnMoVK/Hf/PhHqR5tXAMAtlI/zLKEa8XAVoDozbSUmscEKLBO/ctVaHxtqd8D829Gp7Whb9DSLLid2nZTsJKgVh0HPPBmV4cQROkeabBEXkK7dPiVNdMlkI599eUvxQrP8/4+LhfXnUU8RFE1hlLV4ANJheDOVj4VWr0qDidhfs1GAz+kFedwfnq5YxuAXzFTAiGfc38LL59wO1TGJwk+krii8zvgoPNMB+I7zJMrdlYklwMb7naNgUCgTxE+cxG4FUuwozs7Oz3Og73V1lZ2Sn0+dxwxSwkl1ca0TnKBzcbO3Z0YWGhKeAKlSdw5MFeFhQUTKtCumUBSeJhxlpZOE30tOmDd4pjPbHO4JyugWCeNx0XH/ycHbPHXEpnZBPZcbTP1QfDkZyYmMhl89xD6HhahL1KaC+qYu79ZrT7Vaxb9KdVvKAxgqxIJNJBslwRdIvwrB7bfe7tOrDLdlxitN2yiVXOasynbRmv+CHNd6qkbhG26EI9Jz5P2hCPx++gt2oqDtpv+EdVLNYkTU5O5s3OzspncZee1PxOmp7U4gUuCz4McJuZuSDxJ/hJ4zp+oi96zhgdHQ1OTU09AdysJ5SPqC8nJ6cRK9ejY/Ck8lmUPwGOJxUyumYW/cwuNKLR6AqSYXsiJRqhYM1ixyelqYDj+geCuud50puutQXkzG6F9IgC2RrpDZdBDVfisIY5XDQ+XvVdbK1KUivOPM6TXlKY3VorpXkV5DYphG3nD15TKBSasQvcYjRZNO/Cysac5u5voGmXG9cV4/c6xLxAAdffy1WUAuX8o21jrvsb77/nfgNkSHFAQThm0wAAAABJRU5ErkJggg) 0 0/contain no-repeat;
    }
    .dataContainer {
        width: auto;
    }
    .list-item {
        position: relative;
        padding: .2rem 0;
    }
    .list-link {
        display: block;
    }
    .list-show {
        position: relative;
        float: left;
        width: 2rem;
        height: 1.8rem;
    }
    .mpg-defaultimg-small {
        background: #cfcfcf url(//s.qunarzz.com/piao_topic/image/common/default/288x288.png) 0 bottom no-repeat;
        background-size: 100% auto;
    }
    .topic-img {
        width: 100%;
        vertical-align: top;
    }
    .list-location {
        overflow: hidden;
        position: absolute;
        top: .1rem;
        left: .1rem;
        max-width: 78%;
        padding: 0 .1rem;
        background: rgba(0,0,0,.5);
        color: #fff;
        font-size: .24rem;
        line-height: .44rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-radius: .44rem;
    }
    .list-info {
        position: relative;
        margin-left: 2.2rem;
        height: 1.8rem;
    }
    .list-name {
        margin-right: .4rem;
        height: .76rem;
        color: #212121;
        font-size: .32rem;
        line-height: .38rem;
    }
    .ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .lighttxt-list {
        margin-top: .04rem;
        overflow: hidden;
        height: .34rem;
    }
    .lighttxt-item {
        float: left;
        min-width: .48rem;
        padding: 0 .14rem;
        color: #00afc7;
        font-size: .24rem;
        line-height: .34rem;
    }
    .lighttxt-item:first-child {
        padding-left: 0;
    }
    .lighttxt-light {
        color: #ff8300;
    }
    .list-price {
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        margin-top: .24rem;
        width: 100%;
        height: .44rem;
        line-height: .44rem;
    }
    .list-sale {
        color: #ff8300;
        font-size: .24rem;
    }
    .price {
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .price-num {
        font: .28rem Tahoma,Helvetica,sans-serif;
    }
    .list-sale .price-num {
        font-size: .4rem;
    }
    .list-cost {
        margin-left: .04rem;
        color: #616161;
        font-size: .24rem;
        text-decoration: line-through;
    }
    .list-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1.1rem;
        background: #ff8300;
        color: #fff;
        font-size: .28rem;
        line-height: .56rem;
        text-align: center;
        border-radius: .04rem;
    }
    .list-favorite {
        position: absolute;
        top: .2rem;
        right: 0;
        width: .36rem;
        height: .36rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA4pJREFUSA3FlktIVFEYx713ZDQ1Qpla1EJqZxiSUBStVKhVSC4kFHRUDKOiRQ97mlApFS2iwDDSUUYEF6XYohYueyxiwLJsVbgIKsUhGk0nRvv9R2e45rXxNXrgzDnnu9/3/f7ncc+dhIR1LoYd3+v17gwGg4U8y1U1DCOdtp/qo750u91PsU3Tj5bp6WnD4/EcwXCAqrgcbH5axfgSExO7y8rKBunPKXMEdHV1OcbGxmrxuEawE0iIdpB2lDYH+yZFM+5zOp1VpaWlQxp3dHRkIvgxPgUaU37i0884gzaL1kEbxF6H+Dv0p8Je/EQFdHZ2bp2YmOjGeQ/2AerptLS018XFxb/ljN1oa2vbMTU1dYYENYwDpmke1zNsTdjSsD3Edre8vPwz4/AKMakNgUBgP273qNnYXyUlJRWVlJR8V2xUQGtr63MSHCJBY0pKSj1gKbYtLHUBUA/JtsmBuK/EMTl3n20ARoQ4x8fH64m7yPBZZWXlYfmGBQCvJkkzCR9VVFQc04NYpb29PSsUCr2Rn8Ph2Ge3v3Y5YDXDqoZVBavFYP/SJycnhzD4MzIysgsLC3/ZBdrZELFdduBf7J7b2Xp6ejaOjo4OICKdrcjUyT3IsrzA+RTL8sAuaLVtLS0tJ8l5n0kfNFGyWwAGb1cbtFA+CytXAvSeh1JTU/Wer0lxuVzvxBTbpPMHqsl+JK4JHQhb7hBTbJOODyWG3+8Pb8VaiBBLTLHDAgRF1d61gP/D8pnsvQ7fMLWW12pLvEXMMnTdD4ttcuMF2IsaDC4ulqZ4C5hluMQUW1uQwI30hKaTfSniHb0SLxHKLYZYs8yEsAABeQtOoOo93evxEMGFd1m5xRBLTJXox0gDPhib+Rz3oXIXw6vcjDdkX2nh/r9EzpvkGeALm8/S68yFyxwBsqy2CFZTX78G6jy4ePMEyLhaIiJwlv0DJz7POnNxVKJnYGY48ytHAgpWciZY9gtkaxCcz/WcZbeybAXIYSUigNey542k+Sg4n+sfVqi1b7sFVoelbgen/Ty36i3Bk5OT8yN/vaw5rf2YAuS8WBHM/Bwzv03IIPC8WHDlXpQAOcYSsRy48i54BvTQWv53JjjtZzVzDtwnasxlt+Zd9ApEgqwrAawO+0QETj+PK/ZbxHcx7ZIFKKlVhMaaOc2S4eFY/Syn9Pb2poyMjBwl1smd4WWLAsvJs+4xfwEniuJpmH9OIQAAAABJRU5ErkJggg==) center/contain no-repeat;
        display: none;
    }
    .border-top::before {
        content: "\0020";
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #e0e0e0;
        transform: scaleY(.33333);
    }
    .entrance-list {
        margin: .2rem;
    }
    </style>
    <style scoped>
    .caption-inner::after {
        background-image: linear-gradient(to right,#ffa305,#ff431d);
    }
    .caption-wrap::before {
        background: #ffa305;
    }
    .caption-wrap::after {
        background: #ff431d;
    }
    .caption-txt {
        background-image: linear-gradient(to right,#ffa305,#ff431d);
    }
</style>