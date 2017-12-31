import Map from '../../components/Map/Map';

export default {
	name: 'customMap',
	components: {
		Map,
	},
	data() {
		return {
			title: 'CustomMap',
		};
	},
	created() {
		console.log('CustomMap created')
	},
	mounted() {
		console.log('CustomMap mounted')
	}
};
