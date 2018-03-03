<template>
  <div :class="$style.wrapper">
     <div :class="$style.wrapper2">
           <div :class="$style.loader5" v-if="loader==true"><Loader5/></div>

       <div :class="$style.header">
        <app-header :inverse="false"></app-header>
       </div>

        <div :class="$style.contentWrapper">
              <div>
              <span :class="$style.number">02/</span><br/>
              <span :class="$style.title">Y TE GUSTARÍA QUE<br/>TENGA...</span>
              </div>
              <all-filters/>
            
              <div :class="$style.buttonwrapper">
                  <button-general :class="$style.button" button-text="Continuar" size="large" @click="handleClick"></button-general>
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
      this.$store.dispatch("updateFilter", filter);
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
  /*min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: type-font;*/
  height: 100%;
  width: 100%;
  background-image: url("../../assets/visualintrobackground.jpg");
}
.wrapper2 {
  background-color: rgba(121, 113, 217, 0.7);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



/*.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  // max-width: 600px;
  text-align: center;
  // margin: 10vw 5vh;
  color: white;
  background-image: url("../../assets/visualintrobackground.jpg");
  background-repeat: no-repeat;
}*/

/*.innerWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(121, 113, 217, 0.7);
}*/
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
  width: 100%;
  max-width: 400px;
  color: white;
  font-family: "Roboto";
}

.number {
  text-align: left;
}

.title {
  font-size: 25px;
  text-align: left;
  font-weight: bolder;
}

.buttonwrapper {
  width: 100%;
  text-align: center;
  font-size: 18px;
}

.button {
  width: 100%;
}

/*.miniIcons {
  max-width: 300px;
  padding-top: 50px;
}*/

@media (max-width: 700px) {
  /*.miniIcons {
    max-width: 400px;
  }*/

  .button {
    background-color: transparent;
  }
 .wrapper2 {
    justify-content: flex-start;
  }
  .header {
    background-color: rgba(93, 87, 173, 0.7);
    width: 100%;
    box-sizing: border-box;
    flex-grow: 0;
  }
  .contentWrapper{
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 25px 20px 5px 20px;
  }
  .buttonwrapper{
    box-sizing: border-box;
    margin-top: 20px;
  }
}
</style>
