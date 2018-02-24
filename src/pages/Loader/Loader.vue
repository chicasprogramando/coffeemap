<template>
  <div :class="$style.loader2"><Loader2/></div>

  
</template>
<script>
import Loader2 from '../../components/Loader/Loader2.vue'

export default {
    name:'Loader',
    components: {
        Loader2,
    }
  
}
</script>
<style module>
.loader2{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

</style>


