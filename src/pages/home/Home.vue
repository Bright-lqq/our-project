<template>
   <div>
      <index-header />
      <index-swiper />
      <index-hotlist />
  </div>
</template>

<script>
 import header from "./Header.vue";
 import swiper from "./Swiper.vue";
 import hotlist from "./Hotlist.vue";
 
  export default{
    components: {
      "index-header": header,
      "index-swiper": swiper,
      "index-hotlist":hotlist
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
