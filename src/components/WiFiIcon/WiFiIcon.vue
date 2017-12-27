<template>
  <div id="wifi">
      <img src="../assets/wifi.svg">
      <Component v-bind:id='></Component>
  </div>
</template>

<script>
import Component from 'Component.vue'
export default {
  name: 'wifi',
  props: ['name'],
  components: {
      Component
  }
}
</script>

<style scoped>
    #wifi {
        width: 100px;
        height: 100px;
        margin: 20px;
        padding: 40px;
        background-color: white;
    }
</style>