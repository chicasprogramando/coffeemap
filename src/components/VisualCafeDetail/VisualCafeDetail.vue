<template>
	<div>
    <h1>{{title}}</h1>
    <pre>
      {{coffee}}
    </pre>
	</div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: "visualCafeDetail",
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
