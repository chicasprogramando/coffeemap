<template>
  <div id="twitter">
      <img src="../assets/twitter.svg">
      <Component v-bind:id='></Component>
  </div>
</template>

<script>
import Component from 'Component.vue'
export default {
  name: 'twitter',
  props: ['name'],
  components: {
      Component
  }
}
</script>

<style scoped>
    #twitter {
        width: 100px;
        height: 100px;
        margin: 0;
        padding: 40px;
        background-color: blue;
    }
</style>