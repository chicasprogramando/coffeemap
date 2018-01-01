<template>
	<div>
    <h1>MAP</h1>
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
import api from '@/api'

export default {
  name: "mapWrapper",
  props: {
  },
  data() {
		return {
			center: {lat: -34.586347, lng: -58.431469}, // TODO: Get from prop
			zoom: 15, // TODO: Get from prop
			coffees: null
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
  width: 800px; 
  height: 600px;
}
</style>
