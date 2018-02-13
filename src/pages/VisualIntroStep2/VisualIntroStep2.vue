<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.innerWrapper">
        <app-header :inverse="false"></app-header>
        <div :class="$style.titleNumberWrapper">
          <span :class="$style.numberedpage">02/</span>
          <p :class="$style.title">Y te gustaría que tenga...</p>
        </div>
        <AllFilters/>
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
import AllFilters from "../../components/AllFilters/AllFilters.vue";


export default {
  name: "VisualIntroStep2",
  components: {
    AppHeader,
    ButtonGeneral,
    AllFilters
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/map");
    },
    handleClickFilter(filter){
      this.$store.dispatch('Filter', filter);
    },
  },
  computed: {

  },

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
  margin: 0 auto;
  font-weight: bold;
  font-size: fs-l;
  text-transform: uppercase;
  text-align: left;
  color: white;
  font-family: type-font;
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
