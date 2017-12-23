import Example from '@/components/Example/Example.vue'
import ButtonGeneral from '@/components/ButtonGeneral/ButtonGeneral.vue'
import ButtonMore from '@/components/ButtonMore/ButtonMore.vue'

export default {
  name: 'Home',
  components: {
		Example,
		ButtonGeneral,
		ButtonMore,
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
