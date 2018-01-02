<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><VisualSliderItem /></swiper-slide>
    <swiper-slide><VisualSliderItem /></swiper-slide>
    <swiper-slide><VisualSliderItem /></swiper-slide>
    <swiper-slide><VisualSliderItem /></swiper-slide>
    <swiper-slide><VisualSliderItem /></swiper-slide>
    <swiper-slide><VisualSliderItem /></swiper-slide>
    <swiper-slide><VisualSliderItem /></swiper-slide>

  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
        swiperOption: {
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>

</style>