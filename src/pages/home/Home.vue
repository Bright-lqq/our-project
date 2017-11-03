<template>
   <div>
    <index-header />
    <index-swiper />
    <index-weekendlist />
  </div>
</template>

<script>
 import header from "./Header.vue";
 import swiper from "./Swiper.vue";
 import weekendlist from "./WeekendList.vue";
  export default{
    components: {
      "index-header": header,
      "index-swiper": swiper,
      "index-weekendlist":weekendlist
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
