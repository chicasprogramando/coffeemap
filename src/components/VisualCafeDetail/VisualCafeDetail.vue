<template>
	<div :class="$style.mobile">
    <app-header></app-header>
    <div :class="$style.image"></div>
    <div :class="$style.wrapper">      
      <p :class="$style.coffeeName">{{coffee.name}}</p>
      <visual-rating :value="coffee.rating"/>
      <p :class="$style.subtitle">Información del lugar</p>
      <div>
        <p :class="$style.subtitleSmall">Dirección</p>
        <p :class="$style.information">{{coffee.address}}</p>
        <p :class="$style.subtitleSmall">Lunes a viernes</p>
        <p :class="$style.information">8 a 20 hs</p>
      </div>
      <p :class="$style.subtitle">Información de contacto</p>
      <div>
        <p :class="$style.subtitleSmall">Teléfono</p>
        <p :class="$style.information">{{coffee.telephone}}</p>
        <p :class="$style.subtitleSmall">Sitio web</p>
        <p :class="$style.information">{{coffee.website}}</p>
      </div>
      <div :class="$style.icon">
        <icon name="twitter" color="#FFF" circle="#7971D9" :size="50"/>
        <icon name="facebook" color="#FFF" circle="#7971D9" :size="50"/>
      </div>
    </div>
    
	</div>
</template>

<script>
import VueTypes from "vue-types";
import AppHeader from "../AppHeader/AppHeader";
import VisualRating from "../../components/VisualRating/VisualRating";
import Icon from "../Icon/Icon";

export default {
  name: "visualCafeDetail",
  components: {
    AppHeader,
    VisualRating,
    Icon
  },
  props: {
    coffee: VueTypes.object
  },
  data() {
    return {
      title: "VisualCafeDetail"
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style module>
.mobile {
  width: 320px;
}
.wrapper {
  padding: 30px;
  background-color: white;
}
.image {
  background-image: url("../../assets/cafevisualslideitem.jpg");
  height: 80px;
}

.coffeeName {
  font-weight: bolder;
  font-size: 15pt;
  color: rgb(121, 113, 217);
}

.subtitle {
  font-weight: bolder;
  color: rgb(121, 113, 217);
  font-size: 10pt;
}

.subtitleSmall {
  font-size: 9pt;
  color: grey;
}

.information {
  font-size: 10pt;
  font-weight: bolder;
  color: rgb(90, 90, 90);
}

.icon{
  display:flex;
}
</style>
