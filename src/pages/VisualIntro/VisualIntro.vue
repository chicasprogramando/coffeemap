<template>
    <div :class="$style.wrapper">
        <div :class="$style.container">

            <div>
                <p :class="$style.bienvenidos">Bienvenidos a</p>
            </div>
            <div>
                <h1>#CoffeeMap</h1>
            </div>
            <div>
                <p>Hecho por <span :class="$style.negrita">ChicasProgramandoEnCafes</span></p>
            </div>

            <div>
                <h2 :class="$style.h2">Elegi la zona que </br>te quede más cerca</h2>
            </div>
            <div :class="$style.dropdowm">
                <input-dropdown :class="$style.dropdownWidth"></input-dropdown>
            </div>
            <div :class="$style.button">
                <button-general :class="$style.buttonWidth" button-text="Comenzar" size="large" @click="handleClick"></button-general>
            </div>
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
/* CREATE WRAPPER */
.wrapper {    
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
}
.container{
    width: 100%;   
    max-width: 400px;
    text-align: center;
    margin: 10vw 5vw;

    /* TODO: MOVE TEXT STYLES TO TEXT ELEMENTS */
    color:white; 

    /* MOVE STYLES TO WRAPPER */
    /* padding-top: 120px;
    padding-bottom: 60px;
    padding-right: 25px;
    padding-left:25px; */
    
}
.button{
    text-align: center;
    padding-top: 30px;
}

.negrita{
    font-weight: bold; 
    /* Review */
}

.h2 { /* Don't use HTML tags as class names*/
    padding-bottom:40px;
}

.bienvenidos{
    font-size: 20px; /* TODO: Create global class or variables with limited font sizes */
    margin-bottom: -20px;
}

.buttonWidth { /* To camelCase or not to cam el-case? */
    /* min-width:300px; */
    width: 100%;
    font-size:18px; 
    font-weight: 150; /* Why? */
}

.dropdownWidth{
    /* min-width: 270px; */
    width: 100%;
}



</style>

