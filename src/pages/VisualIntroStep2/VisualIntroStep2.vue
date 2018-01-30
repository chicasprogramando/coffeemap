<template>
<div :class="$style.wrapper">
  <div :class="$style.container">
    <app-header :inverse="false"></app-header>
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
    </div>
    <RangeSlider/>
    <div :class="$style.button">
      <button-general :class="$style.buttonWidth" button-text="Continuar" size="large" @click="handleClick"></button-general>
    </div>
  </div>
  </div>
</template>

<script>
import AppHeader from "../../components/AppHeader/AppHeader";
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral";
import FilterButton from "../../components/FilterButton/FilterButton";
import InputRadio from "../../components/InputRadio/InputRadio.vue";
import RangeSlider from "../../components/RangeSlider/RangeSlider.vue";

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
  min-height: 100%;
  width: 100%;
  background-color: purplecoffee;
}
.wrapper {
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin: 10vw 5vh;
  color: white;
}

.title {
  font-weight: bold;
  font-size: fs-l;
  margin: 1vw;
  color: white;
  text-align: center;
}

.miniIcons {
  width: 100%;
  max-width: 600px;
  margin: 2vw auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
}

.likeTextCuantoPagar {
  font-weight: bold;
  font-size: fs-l;
  margin: 0 auto;
  color: white;
  padding: 15px;
  text-align: center;
}

.wrapperCuantoPagar {
  max-width: 400px;
  min-width: 150px;
  margin: 0 auto;
  padding: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
}

.button {
  text-align: center;
  width: 100%;
}

.buttonWidth {
  min-width: 300px;
  margin: 15px auto;
  font-size: fs-m;
}

@media (max-width: 320px) {
  .container {
    margin: 10vw 1vh;
  }
}

@media (max-width: 615px) {
  .miniIcons {
    max-width: 300px;
  }
}
</style>
