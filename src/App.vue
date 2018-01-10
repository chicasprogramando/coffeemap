<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
// import api from '@/api'

export default {
  name: 'app',
  data() {
    return {
      coffees: null
    } 
  },
  created() {
    console.log('APP CREATED');

    /* api.getPosts()
    .then(data => {
      this.$getCoffees = data
      console.log(this.$getCoffees)
    })
    .catch(e => console.error(e)) */
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
}
html, body {
  margin: 0;
  padding: 0;
}
</style>
