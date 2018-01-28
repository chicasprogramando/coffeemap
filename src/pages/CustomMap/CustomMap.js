import Map from '../../components/Map/Map';
import VisualSlider from '../../components/VisualSlider/VisualSlider';
import VisualCafeDetail from '../../components/VisualCafeDetail/VisualCafeDetail';

export default {
	name: 'customMap',
	components: {
		MapWrapper: Map,
		VisualCafeDetail,
		VisualSlider
	},
	data() {
		return {
			title: 'CustomMap',
			coffee: null,
		};
	},
	methods: {
		handleCoffeClick(coffee) {
			this.coffee = coffee;
			this.$router.push({name: 'coffee', params:{id: coffee.id}});
		},
	},
};
