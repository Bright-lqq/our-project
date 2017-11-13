 <template>
	<div>
		<tour-header />
		<tour-viewnav />
	</div>
</template>

<script>
	import header from "./components/Header"
	import viewnav from "./components/Viewnav"
	
	export default {
		components: {
			"tour-header": header,
			"tour-viewnav": viewnav
		}
	}
</script>

<style scoped>
	
</style>