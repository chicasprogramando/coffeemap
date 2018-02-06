<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.innerWrapper">
        <app-header :inverse="false"></app-header>
        <div :class="$style.titleNumberWrapper">
          <span :class="$style.numberedpage">02/</span>
          <p :class="$style.title">Y te gustaría que <br/>tenga...</p>
        </div>
        <div v-if="is320()" :class="$style.miniIcons">
          <FilterButton name="wifi" button-text="Wifi" :buttonSize="100" :iconSize="35" @click="handleClickWifi"/>
          <FilterButton name="food" button-text="Cocina" :buttonSize="100" :iconSize="35" @click="handleClickCocina"/>
          <FilterButton name="bag" button-text="Take away" :buttonSize="100" :iconSize="35" @click="handleClickTakeAway"/>
          <FilterButton name="laptop" button-text="Coworking" :buttonSize="100" :iconSize="35" @click="handleClickCoworking"/>
        </div>
        <div v-else :class="$style.miniIcons">
          <FilterButton name="wifi" button-text="Wifi" :buttonSize="120" :iconSize="50" @click="handleClickWifi"/>
          <FilterButton name="food" button-text="Cocina" :buttonSize="120" :iconSize="50" @click="handleClickCocina"/>
          <FilterButton name="bag" button-text="Take away" :buttonSize="120" :iconSize="50" @click="handleClickTakeAway"/>
          <FilterButton name="laptop" button-text="Coworking" :buttonSize="120" :iconSize="50" @click="handleClickCoworking"/>
        </div>
        <!-- <div :class="$style.wrapperCuantoPagar">
          <p :class="$style.likeTextCuantoPagar">¿Cuánto querés gastar?</p>
          <div :class="$style.wrapperRadio">
            <InputRadio :class="$style.inputRadio" ></InputRadio>
          </div>
        </div>
        <RangeSlider/> -->
        <div :class="$style.button">
          <button-general :class="$style.buttonWidth" button-text="Continuar" size="large" @click="handleClick"></button-general>
        </div>
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
    handleClickCoworking(){
      this.$store.commit('mutateCoworking');
    },
    handleClickTakeAway(){
      this.$store.commit('mutateTakeAway');
    },
    handleClickWifi(){
      this.$store.commit('mutateWifi');
    },
    handleClickCocina(){
      this.$store.commit('mutateCocina');
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
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

html,
body {
  min-height: 100%;
  width: 100%;
}
.wrapper {
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: type-font;
}

.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 600px;
  text-align: center;
  // margin: 10vw 5vh;
  color: white;
  background-image: url("../../assets/coffee-bg.png");
  background-size: 100%;
}

.container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: purpleStrong;
  opacity: 0.5;
  z-index: 1;
}

.innerWrapper {
  position: relative;
  min-height: 100vh;
  z-index: 10;
}

.titleNumberWrapper {
  text-align: left;
  padding-top: 50px;
  max-width: 300px;
  margin: 0 auto;
}

.title {
  margin: 0;
  font-weight: bold;
  font-size: fs-l;
  text-transform: uppercase;
  // margin: 0 auto;
  // max-width: 300px;
  color: white;
  font-family: type-font;
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
  // border-top: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
}

.button {
  text-align: center;
  width: 100%;
  background-color: purpleLight;
  position: absolute;
  bottom: 0;
}

.buttonWidth {
  min-width: 300px;
  margin: 15px auto;
  font-size: fs-m;
}

.miniIcons {
  padding-top: 50px;
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
