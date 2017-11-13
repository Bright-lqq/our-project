<template>
    <div>
        <list-header />
        <list-section :listInfo = "listInfo" :menuleftInfo = "menuleftInfo"/>
        <list-footer />
    </div>
</template>

<script>
    import header from './components/Header';
    import section from './components/Section';
    import footer from './components/Footer';
    import axios from 'axios'
    import { AJAX_GET_DATA } from './type.js'
    import { mapState, mapActions } from 'vuex'
    export default {
        components: {
            "list-header": header,
            "list-section": section,
            "list-footer": footer
        },
        computed: mapState({
            listInfo: (state) => {
                return state.list.listInfo
            },
            menuleftInfo: (state) => {
                return state.list.menuleftInfo
            },
        }),
        mounted() {
            !this.listInfo.length && this.getListData(),
            !this.menuleftInfo.length && this.getListData()
        },
        methods: mapActions({
            getListData: (dispatch) => {
                dispatch(AJAX_GET_DATA)
            }
        })
    }
</script>
