<template>
  <div :class="$style.background">
    <app-header></app-header>
    <p :class="$style.title">Y te gustaría que tenga...</p>

    <div v-if="is320()" :class="$style.miniIcons">
      <FilterButton name="wifi" button-text="Wifi" :buttonSize="100" :iconSize="35"/>
      <FilterButton name="food" button-text="Cocina" :buttonSize="100" :iconSize="35"/>
      <FilterButton name="bag" button-text="Take away" :buttonSize="100" :iconSize="35"/>
      <FilterButton name="laptop" button-text="Coworking" :buttonSize="100" :iconSize="35"/>
    </div>
     <div v-else :class="$style.miniIcons">
      <FilterButton name="wifi" button-text="Wifi" :buttonSize="120" :iconSize="50"/>
      <FilterButton name="food" button-text="Cocina" :buttonSize="120" :iconSize="50"/>
      <FilterButton name="bag" button-text="Take away" :buttonSize="120" :iconSize="50"/>
      <FilterButton name="laptop" button-text="Coworking" :buttonSize="120" :iconSize="50"/>
    </div>
    <div :class="$style.wrapperCuantoPagar">
      <p :class="$style.likeTextCuantoPagar">¿Cuánto querés gastar?</p>
      <!--<div :class="$style.wrapperRadio">
        <InputRadio :class="$style.inputRadio" ></InputRadio>
      </div>-->
      <RangeSlider/>
    </div>
    <div :class="$style.button">
      <button-general :class="$style.buttonWidth" button-text="Continuar" size="large" @click="handleClick"></button-general>
    </div>
  </div>
</template>

<script>
import AppHeader from "../../components/AppHeader/AppHeader"
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral"
import FilterButton from "../../components/FilterButton/FilterButton"
import InputRadio from "../../components/InputRadio/InputRadio.vue"
import RangeSlider from "../../components/RangeSlider/RangeSlider.vue"


export default {
  name: "VisualIntroStep2",
  components: {
    AppHeader,
    ButtonGeneral,
    FilterButton,
    InputRadio,
    RangeSlider
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);

      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    handleClick() {
      this.$router.push("/map");
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    is320(windowWidth) {
      if (this.windowWidth <= 320) {
        return true;
      } 
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style module lang="postcss">
@import "../../styles/variables.css";

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: purplecoffee;
}
.title {
  font-weight: bold;
  font-size: fs-l;
  margin: 0 auto;
  max-width: 60%;
  color: white;
  margin-bottom: 10%;
  text-align: center;
}

.miniIcons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 48px 40px;
}

.likeTextCuantoPagar {
  font-weight: bold;
  font-size: fs-l;
  margin: 0 auto;
  max-width: 60%;
  color: white;
  margin-bottom: 25px;
  text-align: center;
}

.wrapperCuantoPagar {
  width: 100%;
  margin: 0 auto;
  margin-top: fs-l;
  padding-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
}


.button {
  text-align: center;
}

.buttonWidth {
  min-width: 300px;
  font-size: fs-m;
  font-weight: 150;
}
</style>
