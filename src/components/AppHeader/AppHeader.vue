<template>
    <header :class="[$style.container, inverse && $style.inverse]">

            <h1>#CoffeeMap</h1>
        

    </header>
</template>

<script>
import VueTypes from 'vue-types';
export default {
    name: 'AppHeader',
    props:{
        inverse: VueTypes.bool.def(true),
    }
}
</script>

<style module lang="postcss">
@import '../../styles/variables.css';
/* @value colors: '../../styles/variables.css';
 @value purplecoffee, fontsize from colors; */

.container{
    padding: 10px;
    text-align: center;
    background-color: #5d57ad;
    color:white;
    font-size: 10px;
    margin: 0;
    font-family: "Roboto";
    width:100%;
}
.inverse{
    background-color: white;
    color:#7971D9;
    width:320px;
}
</style>
