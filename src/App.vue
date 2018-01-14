<template>
  <div id="app">
    <img src="./assets/logo.png">

    <router-link to="/">Home</router-link>

    <router-link to="/cafe/1">Cafe 1</router-link>
    <router-link to="/cafe/2">Cafe 2</router-link>

    <router-link to="/storybook">StoryBook</router-link>

    <router-link to="/custom-map">CustomMap</router-link>
    <router-link to="/visual-intro">VisualIntro</router-link>
    <router-link to="/visual-introstep2">VisualIntroStep2</router-link>



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
    console.log('APP CREATED')

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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
