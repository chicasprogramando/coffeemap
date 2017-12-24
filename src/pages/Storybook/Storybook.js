import Icon from '../../components/Icon/Icon';
import VisualRating from '../../components/VisualRating/VisualRating';
import InputDropdown from '../../components/InputDropdown/InputDropdown';

export default {
  name: 'storybook',
  components: {
		Icon, 
		VisualRating,
		InputDropdown,
  },
	data() {
		return {
			title: 'CofeeMap Storybook',
		};
	},
	created() {
		console.log('Storybook created')
	},
	mounted() {
		console.log('Storybook mounted')
	}
};
