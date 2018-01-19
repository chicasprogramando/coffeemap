<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">

        <div>
            <p :class="$style.welcome">Bienvenidos a</p>
        </div>
        <div>
            <h1>#CoffeeMap</h1>
        </div>
        <div>
            <p>Hecho por <span :class="$style.bold">ChicasProgramandoEnCafes</span></p>
        </div>

        <div>
            <h2 :class="$style.chooseText">Elegi la zona que <br />te quede más cerca</h2>
        </div>
        <div :class="$style.dropdowm">
            <input-dropdown :class="$style.dropdownWidth" :location="state.location" @input="handleInput"></input-dropdown>
        </div>
        <div :class="$style.button">
            <button-general :class="$style.buttonWidth" button-text="Comenzar" size="large" @click="handleClick"></button-general>
        </div>
     </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral';
import InputDropdown from '../../components/InputDropdown/InputDropdown';

export default {
    name:'VisualIntro',
    components:{
        InputDropdown,
        ButtonGeneral
    },
    props: {
        state: VueTypes.any.isRequired,
        allMethods: VueTypes.any.isRequired,
    },
    mounted(){
        console.log(this.allMethods());
    },
    methods: {
        handleClick() {
            this.$router.push('/filter');
        },
        handleInput(value){
            this.allMethods().changeLocation(value);
        },
    },

};
</script>

<style module>
@import "../../styles/variables.css";

.wrapper {    
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: purplecoffee;
}
.container{
    width: 100%;   
    max-width: 400px;
    text-align: center;
    margin: 10vw 5vw;
    color:white; 

    
}
.button{
    text-align: center;
    padding-top: 30px;
}

.bold{
    font-weight: bold;
    
}
.chooseText{
    padding-bottom:40px;
}
.welcome{
    font-size:20px;
    margin-bottom: -20px;

}
.buttonWidth{
    width:100%;
    font-size:18px;
    
}
.dropdownWidth{
    width: 100%;
}



</style>

