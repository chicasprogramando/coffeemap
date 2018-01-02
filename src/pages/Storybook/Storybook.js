import Icon from '../../components/Icon/Icon';
import VisualRating from '../../components/VisualRating/VisualRating';
import InputDropdown from '../../components/InputDropdown/InputDropdown';
import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral.vue';
import ButtonMore from '../../components/ButtonMore/ButtonMore.vue';
import FilterButton from'../../components/FilterButton/FilterButton.vue';
import ButtonIcon from'../../components/ButtonIcon/ButtonIcon.vue';
import InputRadio from'../../components/InputRadio/InputRadio.vue';
import VisualSliderItem from '../../components/VisualSliderItem/VisualSliderItem.vue';
import VisualSlider from '../../components/VisualSlider/VisualSlider.vue';

export default {
  name: 'storybook',
  components: {
		Icon, 
		VisualRating,
		InputDropdown,
		ButtonGeneral,
		ButtonMore,
		FilterButton,
		ButtonIcon,
		InputRadio,
		VisualSliderItem,
		VisualSlider,
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
