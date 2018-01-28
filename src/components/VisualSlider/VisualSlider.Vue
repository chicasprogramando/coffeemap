<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide><VisualSliderItem/></swiper-slide>
    <swiper-slide><VisualSliderItem/></swiper-slide>
    <swiper-slide><VisualSliderItem/></swiper-slide>
    <swiper-slide><VisualSliderItem/></swiper-slide>
    <swiper-slide><VisualSliderItem/></swiper-slide>
    <swiper-slide><VisualSliderItem/></swiper-slide>
  </swiper>
</template>

<script>
import api from "@/api";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import VisualSliderItem from "../VisualSliderItem/VisualSliderItem";

export default {
  name: "VisualSlider",
  components: {
    VisualSliderItem,
    swiper,
    swiperSlide
  },
  data() {
    return {
      coffees: null,
      swiperOption: {}
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },  
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);

    api
      .getPosts()
      .then(data => {
        this.$getCoffees = data;
        console.log(this.$getCoffees);
      })
      .catch(e => console.error(e));
        
    
    },
};
</script>

<style module>
</style>