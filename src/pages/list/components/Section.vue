<template>
    <div class = "list-box">
    	<div class="list-filter">
    		<div class="list-select" >
    			<span class="list-select-caption" :class = "{caption:active}" @click = "handleClickDown()">{{allSale}}
              <i :class = "{'triangle_border_down':!active,'triangle_border_up':active}"></i>
          </span>
          <div class = "list-submenu">
                <div class = "list-submenu-left"  >
                    <ul class = "list-submenu-all" v-if = "isShow">
                        <li class = "list-submenu-classification" v-for = "item in menuleftInfo" :key = "item.id" @click = "handleClassifyClick(item)">
                          <img class = "list-submenu-icon" :src="item.src" alt="">{{item.itemtitle}}
                          <span class = "list-submenu-num">{{item.subnum}}</span>
                            <ul class = "list-submenu-scenicspot" >
                                <li class = "list-submenu-item" v-for = "menu in showlist" :key = "menu.id" >{{menu.title}}
                                  <span class = "list-submenu-num">{{menu.num}}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    		</div>
    		<div class="list-select">
    			<span class="list-select-caption" :class = "{caption:Activity}" @click = "handleClickPulldown()">{{allrecommend}}
              <i :class = "{'triangle_border_down':!Activity,'triangle_border_up':Activity}"></i>
          </span>
          <ul class = "list-select-caption-center" v-if = "Out" >
            <li class = "list-select-caption-title">{{recommendA}}</li>
            <li class = "list-select-caption-title">{{recommendB}}</li>
            <li class = "list-select-caption-title">{{recommendC}}</li>
          </ul>
    		</div>
    	</div>
      <div class = "list-ticketCon">
          <ul class = "list-ticketCon-list">
             <li class = "list-ticketCon-group" v-for = "list in listInfo" :key = "list.id">
                  <div class = "list-ticketCon-info">
                      <div class = "list-ticketCon-imgcon">
                          <img class = "list-ticketCon-picture" :src="list.src" alt="">
                      </div>
                      <div class="list-ticketCon-detail">
                          <h3 class="list-ticketCon-name">{{list.name}}</h3>
                          <span class="list-ticketCon-word">{{list.hot}}</span>
                          <span class="list-ticketCon-price">¥<em>{{list.price}}</em><span class="list-ticketCon-text">&nbsp;起</span>
                          </span>
                          <div class="list-ticketCon-comments">
                              <span class="iconfont icon-wuxing"></span>
                              <span class="list-ticketCon-totalnum">{{list.totalnum}}</span>
                          </div>
                          <div class="list-ticketCon-location">
                              <span class="list-ticketCon-address">{{list.address}}</span>
                          </div>
                      </div>
                  </div>
                  <div class="list-ticketCon-item">
                      <h4 class="list-ticketCon-adult">{{list.morning}}</h4>
                      <span class="list-ticketCon-qunarprice">¥<em class = "list-ticketCon-number">{{list.adult}}</em></span></a>
                  </div>
                  <div class="list-ticketCon-item" style = "border:0">
                      <h4 class="list-ticketCon-adult">{{list.afternoon}}</h4>
                      <span class="list-ticketCon-qunarprice">¥<em class = "list-ticketCon-number">{{list.student}}</em></span></a>
                  </div>
             </li>
          </ul>
      </div>
    </div>
</template>

<script>
    export default {
        props: ["listInfo","menuleftInfo"],
        data() {
          return {
            allSale: "全部分类",
            allrecommend: "推荐排序",
            recommendA:"推荐排序",
            recommendB:"离我最近",
            recommendC:"人气最高",
            showlist: [],
            id: 0,
            isShow: false,
            Out:false,
            active: false,
            Activity: false,
          }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
          handleClassifyClick(res) {
            this.showlist = res.list;
          },
          handleClickDown() {
            this.isShow = (this.isShow == false)?true:false;
            this.active = !this.active;
          },
          handleClickPulldown() {
            this.Out = (this.Out == false)?true:false;
            this.Activity = !this.Activity;
          },
         handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          },
        }
    }
   
</script>

<style scoped>
.list-box {
  width: 6.4rem;
  height: 42rem;
  background: #fff;
}
.list-filter {
  height: .8rem;
  background-color: #fff;
  width: 100%;
  border-top:0;
}
.list-filter .list-select:first-child {
  border-right:0;
}
.list-filter .list-select {
  display: block;
  box-sizing: border-box;
}
.list-select {
  width: 3.2rem;
  height: .8rem;
  position: relative;
  color: #212121;
  line-height: .8rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: left;
  border: 1px solid #ccc;
  border-bottom: 0;
}
.list-select-caption {
  position: relative;
  display: block;
  width: 100%;
  height: .8rem;
  color: #212121;
  line-height: .8rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;   
}
.list-select-firstcaption {
  position: relative;
  top:-39px;
  left:0;
  display: none;
  width: 100%;
  height: .8rem;
  color: #00afc7;
  line-height: .8rem;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;  
}
.triangle_border_down {
  position:absolute;
  right:22%;
  top:45%;
  display: block;
  border-width:5px 5px 0;
  border-style:solid;
  border-color:#000 transparent transparent;
}
.triangle_border_up {
  vertical-align: top;  
  background-color: rgb(255, 255, 255);
  border-bottom: 5px solid #00afc7;  
  border-right: 5px solid transparent;  
  border-left: 5px solid transparent;</span>  
  content: "";  
  position:absolute;
  right:22%;
  top:45%;
}
.list-ticketCon {
  height: 38rem;
}
.list-ticketCon-group {
  height: 3.8rem;
  border:1px solid #ccc;
  margin-bottom: .2rem;
  background: #fff;
}
.list-ticketCon-info {
  width: 6rem;
  height: 1.98rem;
  border-bottom: .02rem dashed #ccc;
  margin-left: .2rem;
}
.list-ticketCon-imgcon {
  position: relative;
  top: .2rem;
  width: 1.6rem;
  height: 1.6rem;
  float: left;
}
.list-ticketCon-picture {
  width: 1.6rem;
  height: 1.6rem;
}
.list-ticketCon-detail {
  position: relative;
  top: .2rem;
  left: .2rem;
  overflow: hidden;
  float: right;
  width: 4.4rem;
  height: 1.6rem;
}
.list-ticketCon-name {
  float: left;
  overflow: hidden;
  max-width: 60%;
  color: #212121;
  font-size: .32rem;
  line-height: .36rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-ticketCon-word {
  display: inline-block;
  margin-left: .06rem;
  width: .3rem;
  height: .3rem;
  background: #ff1200;
  color: #fff;
  font-size: .24rem;
  line-height: .3rem;
  text-align: center;
}
.list-ticketCon-price {
  position: relative;
  left: 1.2rem;
  top:0;
  height: .36rem;
  color: #ff8300;
  font-size: .36rem;
}
.list-ticketCon-text {
  color: #9e9e9e;
  font-size: .2rem;
}
.list-ticketCon-comments {
  margin-top: .38rem;
  height: .64rem;
  line-height: .64rem;
}
.icon-wuxing {
  display: inline-block;
  position: relative;
  width: 1.2rem;
  height: .24rem;
  font-size: .24rem;
  color: #00afc7;
}
.list-ticketCon-totalnum {
  position: relative;
  margin-left: .06rem;
  color: #9e9e9e;
  font-size: .24rem;
}
.list-ticketCon-location {
  position: absolute;
  bottom: 0;
  color: #9e9e9e;
  font-size: 0;
  white-space: nowrap;
}
.list-ticketCon-address {
  font-size: .24rem;
}
.list-ticketCon-item {
  position: relative;
  height: .88rem;
  margin: 0 .2rem;
  border-bottom: .02rem dashed #ccc;
}
.list-ticketCon-adult {
  overflow: hidden;
  margin-right: 1.2rem;
  width: 4.8rem;
  height: .88rem;
  color: #212121;
  font-size: .28rem;
  line-height: .9rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-ticketCon-qunarprice {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.2rem;
  height: .9rem;
  color: #ff8300;
  font-size: .2rem;
  line-height: .9rem;
  text-align: right;
}
.list-ticketCon-number {
  font-size: .36rem;
}
.list-submenu {
  position: absolute;
  z-index: 1;
  width: 6.4rem;
  height: 4.8rem;
  overflow: hidden;
}
.list-submenu-left {
  width: 6.4rem;
  height: 4.8rem;
}
.list-submenu-all {
  width: 3.2rem;
  float: left;
  height: 4.8rem;
  overflow-y: scroll; 
}
.list-submenu-all::-webkit-scrollbar {
  display: none;
}
.list-submenu-classification {
  text-align: left;
  font-size: .24rem;
  padding-left: .3rem;
  line-height: .8rem;
  height: .78rem;
  overflow: hidden;
  color: #212121;
  width: 2.9rem;
  border-top: 1px solid #ccc;
  background: #fff;
}
.list-submenu-icon {
  width: .3rem;
  height: .3rem;
  vertical-align: middle;
  margin-right: .1rem;
}
.list-submenu-num {
  float: right;
  margin-right: .4rem;
  font-size: .24rem;
  color: #9e9e9e;
}
.list-submenu-scenicspot {
  position: absolute;
  top: 0;
  left: 3.2rem;
  z-index: 1;
  width: 3.2rem;
  height: 4.8rem;
  background: #f1f1f1;
  float: right;
  overflow-y: scroll; 
}
.list-submenu-scenicspot::-webkit-scrollbar {
  display: none;
}
.list-submenu-item {
  padding-left: .3rem;
  line-height: .8rem;
  height: .8rem;
  overflow: hidden;
  color: #212121;
  text-align: left;
  font-size: .24rem;
}
.list-select-caption-center {
  position: absolute;
  top: .8rem;
  right: 0;
  width: 6.4rem;
  height: 2.4rem;
  background: red;
  z-index: 1;
}
.list-select-caption-title {
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.caption {
  color: #00afc7;
}
</style>
