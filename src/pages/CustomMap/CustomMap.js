import Map from '../../components/Map/Map';
import VisualCafeDetail from '../../components/VisualCafeDetail/VisualCafeDetail';

export default {
	name: 'customMap',
	components: {
		MapWrapper: Map,
		VisualCafeDetail
	},
	data() {
		return {
			title: 'CustomMap'
		};
	}
};
