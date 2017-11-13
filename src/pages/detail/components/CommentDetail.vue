<template>
	<div class="comment-container border-bottom">
		<h3 class="comment-title">用户评论</h3>
		<div class="comment-list">
			<div class="comment-item border-top">
				<div class="comment-stardate">
					<span class="starlevel">
						<i class="iconfont icon-wuxing starlevel-icon"></i>
					</span>
					<span class="comment-date">p*6&nbsp;&nbsp;2017-10-20</span>
				</div>
				<p class="comment-content">
					红色的过山车，进门的第一个，超刺激啊，一不小心头都要扭了的感觉！太快了！完全没有时间屏息！手都抓不牢！反正是受惊了～然后后面的都还好，黄色的过山车是比较温和的，虽然是趴着的姿势，但没那么快了，其他的失重感有的，不过都有时间做心理准备！刺激的都玩过了，工作日来的，都不用排队挺好的。两百多的票，明年一月份前还能再玩一次，可惜只是来北京旅游一下
				</p>
				<div class="comment-imgs">
					<div class="comment-imgouter"  v-for="list in CommentImg" :key="list.id">
						<div class="comment-imginner">
							<img class="comment-img" :src="list.img" style=""/>
						</div>
					</div>
					<div class="comment-imgnumtag">
						<span class="commenttag-bg"></span>
						<span class="comment-tagnum">共7张</span> 
					</div>
				</div>
				<div class="more-refresh border-top">
					查看全部评论
					<i class="iconfont icon-jinrugengduo"></i>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["CommentImg"]
	}
</script>

<style scoped>
.comment-container {

	margin-top: .2rem;
	position: relative;
}
.comment-title {

	padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .3rem;
    line-height: .88rem;
    text-indent: .2rem;
}
.comment-title::after {
	
    content: " ";
    position: absolute;
    top: .33rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    border-radius: .04rem;
}
.comment-item {
	padding: .1rem .2rem .3rem .2rem;
}
.starlevel {
	color: #00bcd4;
} 
.comment-list {
	background: #fff;
}
.comment-stardate {
    margin-top: .1rem;
    line-height: .6rem;
    font-size: .28rem;
}
.border-top {
	border-top: .02rem solid #e0e0e0;
}
.starlevel-icon {
	font-size: .25rem;
}
.comment-date {
	position: relative;
    float: right;
    top: .16rem;
    margin-left: .2rem;
    line-height: .28rem;
    font-size: .24rem;
    vertical-align: middle;
    color: #212121;
}
.comment-imgs {
	margin: .2rem 0 .1rem 0;
    position: relative;
    zoom: 1;
    overflow: hidden;
}
.comment-imginner {
	margin-left: .07rem;
	margin-right: .07rem;
	width: 30%;
    margin-bottom: .1rem;
	float: left;
}
.comment-img {
    width: 100%;
   	float: left;
}
.comment-tagnum {
	position: absolute;
    right: .07rem;
    height: .4rem;
    width: .94rem;
    line-height: .4rem;
    font-size: .24rem;
    color: #fff;
    text-align: right;
    padding-right: .05rem;
}
.commenttag-bg {
	position: absolute;
    right: .07rem;
    display: inline-block;
    background: #000;
    opacity: .5;
    height: .4rem;
    width: .94rem;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
}
.comment-imgnumtag {
	position: absolute;
    bottom: .8rem;
    right: 0;
}
.more-refresh {
	position: relative; 
    margin-top: -.02rem;
    height: .8rem;
    background: #fff;
    color: #616161;
    line-height: .8rem;
    text-align: center;
    z-index: 2;
}
</style>