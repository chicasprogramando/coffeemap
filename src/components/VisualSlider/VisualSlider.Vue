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
            initialSlide: 0;
          },
          slideChange: function() {
            console.log("active slide:", this.activeIndex);
          },
          click: function() {
            if (this.clickedIndex < this.slides.length - 6) {
              this.slideTo(this.clickedIndex, 1500, false);
            } else {
              this.slideTo(this.clickedIndex, 2500, false);
              this.slides[this.activeIndex].classList.remove(
                "swiper-slide-active"
              );
              this.slides[this.clickedIndex].classList.add(
                "swiper-slide-active"
              );
            }
          }
        },

        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 200,
        slidesOffsetBefore: 10,
        //setWrapperSize: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
        slidesOffsetAfter: 100,
        //preloadImages: true,
        //updateOnImagesReady: true,
        breakpoints: {
          1800: {
            slidesPerView: 5,
          },
          1740: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          1050: {
            slidesPerView: 4,
          },
          950: {
            slidesPerView: 4,
            slidesOffsetAfter: 250,
          },
          900: {
            slidesPerView: 3,
            slidesOffsetAfter: 250,
          },
          800: {
            slidesPerView: 3,
            slidesOffsetAfter: 350,
          },
          760: {
            slidesPerView: 3,
            slidesOffsetAfter: 250,
          },
          600: {
            slidesPerView: 3,
            slidesOffsetAfter: 250,
          },
          550: {
            slidesPerView: 2,
            slidesOffsetAfter: 350,
          },
          420: {
            slidesPerView: 2,
            slidesOffsetAfter: 450,
          },
          360: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
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
      if (idx < this.swiper.slides.length - 6) {
        this.swiper.slideTo(idx, 2500, false);
      } else {
        this.swiper.slideTo(idx, 2500, false);
        this.swiper.slides[this.swiper.activeIndex].classList.remove(
          "swiper-slide-active"
        );
        this.swiper.slides[idx].classList.add("swiper-slide-active");
      }
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style scoped>
.swiper-slide {
  padding-top: 10px;
  padding-bottom: 10px;
}
.swiper-slide-active > div {
  box-shadow: 0px 0px 20px 0px rgba(137, 43, 226, 0.801);
}

</style>