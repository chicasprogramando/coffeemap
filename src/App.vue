<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'app',
  data() {
    return {
      coffees: null
    } 
  },
  created() {
    console.log('APP CREATED')

    api.getPosts()
    .then(data => {
      this.$getCoffees = data  // this is fake data
      console.log(this.$getCoffees)
    })
    .catch(e => console.error(e))
  },
  mounted() {
    console.log('APP MOUNTED')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
