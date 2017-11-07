<template>
    <div class="detail-main">
        <detail-Banner />
        <detail-Base />
    </div>
</template>

<script>
    import Banner from "./components/Banner.vue";
    import Base from "./components/Base.vue";

    export default {
        components: {
            "detail-Banner":Banner,
            "detail-Base":Base
        }
    }
</script>

<style scoped>
   
</style>
