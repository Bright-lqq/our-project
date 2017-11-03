<template>
	<div>
		<ul class="listitem-con">
			<li class="location">
				<a href="" class="address">
					<i class="iconfont icon-dingwei"></i>
					北京
				</a>
			</li>
			<li class="hot-spring">
				<a href="" class="spring">
					<i class="iconfont icon-earth"></i>
					5折泡温泉
				</a>
			</li>
		</ul>
		<ul class="activity">
			<li class="selected-spring">
				<a href="https://sale.piao.qunar.com/touch/topic/mk/t_2469.htm?from=as_rmhd_1_%E5%8C%97%E4%BA%AC&cat=from_area%3Dts_yunying%26from_index%3D0%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" class="selected-spring-link">
				</a>
			</li>
			<li class="autumn-sale">
				<a href="https://sale.piao.qunar.com/touch/topic/mk/t_2390.htm?from=as_rmhd_2_%E5%8C%97%E4%BA%AC&cat=from_area%3Dts_yunying%26from_index%3D1%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" class="autumn-sale-link">
					
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.listitem-con {
		width: 100%;
		height: .94rem;
		background: #fff;
		border-top: 1px solid #eee; 
		border-bottom: 1px solid #eee;
	}
	.location, .hot-spring {
		width: 49%;
		float:left;
	}
	.location {
		border-right: 1px solid #eee; 
	}
	.address, .spring {
		display: block;
		height: .94rem;
		line-height: .94rem;
		text-align: center;
		color: #212121;
	}
	.activity {
		margin-top: .2rem;
		width: 100%;
		height: 1.38rem;
		background: #fff;
		border-top: 1px solid #eee; 
		border-bottom: 1px solid #eee;
	}
	.selected-spring, .autumn-sale {
		float: left;
		width: 49%;
		height: 1.38rem;
	}
	.selected-spring {
		background:	url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
		background-size:auto 100%;
		border-right: 1px solid #eee;
	}
	.autumn-sale {
		background:url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;
		background-size:auto 100%;
	}
	.selected-spring-link, .autumn-sale-link {
		display: block;
		height:1.38rem;
	}
</style>
