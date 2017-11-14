<template>
    <div style="background: #f5f5f5;">
        <div>{{$store.state.name}}</div>
        <activity-header />
        <activity-banner />
        <activity-discount />
        <activity-supervalue />
        <activity-landscape />
        <activity-health />
        <activity-parentchild />
        <activity-oneday />
        <activity-guardian />
        <activity-top />
    </div>
</template>

<script>
    import header from "./components/Header"
    import banner from "./components/Banner"
    import discount from "./components/Discount"
    import supervalue from "./components/Supervalue"
    import landscape from "./components/Landscape"
    import health from "./components/Health";
    import parentchild from "./components/Parentchild"
    import oneday from "./components/Oneday";
    import guardian from "./components/Guardian"
    import top from "./components/Top"
    import { AJAX_GET_DATA } from './types.js'
    import { mapState, mapActions } from 'vuex'
    import axios from 'axios'

    export default {
        components: {
            "activity-header": header,
            "activity-banner": banner,
            "activity-discount": discount,
            "activity-supervalue": supervalue,
            "activity-landscape": landscape,
            "activity-health": health,
            "activity-parentchild": parentchild,
            "activity-oneday": oneday,
            "activity-guardian": guardian,
            "activity-top": top
        },

        mounted() {
            this.getActivityData()
        },

        methods: mapActions({
            getActivityData: (dispatch) => {
                dispatch(AJAX_GET_DATA)
            }
        })
    }
</script>
