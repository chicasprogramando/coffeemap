import Example from '@/components/Example/Example.vue'

export default {
  name: 'Home',
  components: {
    Example
  },
	data() {
		return {
			title: 'CofeeMap Homepage',
			subtitle: 'by ChicasQuePrograman'
		};
	},
	created() {
		console.log('Home created')
	},
	mounted() {
		console.log('Home mounted')
	},
	updated() {
		console.log('Home updated')
	},
	methods: {
		exampleAction() {
			console.log('Hey you!')
		},
	},
};
