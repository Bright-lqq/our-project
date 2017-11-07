<template>
	<div>
		<suggest-header />
		<suggest-history />
	</div>
</template>

<script>
	import header from "./components/Header.vue";
	import history from "./components/History.vue";

	export default {
		components: {
			"suggest-header": header,
			"suggest-history": history
		}
	}
</script>

<style scoped>

</style>