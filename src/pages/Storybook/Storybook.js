import Icon from '../../components/Icon/Icon';
import VisualRating from '../../components/VisualRating/VisualRating';

export default {
  name: 'storybook',
  components: {
		Icon, 
		VisualRating,
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
