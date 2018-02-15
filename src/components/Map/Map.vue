<template>
    <div :class="$style.wrapperMap">
      <v-map ref="map" :center="center">
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
        <v-marker v-for="(coffee, index) in coffees" :key="index" :lat-lng="coffee.position" :icon="icon()" @l-click="markerClick(coffee)" />
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
    coffees: VueTypes.array.isRequired,
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
      iconPath: "../src/assets/icons/coffeepurple.png"
    };
  },
  mounted(){
    this.setBounds(this.coffees);
  },
  methods: {
    icon() {
      return L.icon({
        iconUrl: this.iconPath,
        iconSize: [32, 32],
        iconAnchor: [0, 0]
      });
    },
    markerClick(coffee){
      this.$emit("markerClick",coffee)
    },
    setBounds(value){
      if(value && value.length>0){
        this.$refs.map.mapObject.fitBounds(value.map(coffee=>coffee.position),
        { paddingTopLeft:[50,100],paddingBottomRight:[50,100] });
      }
    }
  },
  watch:{
    coffees(value){
      this.setBounds(value);
    }
  }
};
</script>

<style module>
.wrapperMap {
  width: 100vw;
  height: 100vh;
}
</style>
