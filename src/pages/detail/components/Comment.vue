<template>
    <div class="commentsinfo">
        <div class="commentsinfo-con">
            <i class="iconfont icon-svgiconxiaolian comment-icon"></i>
            <span class="starlevel">
                <i class="iconfont icon-wuxing starlevel-icon"></i>
            </span>
            <span class="comments-tagscore">5.0分</span>
            <a class="comments-total" role="commentLink" href="/">
                <span class="comments-totalnum">48526评论&nbsp;
                    <i class="iconfont icon-jinrugengduo Enter-icon"></i>
                </span>
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.commentsinfo {
    background-color: #fff;
}
.commentsinfo-con {
    margin-bottom: .2rem;
    margin-left: .2rem;
    line-height: .8rem;
}
.comment-icon {
    display: inline-block;
    color: #00bcd4;
}
.starlevel-icon {
    color: #00bcd4;
}
.comments-tagscore {
    margin-left: .1rem;
    color: #00afc7;
}
.comments-total {
    float: right;
    display: block;
    margin-bottom: .2rem;
}
.comments-totalnum {
    display: inline-block;
    line-height: .28rem;
    font-size: .28rem;
    margin-left: .16rem;
    margin-right: .2rem;
    color: #9e9e9e;
}
.Enter-icon {
    float: right;
    display: block;
    font-size: .42rem;
    color: #9e9e9e;
    }
</style>