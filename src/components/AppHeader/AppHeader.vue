<template>
    <header :class="[$style.container, inverse && $style.inverse]">

            <h1>#CoffeeMap</h1>
        

    </header>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "AppHeader",
  props: {
    inverse: VueTypes.bool.def(true)
  }
};
</script>

<style module lang="postcss">
@import "../../styles/variables.css";
/* @value colors: '../../styles/variables.css';
 @value purplecoffee, fontsize from colors; */

.container {
  flex-grow: 0;
  width: 100%;
  padding: 10px 0px;
  margin: 0;
  font-family: "Roboto";
  font-size: 10px;
  color: white;
  text-align: center;
}
.inverse {
  background-color: white;
  color: #7971d9;
  width: 100%;
  height: 3vh;
}


</style>
