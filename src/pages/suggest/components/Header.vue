<template>
	<header class="suggest-header">
		<router-link to="/">
			<a class="suggest-header-left">
				<i class="iconfont icon-return"></i>
			</a>
		</router-link>
		<input class="suggest-header-title" placeholder="输入城市或景点" v-model="city" />
		<div class="suggest-header-right" @click="handleClick()">
			<a class="suggest-header-search">搜索</a>
		</div>
		<div class="connect-cities" v-show="isshow">
			<div class="connect-head">
				<span class="search-suggest">搜索建议</span>
				<span class="close">关闭</span>
			</div>
			<div class="connect-content"></div>
		</div>
		
	</header>
</template>

<script>
export default {
	data () {
	    return {
	    	isshow: false,
			city: '',
			cities: ['上海'],
			selectCities: []
	    }
	},

	methods: {
	},

	watch:{
		city: function(val, oldVal){
			if(val.length == 0) {
				this.isshow = false;
			}else {

				this.isshow = true;
				var cities = [];
				this.cities.forEach((item, index) => {
					if(item.indexOf(val) >= 0){
						cities.unshift(item)
					}
				})  
				this.selectCities = cities;
			}
		}
	}
}
</script>


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
	.connect-cities {
		position: relative;
		top: .88rem;
		min-height: 3rem;
		background: #fff; 
		z-index: 3;
		box-shadow: 0 2px 6px 0 #c9cccd; 
	}
</style>