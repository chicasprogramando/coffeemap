<template>
	<div>
    <p>Click some marker and check the console...</p>
    <gmap-map
        :center="center"
        :zoom="zoom"
        :class="$style.wrapperMap"
    >
        <gmap-marker
          :key="index"
          v-for="(coffee, index) in getCoffees"
          :position="coffee.position"
          :clickable="true"
          @click="handlerMarker(coffee)"
        ></gmap-marker>
    </gmap-map>
	</div>
</template>

<script>
import VueTypes from 'vue-types';
import api from '@/api'

export default {
  name: "mapWrapper",
  props: {
    center: VueTypes.object.isRequired,
    zoom: VueTypes.number.def(10),
  },
  data() {
		return {
      coffees: null,
		};
	},
  methods: {
    handlerMarker(coffee) {
      console.log(`You clicked: ${coffee.name}`)
		}
  },
  computed: {
    getCoffees() {
      return this.coffees;
    }
  },
  mounted() {
    api.getPosts()
		.then(data => {
			this.$getCoffees = data // Set globally
			this.coffees = data
		})
		.catch(e => console.error(e))
  }
};
</script>

<style module>
.wrapperMap {
  width: 500px; 
  height: 500px;
}
</style>
