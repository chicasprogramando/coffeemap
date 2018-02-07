<template>
    <div :class="$style.wrapperMap">
      <v-map :zoom="zoom" :center="center">
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
        <v-marker v-for="(coffee, index) in getCoffees" :key="index" :lat-lng="coffee.position" :icon="icon()" />
      </v-map>
      <router-view :key="$route.fullPath"/>
    </div>
    
</template>

<script>
import VueTypes from "vue-types";
import api from "@/api";
import Vue2Leaflet from "vue2-leaflet";

// Build icon assets.
export default {
  name: "mapWrapper",
  props: {
    center: VueTypes.object.isRequired,
    zoom: VueTypes.number.def(15)
  },
  components: {
    "v-map": Vue2Leaflet.Map,
    "v-tilelayer": Vue2Leaflet.TileLayer,
    "v-marker": Vue2Leaflet.Marker,
    "v-icondefault": Vue2Leaflet.IconDefault
  },
  data() {
    return {
      coffees: null,
      iconPath: "../src/assets/icons/coffeepurple.png"
    };
  },
  methods: {
      icon() {
      return L.icon({
        iconUrl: this.iconPath,
        iconSize: [32, 32],
        iconAnchor: [0, 0]
      });
    }
  },
  computed: {
    wifistatus() {
    }
  },
  mounted() {
    api
      .getCoffees()
      .then(data => {
        this.$getCoffees = data; // Set globally
        this.coffees = data;
      })
      .catch(e => console.error(e));
  }
};
</script>

<style module>
.wrapperMap {
  width: 100vw;
  height: 100vh;
}
</style>
