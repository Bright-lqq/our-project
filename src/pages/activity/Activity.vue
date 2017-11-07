<template>
   <div style="background: #f5f5f5;">
      <activity-header />
      <activity-banner />
      <activity-discount />

  </div>
</template>

<script>
  import header from "./components/Header.vue";
  import banner from "./components/Banner.vue";
  import discount from "./components/Discount.vue";


  export default {
    components: {
      "activity-header": header,
      "activity-banner": banner,
      "activity-discount": discount

    }
  }
</script>

<style scoped>
  
</style>
