<template>
	<div class = "footer">
		<div class="pager">
		    <a href="" class = "list-disable-btn" >上一页</a>
		    <span class = "list-page-num">1</span>
		    <!-- <span class = "list-page-num">...</span>
		    <span class = "list-page-num"></span>
		    <span class = "list-page-num">...</span>
		    <span class = "list-page-num">{{pageNo}}</span> -->
		    <a href="" class = "list-next-btn">下一页</a>
   		 </div>
	</div>
</template>

<script>
	export default {
		props: {
			 pageNo: {
			    type: Number,
			    default: 1
		    },
		}
	}
</script>

<style scoped>
	.footer {
		width: 6.4rem;
		height: 1.2rem;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.pager {
		height: .7rem;
    	line-height: .7rem;
    	text-align: center;
	}
    .list-disable-btn {
    	display: block;
    	width: 1.4rem;
    	height: 0.6rem;
    	background: #bdbdbd;
	    color: #fff;
	    border: 0;
	    line-height: 0.6rem;
	    margin-left: 1.2rem;
    }
    .list-disable-btn:hover {
	  color: #00afc7;
	  background: #fff;
	  border-radius: .06rem;
	  border: 1px solid #00afc7;
	}
	.list-page-num {
		position: relative;
		left: 0.36rem;
		top: -.68rem;
		color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	    display: inline-block;
	    width: 35px;
	    height: 30px;
	    line-height: 30px;
	    cursor: pointer;
	    overflow: hidden;
	}
	.list-next-btn {
		position: relative;
		top: -.7rem;
		left: 0.3rem; 
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
</style>
