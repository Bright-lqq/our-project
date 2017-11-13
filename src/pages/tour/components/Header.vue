<template>
	<header class="tour-header">
		<router-link to="/">
			<a class="tour-header-left">
				<i class="iconfont icon-return"></i>
			</a>
		</router-link>
		<input class="tour-header-title" placeholder="一日游" />
		<div class="tour-header-right">
			<a class="tour-header-search">搜索</a>
		</div>
	</header>
</template>

<style scoped>
	.tour-header {
		position: relative;
		display: box;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
		color: #fff;
	}
	.tour-header-left {
		float: left;
		width: .4rem;
		line-height: .44rem;
		padding:.2rem;
		color: #fff;
		font-size: .36rem;
	}
	.tour-header-title {
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
	.tour-header-right {
		width:.98rem;
		float: right;
		line-height: .88rem;
	}
	.tour-header-search {
		color: #fff;
	}
</style>