import Map from '../../components/Map/Map';
import api from '@/api'

export default {
	name: 'customMap',
	components: {
		Map,
	},
	data() {
		return {
			title: 'CustomMap',
			center: {lat: 10.0, lng: 10.0},
			markers: null
		};
	},
	created() {
		console.log('CustomMap created')
	},
	mounted() {
		console.log('CustomMap mounted')

		api.getPosts()
		.then(data => {
			this.$getCoffees = data
			this.markers = data
			console.log(this.$getCoffees)
			console.log(this.markers)
		})
		.catch(e => console.error(e))
	},
	methods: {
		dalemecha(marker) {
			console.log(marker)
		}
	}
};
