import Icon from '../../components/Icon/Icon';

export default {
  name: 'storybook',
  components: {
    Icon
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
