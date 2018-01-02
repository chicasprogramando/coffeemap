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
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>

</style>