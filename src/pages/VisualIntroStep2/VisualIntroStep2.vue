<template>
    <div :class="$style.background">
        <app-header></app-header>
        <p :class="$style.likeText">Y te gustaría que tenga...</p>
        <div :class="$style.button">
            <button-general :class="$style.buttonWidth" button-text="Continuar" size="large" @click="handleClick"></button-general>
        </div>
    </div>
</template>

<script>
import AppHeader from '../../components/AppHeader/AppHeader';
import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral';

export default {
    name:'VisualIntroStep2',
    components:{
        AppHeader,
        ButtonGeneral
    } ,
    methods: {
        handleClick() {
            this.$router.push('/map')
        }
    }
}
</script>

<style module>

.likeText{
    font-weight: bold;
    font-size: 25px;
    margin: 0 auto;
    max-width: 45%;
    color: white;
}

.background{
    background-color: #8882da
}

</style>

