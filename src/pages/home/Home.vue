<template>
   <div>
    <index-header />
    <index-swiper />
  </div>
</template>

<script>
 import header from "./Header.vue";
 import swiper from "./Swiper.vue";
  export default{
    components: {
      "index-header": header,
      "index-swiper": swiper
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
