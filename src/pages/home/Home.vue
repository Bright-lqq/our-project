<template>
   <div style="background: #f5f5f5;">
      <index-header />
      <index-swiper />
      <index-iconswiper />
      <index-activity />
      <index-hotlist />
      <index-weekendlist />
  </div>
</template>

<script>
  import header from "./Header.vue";
  import swiper from "./Swiper.vue";
  import iconswiper from "./Iconswiper.vue";
  import activity from "./Activity.vue";
  import hotlist from "./Hotlist.vue";
  import weekendlist from "./WeekendList.vue";

  export default {
    components: {
      "index-header": header,
      "index-swiper": swiper,
      "index-iconswiper": iconswiper,
      "index-activity": activity,
      "index-hotlist":hotlist,
      "index-weekendlist":weekendlist
    }
  }
</script>

<style scoped>
  
</style>
