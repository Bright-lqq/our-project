<template>
	<header class="suggest-header">
		<router-link to="/">
			<a class="suggest-header-left">
				<i class="iconfont icon-return"></i>
			</a>
		</router-link>
		<input class="suggest-header-title" placeholder="输入城市或景点" />
		<div class="suggest-header-right">
			<a class="suggest-header-search">搜索</a>
		</div>
		
	</header>
</template>

<style scoped>
	.suggest-header {
		position: relative;
		display: box;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
		color: #fff;
	}
	.suggest-header-left {
		float: left;
		width: .4rem;
		line-height: .44rem;
		padding:.2rem;
		color: #fff;
		font-size: .36rem;
	}
	.suggest-header-title {
		position: absolute;
		top: .14rem;
		left: .8rem;
		width: 4.22rem;
		height: .4rem;
		border-radius: .06rem;
		border: 0;
		padding: .1rem .2rem;
		font-family: "微软雅黑";
		font-size: .28rem;
		line-height: .4rem;
		background: #fff;
		color: #ccc;
	}
	.suggest-header-right {
		width:.98rem;
		float: right;
		line-height: .88rem;
	}
	.suggest-header-search {
		color: #fff;
	} 
	
</style>