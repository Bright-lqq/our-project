 <template>
	<div>
		<suggest-header />
		<suggest-history />
		<suggest-hotsearch />
		<suggest-Nearbysearch />
		
	</div>
</template>

<script>
	import header from "./components/Header"
	import history from "./components/History"
	import hotsearch from "./components/Hotsearch"
	import nearbysearch from "./components/Nearbysearch"
	import axios from 'axios'
	import { AJAX_GET_DATA } from './types.js'
	import { mapState, mapActions } from 'vuex'

	export default {
		components: {
			"suggest-header": header,
			"suggest-history": history,
			"suggest-hotsearch": hotsearch,
			"suggest-Nearbysearch": nearbysearch
		},

		computed: mapState({
			hotviewInfo: (state) => {
				return state.suggest.hotviewInfo;
			}
		}),

		mounted() {
			this.getSuggestData();
		},

		methods: mapActions({
			getSuggestData: (dispatch) => {
				dispatch(AJAX_GET_DATA);
			}
		})
	}
</script>
