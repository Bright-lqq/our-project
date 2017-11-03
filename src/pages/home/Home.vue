<template>
    <div>
        <index-header />
        <index-swiper />
        <index-iconswiper />
        <index-hotlist />
    </div>
</template>

<script>
    import header from "./Header.vue";
    import swiper from "./Swiper.vue";
    import iconswiper from "./Iconswiper.vue";
    import hotlist from "./Hotlist.vue";
    export default{
        components: {
        "index-header": header,
        "index-swiper": swiper,
        "index-iconswiper": iconswiper,
        "index-hotlist":hotlist
        }
    }
</script>

<style scoped>

</style>
