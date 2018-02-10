<template>
  <div :class="$style.modalCoffee">
  	<div :class="$style.mobile">
      <app-header :inverse="true"></app-header>
      <button :class="$style.closebtn" @click="handleClose">
          <!-- <icon name="close" color="#7971D9" circle="#FFFFFF" :size="30" @click="closeTry"/>-->
          X
      </button>
      <div :class="$style.image"></div>
      <div :class="$style.wrapper">      
        <p :class="$style.coffeeName">{{coffee.name}}</p>
        <visual-rating :value="coffee.rating"/>
        <p :class="$style.subtitle">Información del lugar</p>
        <div>
          <p>
            <span :class="$style.subtitleSmall">Dirección</span><br/>
            <span :class="$style.information">{{coffee.address}}</span>
          </p>
          <p>
            <span :class="$style.subtitleSmall">Lunes a viernes</span><br/>
            <span :class="$style.information">8 a 20 hs</span>
          </p>
        </div>
        <p :class="$style.subtitle">Información de contacto</p>
        <div>
          <p>
          <span :class="$style.subtitleSmall">Teléfono</span><br/>
          <span :class="$style.information">{{coffee.telephone}}</span>
          </p>
          <p>
          <span :class="$style.subtitleSmall">Sitio web</span><br/>
          <span :class="$style.information">{{coffee.website}}</span>
          </p>
        </div>
        <div :class="$style.icon">
          <icon name="twitter" color="#FFF" circle="#7971D9" :size="50" :class="$style.iconOne"/>
          <icon name="facebook" color="#FFF" circle="#7971D9" :size="50"/>
        </div>
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
  methods: {
    handleClose(){
      console.log("close button works");
      this.$emit("closeDetail");
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style module>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900');
.modalCoffee {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0;
  z-index: 10000;
}
.mobile {
  width: 100%;
  position: relative;
}
.wrapper {
  padding: 30px;
  background-color: white;
  font-family: "Roboto";
}

.closebtn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 100;
  border: 0px;
  border-radius: 50%;
  color:#7971D9;
  background-color: #FFF;
  font-weight: 600;
  font-size: 18px;
}

.closebtn:focus {
  outline: none;
}


.image {
  background-image: url("../../assets/cafevisualslideitem.jpg");
  height: 80px;
}

.coffeeName {
  font-weight: bolder;
  font-size: 25px;
  color:  rgb(90, 90, 90);
}

.subtitle {
  color: rgb(121, 113, 217);
  font-size: 20px;
}

.subtitleSmall {
  font-size: 13px;
  color: grey;
}

.information {
  font-size: 13px;
  font-weight: bolder;
  color: rgb(90, 90, 90);
}

.icon{
  display:flex;
}

.iconOne{
  margin-right: 10px;
}
</style>
