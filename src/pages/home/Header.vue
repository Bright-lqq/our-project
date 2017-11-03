<template>
  <header class="mp-header">
    <a class="mp-header-left">
      <i class="iconfont icon-fanhui"></i>
      </a>
    <div class="mp-header-title">
      <i class="iconfont icon-sousuo"></i>
     输入城市/景点/游玩主题
    </div>
    <div class="mp-header-right" mp-role="right">
      <a href="/touch/toNewCityList.htm" title="城市选择" class="mp-linkarea">
      北京
      </a>

    </div>
    <span class="triangle_border_down"></span>
  </header>
</template>

<script>


</script>

<style scoped>
  .mp-header{
    position: relative;
    display: box;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
  }
  .mp-header-left{
    float: left;
    width: .4rem;
    line-height: .44rem;
    padding:.2rem;
    color: #fff;
    font-size: .36rem;
    text-align: left;
  }
  .mp-header-title {
    position:absolute;
    top:.14rem;
    left:.8rem;
    right:1.28rem;
    line-height: .6rem;
    background:#fff;
    color:#ccc;
    border-radius: .06rem;
  }
  .mp-header-right{
    width:1.28rem;
    float: right;
    line-height: .88rem;
    
  }
  .mp-linkarea{
    color:#fff;
    display:block;
    width:.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .triangle_border_down{
    position:absolute;
    border-width:7px 7px 0;
    border-style:solid;
    border-color:#fff transparent transparent;
    right:4%;
    top:40%;
  }

</style>
