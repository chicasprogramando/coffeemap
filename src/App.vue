<template>
  <div id="app">
    <router-view :state="state" :all-methods="allMethods"/>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'app',
  data() {
    return {
      coffees: null,
      neighborhoods:null,
      state: {
        location: 'nunez',
        filters: [],
        cost: 0,
      },
    };
  },
  
  created() {
    console.log('APP CREATED');

    api.getPosts()
    .then(data => {
      this.$getCoffees = data
      console.log(this.$getCoffees)
    })
    .catch(e => console.error(e))

  api.getNeighborhoods()
    .then(data => {
      this.$getCoffees = data
      console.log(this.$getneighborhoods)
    })
    .catch(e => console.error(e))
  },


  methods:{
    changeLocation(location) {
      this.state.location = location;
    },
    changeFilter(filter) {
      this.state.filter = filter;
    },
    changeCost(cost) {
      this.state.cost = cost;
    },
    allMethods() {
      return {
        changeLocation: this.changeLocation,
        changeFilter: this.changeFilter,
        changeCost: this.changeCost,
      };
    },
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
  height:100%;
}
html, body {
  margin: 0;
  padding: 0;
  width:100%;
  height: 100%;
}
</style>
