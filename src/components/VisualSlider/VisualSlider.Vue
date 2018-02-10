<template>
  <swiper :options="swiperOption" ref="mySwiper">
     <swiper-slide v-for="coffee in coffees" :key="coffee.id" >
       <VisualSliderItem :coffee="coffee"  @itemClick="onItemClick" />
      </swiper-slide>
  </swiper>
</template>

<script>
import VueTypes from "vue-types";
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
  props: {
    coffees: VueTypes.array.isRequired
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        width: 1700,
        loop: false,
        slidesOffsetBefore: 10
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    handleCoffeClick(coffee) {
      this.$emit("coffeClick", coffee);
    },
    onItemClick : function(item){
      this.$emit("itemClick",item)
    },
    slideTo(idx){
      this.swiper.slideTo(idx, 1000, false);
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);

  }
};
</script>

<style module>

</style>