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
        <activity-coupon />
        <activity-city />

    </div>
</template>

<script>
    import header from "./components/Header.vue";
    import banner from "./components/Banner.vue";
    import discount from "./components/Discount.vue";
    import supervalue from "./components/Supervalue.vue";
    import landscape from "./components/Landscape.vue";
    import health from "./components/Health.vue";
    import parentchild from "./components/Parentchild.vue";
    import oneday from "./components/Oneday.vue";
    import guardian from "./components/Guardian.vue";
    import top from "./components/Top.vue";
    import coupon from "./components/Coupon.vue";
    import city from "./components/City.vue";
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
        "activity-top": top,
        "activity-coupon": coupon,
        "activity-city": city
        

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

<style scoped>
  
</style>
