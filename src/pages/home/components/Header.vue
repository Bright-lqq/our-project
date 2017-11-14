<template>
	<header class="header">
		<a class="header-left">
			<i class="iconfont icon-return"></i>
		</a>
		<router-link to="/suggest">
			<div class="header-title">
				<i class="iconfont icon-sousuo"></i>
				输入城市/景点/游玩主题
			</div>
		</router-link>
		<div class="header-right" role="right">
			<a href="/touch/toNewCityList.htm" title="城市选择" class="linkarea">
			北京
			</a>
		</div>
		<span class="triangle_border_down"></span>
	</header>
</template>

<style scoped>
	.header{
		position: relative;
		display: box;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
		color: #fff;
	}
	.header-left{
		float: left;
		width: .4rem;
		line-height: .44rem;
		padding:.2rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
	}
	.header-title {
		position:absolute;
		top:.14rem;
		left:.8rem;
		right:1.28rem;
		line-height: .6rem;
		background:#fff;
		color:#ccc;
		border-radius: .06rem;
	}
	.header-right{
		width:1.28rem;
		float: right;
		line-height: .88rem;
	}
	.linkarea{
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
