<template>
  <div :class="$style.wrapper">
    <div :class="$style.loader5" v-if="loader==true"><Loader5/></div>
    <div :class="$style.container">
      <div :class="$style.innerWrapper">
        <app-header :inverse="false"></app-header>
        <div :class="$style.contentWrapper">
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
  </div>
</template>

<script>
import AppHeader from "../../components/AppHeader/AppHeader";
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral";
import AllFilters from "../../components/AllFilters/AllFilters.vue";
import Loader5 from "../../components/Loader/Loader5";
export default {
  name: "VisualIntroStep2",
  components: {
    AppHeader,
    ButtonGeneral,
    AllFilters,
    Loader5
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      loader:false,
    };
  },
  methods: {
    handleClick() { 
      this.loader=true;
      setTimeout(()=>{
        this.$router.push("/map");
        this.loader=false;
      },1500);
      
    },
    handleClickFilter(filter) {
      this.$store.dispatch("Filter", filter);
    }
  },
  computed: {}
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
  // max-width: 600px;
  text-align: center;
  // margin: 10vw 5vh;
  color: white;
  background-image: url("../../assets/visualintrobackground.jpg");
  background-repeat: no-repeat;
}

.innerWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(121, 113, 217, 0.7);
}
.loader5{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5000;
  background-color: white;
  
}

.contentWrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
}

.buttonWidth {
  min-width: 300px;
  margin: 15px auto;
  font-size: fs-m;
}

.miniIcons {
  max-width: 300px;
  padding-top: 50px;
}

@media (min-width: 700px) {
  .miniIcons {
    max-width: 400px;
  }

  .button {
    background-color: transparent;
  }
}
</style>
