<template>
    <div :class="$style.container">

        <div>
            <p :class="$style.bienvenidos">Bienvenidos a</p>
        </div>
        <div>
            <h1>#CoffeeMap</h1>
        </div>
        <div>
            <p>Hecho por <span>ChicasProgramandoEnCafes</span></p>
        </div>

        <div>
            <h2>Elegi la zona que </br>te quede más cerca</h2>
        </div>
        <div :class="$style.dropdowm">
            <input-dropdown :class="$style.dropdownWidth"></input-dropdown>
        </div>
        <div :class="$style.button">
            <button-general :class="$style.buttonWidth" button-text="Comenzar" size="large" @click="handleClick"></button-general>
        </div>
    </div>
</template>

<script>
import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral';
import InputDropdown from '../../components/InputDropdown/InputDropdown';

export default {
    name:'VisualIntro',
    components:{
        InputDropdown,
        ButtonGeneral
    },
    methods: {
        handleClick() {
            this.$router.push('/filter');
        },
    },
};
</script>

<style module>
.container{
    width:320px;
    background-color: blueviolet;
    color:white;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 60px;
    padding-right: 25px;
    padding-left:25px;
    
}
.button{
    text-align: center;
    padding-top: 30px;
}

span{
    font-weight: bold;
    
}
h2{
    padding-bottom:40px;
}
.bienvenidos{
    font-size:20px;
    margin-bottom: -20px;

}
.buttonWidth{
    min-width:300px;
    font-size:18px;
    font-weight: 150;
}
.dropdownWidth{
    min-width: 270px;
}



</style>

