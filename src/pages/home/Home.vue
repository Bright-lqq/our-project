<template>
   <div style="background: #f5f5f5;">
    <index-header />
    <index-swiper />
    <index-activity />
  </div>
</template>

<script>
 import header from "./Header.vue";
 import swiper from "./Swiper.vue";
 import activity from "./Activity.vue";
  export default{
    components: {
      "index-header": header,
      "index-swiper": swiper,
      "index-activity": activity,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
