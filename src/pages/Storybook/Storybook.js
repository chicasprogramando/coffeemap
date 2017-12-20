import Example from '@/components/Example/Example.vue'

export default {
  name: 'storybook',
  components: {
    Example
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
