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
import RangeSlider from '../../components/RangeSlider/RangeSlider.vue';
import Loader1 from '../../components/Loader/Loader1.vue'
import Loader2 from '../../components/Loader/Loader2.vue'
import Loader3 from '../../components/Loader/Loader3.vue'

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
		RangeSlider,
		Loader1,
		Loader2,
		Loader3
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
