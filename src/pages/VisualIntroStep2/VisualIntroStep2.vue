<template>
    <div :class="$style.background">
        <app-header></app-header>
        <p :class="$style.likeText">Y te gustaría que tenga...</p>
    </div>
</template>

<script>
import AppHeader from '../../components/AppHeader/AppHeader'

export default {
    name:'VisualIntroStep2',
    components:{
        AppHeader,
        
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

