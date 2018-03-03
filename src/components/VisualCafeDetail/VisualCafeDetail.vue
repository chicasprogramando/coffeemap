<template>
  <div :class="$style.modalCoffee">
  	<!--<div :class="$style.mobile">-->
      <app-header :inverse="true"></app-header>
      <button :class="$style.closebtn" @click="handleClose">
          <!-- <icon name="close" color="#7971D9" circle="#FFFFFF" :size="30" @click="closeTry"/>-->
          X
      </button>
      <div :class="$style.image"></div>
      <div :class="$style.wrapper">
        <span :class="$style.coffeeName">{{coffee.name}}</span>
        <visual-rating :value="coffee.rating"/>
        <span :class="$style.subtitle">Información del lugar</span>
        <div>
            <span :class="$style.subtitleSmall">Dirección</span><br/>
            <span :class="$style.information">{{coffee.address}}</span>
            <span :class="$style.subtitleSmall">Lunes a viernes</span><br/>
            <span :class="$style.information">8 a 20 hs</span>
        </div>
        <span :class="$style.subtitle">Información de contacto</span>
        <div>
          <span :class="$style.subtitleSmall">Teléfono</span><br/>
          <span :class="$style.information">{{coffee.telephone}}</span>
          <span :class="$style.subtitleSmall">Sitio web</span><br/>
          <span :class="$style.information">{{coffee.website}}</span>
        </div>
        <div :class="$style.icon">
          <icon name="twitter" color="#FFF" circle="#7971D9" :size="50" :class="$style.iconOne"/>
          <icon name="facebook" color="#FFF" circle="#7971D9" :size="50"/>
        </div>
      </div>

  	<!--</div>-->
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
    handleClose() {
      this.$emit("closeDetail");
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style module>
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

.modalCoffee {
  position: fixed;
  background-color: white;
  width: 400px;
  height: 65vh;
  min-height: 300px;
  top: 90px;
  right: 10px;
  z-index: 10000;
  border-radius: 20px;
  overflow: auto;
}
/*.mobile {
  width: 100%;
  position: relative;
}*/
.wrapper {
  margin-top: 20px;
  height: 65%;
  padding-left: 30px;
  padding-right: 30px;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.wrapper > span {
  padding-top: 5px;
  padding-bottom: 5px;
}

.closebtn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 21px;
  z-index: 100;
  border: 0px;
  border-radius: 50%;
  color: #7971d9;
  background-color: #fff;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.closebtn:focus {
  outline: none;
}

.image {
  background-image: url("../../assets/cafevisualslideitem.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 120px;
  position: relative;
  top: 20px;
}

.coffeeName {
  font-weight: bolder;
  font-size: 25px;
  color: rgb(90, 90, 90);
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

.icon {
  display: flex;
}

.iconOne {
  margin-right: 10px;
}

.modalCoffee::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.modalCoffee::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

.modalCoffee::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(121, 113, 217);
}

@media (max-height: 700px) {
  .wrapper {
    margin-top: 40px;
  }
  .wrapper > span {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (max-width: 500px) {
  .modalCoffee {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 0;
  }
  .wrapper {
    height: 60%;
  }
}
</style>
