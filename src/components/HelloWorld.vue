<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>

  export default {
    name: "hello",
    data(){
      return {
        msg: "你好"
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    background:blue;
  }

</style>
