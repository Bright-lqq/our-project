<template>
    <div class="detail-main">
        <detail-Banner />
        <detail-Base />
    </div>
</template>

<script>
    import Banner from "./Banner.vue";
    import Base from "./Base.vue";

    export default {
        components: {
            "detail-Banner":Banner,
            "detail-Base":Base
        }
    }
</script>

<style scoped>
   
</style>
