<template>
  <swiper :options="swiperOption" ref="mySwiper">
     <swiper-slide v-for="coffee in coffees" :key="coffee.id" >
       <VisualSliderItem :name="coffee.name"
          :web="coffee.website" :rating="coffee.rating"
          :address="coffee.address" :businessHours="coffee.businessHours"/>
      </swiper-slide>

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
      coffees:null,
      swiperOption: {        
        slidesPerView: 5,
        spaceBetween: 10,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);

    api
      .getPosts()
      .then(data => {
        this.$getCoffees = data;
        this.coffees = data;
        console.log(this.$getCoffees);        
      })
      .catch(e => console.error(e));
  }
};
</script>

<style module>

</style>