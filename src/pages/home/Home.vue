<template>
   <div style="background: #f5f5f5;">
      <index-header />
      <index-swiper />
      <index-activity />
      <index-weekendlist />
  </div>
</template>

<script>
  import header from "./Header.vue";
  import swiper from "./Swiper.vue";
  import activity from "./Activity.vue";
  import weekendlist from "./WeekendList.vue";
  export default{
    components: {
      "index-header": header,
      "index-swiper": swiper,
      "index-activity": activity,
      "index-weekendlist":weekendlist
    }
  }
</script>

<style scoped>
  
</style>
