<template>
   <div>
    <index-header />
    <index-swiper />
    <index-iconswiper />
  </div>
</template>

<script>
 import header from "./Header.vue";
 import swiper from "./Swiper.vue";
 import iconswiper from "./Iconswiper.vue";
  export default{
    components: {
      "index-header": header,
      "index-swiper": swiper,
      "index-iconswiper": iconswiper
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
