<template>
  <div id="app">
    <transition @enter="onEnter" @leave="onLeave">
      <router-view :state="state" :all-methods="allMethods"/>
    </transition>
  </div>
</template>

<script>
import api from "@/api";
import { TweenMax, Expo } from 'gsap';

export default {
  name: "app",
  data() {
    return {
      coffees: null,
      neighborhoods: null,
      state: {
        location: "nunez",
        filters: [],
        cost: 0
      }
    };
  },

  created() {
    console.log("APP CREATED");
    this.$store.dispatch('fetchCoffees');
    this.$store.dispatch('fetchNeighborhoods');
  },

  methods: {
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
        changeCost: this.changeCost
      };
    },
    onEnter(el, done) {
      el.style.position = 'absolute';
      TweenMax.from(el, 0.5, {
        autoAlpha: 0,
        scale: 0.8,
        ease: Expo.easeInOut,
        onComplete: () => {
          el.style.position = 'relative';
          done();
        },
      });
    },
    onLeave(el, done) {
      el.style.position = 'absolute';
      TweenMax.to(el, 0.5, {
        autoAlpha: 0,
        scale: 0.8,
        ease: Expo.easeInOut,
        onComplete: () => {
          done();
        },
      });
    },
  },
  mounted() {
    console.log("APP MOUNTED");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
