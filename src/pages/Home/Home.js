import Example from '@/components/Example/Example.vue'
import ButtonGeneral from '@/components/ButtonGeneral/ButtonGeneral.vue'
import FilterButton from'@/components/FilterButton/FilterButton.vue'
import ButtonIcon from'@/components/ButtonIcon/ButtonIcon.vue'

export default {
  name: 'Home',
  components: {
		Example,
		ButtonGeneral,
		FilterButton,
		ButtonIcon,

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
