<template>
  <div>
    <activity-header />
    <activity-list :activityInfo = "activityInfo"/>
  </div>
</template>

<script>
  import header from './components/Header';
  import list from './components/List';
  import axios from 'axios'
  import { AJAX_GET_DATA } from './types.js'
  import { mapState, mapActions } from 'vuex'
  export default {
    components: {
      "activity-header": header,
      "activity-list": list
    },
    computed: mapState({
      activityInfo: (state) => {
        return state.activity.activityInfo
      },
    }),
    mounted() {
      !this.activityInfo.length && this.getListData()
    },
    methods: mapActions({
      getListData: (dispatch) => {
        dispatch(AJAX_GET_DATA)
      }
    })
  }
</script>

<style scoped>
  
</style>