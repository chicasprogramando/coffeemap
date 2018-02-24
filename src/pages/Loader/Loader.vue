<template>
  <div :class="$style.loader5"><Loader5/></div>

  
</template>
<script>
import Loader5 from '../../components/Loader/Loader5.vue'

export default {
    name:'Loader',
    components: {
        Loader5,
    }
  
}
</script>
<style module>
.loader5{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

</style>


