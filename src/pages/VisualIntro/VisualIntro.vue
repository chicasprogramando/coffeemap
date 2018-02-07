<template>
  <div :class="$style.wrapper">
      <div :class="$style.wrapper2">
    <div :class="$style.container">

        <div :class="$style.upbackground">
            <span :class="$style.welcome">Bienvenidos a</span><br/><span :class="$style.coffemap">#CoffeeMap</span>
            <p :class="$style.madeof">
                <span>Hecho por</span>
                <span :class="$style.madeofgirls">ChicasProgramandoEnCafes</span>
            </p>
        </div>
        <div :class="$style.downbackground">
            <span :class="$style.number">01/</span><br/>
            <span :class="$style.chooseText">ELEGÍ LA ZONA QUE<br />TE QUEDE MÁS CERCA</span>

            <div :class="$style.dropdown">
                <input-dropdown :class="$style.dropdown" :location="neighborhood" @input="changeNeighborhood"></input-dropdown>
            </div>
            <div :class="$style.buttonwrapper">
                <button-general :class="$style.button" button-text="Comenzar" size="large" @click="handleClick"></button-general>
            </div>
        </div>
     </div>
     </div>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral";
import InputDropdown from "../../components/InputDropdown/InputDropdown";

export default {
  name: "VisualIntro",
  components: {
    InputDropdown,
    ButtonGeneral
  },
  props: {
    state: VueTypes.any.isRequired,
    allMethods: VueTypes.any.isRequired
  },
  computed: {
    neighborhood() {
      return this.$store.state.neighborhood;
    }
  },
  mounted() {
    console.log(this.allMethods());
  },
  methods: {
    handleClick() {
      this.$router.push("/filter");
    },
    handleInput(value) {
      this.allMethods().changeLocation(value);
    },
    changeNeighborhood(value) {
      // console.log($event);
      this.$store.commit("mutateNeighborhood", value);
    }
  }
};
</script>

<style module>
@import "../../styles/variables.css";
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

.wrapper {
  min-height: 100%;
  width: 100%;
  background-image: url("../../assets/visualintrobackground.jpg");
}
.wrapper2{
    background-color: rgba(121,113,217,0.7);
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:95px 0px;
}
.container{
    width: 100%;
    max-width: 400px;
    color:white;
    font-family: "Roboto";
}
.madeof {
  font-size: 12px;
}
.madeofgirls {
  font-weight: bolder;
}
.upbackground{
    background-color: rgba(93,87,173,0.7);
    padding: 15px 10px 5px 5px;
    text-align: center;
}
.downbackground{
    padding: 25px 7px 7px 7px;
}

.number {
  text-align: left;
}
.chooseText {
  font-size: 25px;
  text-align: left;
  font-weight: bolder;
}
.welcome {
  font-size: 20px;
}
.coffemap {
  font-weight: 900;
  font-size: 45px;
}
.buttonwrapper {
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-top:80px;
}

.button {
  width: 100%;
}
.dropdown {
  width: 100%;
  margin-top: 15px;
  
}
</style>

