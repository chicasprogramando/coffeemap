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
        on: {
          init: function() {
            initialSlide:0;
          },
          slideChange: function(){
            console.log("active slide:", this.activeIndex)
          }
        },
        slidesPerView: 6,
        spaceBetween: 200,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 1650,
        grabCursor: true,
        observer: true,
        observeParents: true,
        //preloadImages: true,
        //updateOnImagesReady: true,
        breakpoints: {
          1800: {
            slidesPerView: 5,
            slidesOffsetAfter: 1420
          },
          1740: {
            slidesPerView: 5,
            slidesOffsetAfter: 1250
          },
          1600: {
            slidesPerView: 5,
            slidesOffsetAfter: 1200
          },
          1500: {
            slidesPerView: 5,
            slidesOffsetAfter: 1110
          },
          1400: {
            slidesPerView: 5,
            slidesOffsetAfter: 1040
          },
          1300: {
            slidesPerView: 4,
            slidesOffsetAfter: 900
          },
          1200: {
            slidesPerView: 4,
            slidesOffsetAfter: 780
          },
          1050: {
            slidesPerView: 4,
            slidesOffsetAfter: 800
          },
          950: {
            slidesPerView: 4,
            slidesOffsetAfter: 850
          },
          900: {
            slidesPerView: 3,
            slidesOffsetAfter: 680
          },
          800: {
            slidesPerView: 3,
            slidesOffsetAfter: 600
          },
          760: {
            slidesPerView: 3,
            slidesOffsetAfter: 500
          },
          600: {
            slidesPerView: 3,
            slidesOffsetAfter: 550
          },
          550: {
            slidesPerView: 2,
            slidesOffsetAfter: 250
          },
          500: {
            slidesPerView: 2,
            slidesOffsetAfter: 250
          },
          420: {
            slidesPerView: 2,
            slidesOffsetAfter: 250
          },
          360: {
            slidesPerView: 2,
            slidesOffsetAfter: 250
          },
          320: {
            slidesPerView: 2,
            slidesOffsetAfter: 250
          },
          300: {
            slidesPerView: 1,
            slidesOffsetAfter: 0
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    onItemClick: function(item) {
      this.$emit("itemClick", item);
    },
    slideTo(idx) {
      this.swiper.slideTo(idx, 2500, false);
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style module>

</style>