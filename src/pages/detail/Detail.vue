<template>
    <div class="detail-main">
            <detail-Banner :imgList = "imgList"/>
            <detail-Base />
            <detail-Comment />
            <detail-Promote :promoteInfo = "promoteInfo"/>
            <detail-Promo :promoInfo = "promoInfo" :promoInfo2 = "promoInfo2"/>
            <detail-Ticketgroup :TicketgroupInfo = "TicketgroupInfo" />
            <detail-CommentDetail :CommentImg = "CommentImg"/>
            <detail-Recommend :recommendInfo = "recommendInfo"/>
    </div>
</template>

<script>
    import Banner from "./components/Banner";
    import Base from "./components/Base";
    import Comment from "./components/Comment";
    import Promote from "./components/Promote";
    import Promo from "./components/Promo";
    import Ticketgroup from "./components/Ticketgroup";
    import CommentDetail from "./components/CommentDetail";
    import Recommend from "./components/Recommend";
    import axios from "axios";
    import { AJAX_GET_DATA } from "./types.js";
    import { mapState, mapActions } from "vuex";

    export default {
        components: {
            "detail-Banner":Banner,
            "detail-Base":Base,
            "detail-Comment":Comment,
            "detail-Promote":Promote,
            "detail-Promo":Promo,
            "detail-Ticketgroup":Ticketgroup,
            "detail-CommentDetail":CommentDetail,
            "detail-Recommend":Recommend
        },
        computed: mapState({
            promoteInfo: (state) => {
                return state.detail.promoteInfo
            },
            promoInfo: (state) => {
                return state.detail.promoInfo
            },
            promoInfo2: (state) => {
                return state.detail.promoInfo2
            },
            TicketgroupInfo: (state) => {
                return state.detail.TicketgroupInfo
            },
            CommentImg: (state) => {
                return state.detail.CommentImg
            },
            recommendInfo: (state) => {
                return state.detail.recommendInfo
            },
            imgList: (state) => {
                return state.detail.imgList
            },
        }),
        mounted() {
            !this.promoteInfo.length && this.getDetailData();
            !this.promoInfo.length && this.getDetailData();
            !this.promoInfo2.length && this.getDetailData();
            !this.TicketgroupInfo.length && this.getDetailData();
            !this.CommentImg && this.getDetailData();
            !this.recommendInfo && this.getDetailData();
            !this.imgList && this.getDetailData();
        },
        methods: mapActions({
            getDetailData: (dispatch) => {
                dispatch(AJAX_GET_DATA)
            }
        })
    }
</script>

<style scoped>
   .detail-main {
       background: #f5f5f5;
   }
</style>
