<template>
	<div>
    <h1>{{title}}</h1>
    <pre>
      {{coffee}}
    </pre>
    <VisualSliderItem :name="coffee.name" :web="coffee.website" :rating="coffee.raiting"/>
	</div>
</template>

<script>
import VueTypes from 'vue-types';
import VisualSliderItem from '../VisualSliderItem/VisualSliderItem';

export default {
  name: "visualCafeDetail",
  components:{
    VisualSliderItem,

  },
  props: {
    coffee: VueTypes.object,
  },
  data() {
		return {
			title: 'VisualCafeDetail'
		};
	},
  methods: {
  },
  computed: {
  },
  mounted() {
  }
};
</script>

<style module>
</style>
