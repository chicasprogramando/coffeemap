<template>
    <div :class="$style.slider">
        <div :class="$style.image">
        </div>
            <div :class="$style.columns">
                <div :class="$style.info">
                    <p :class="$style.nombre">{{coffee.name}}</p>
                    <p>
                    <!--<span :class="$style.time">{{businessHours[0]}}-{{businessHours[1]}}hs</span>-->
                    <span :class="$style.status">Abierto</span></p>
                    <!--<p :class="$style.address">{{coffee.address}}<br/><span>{{coffee.website}}</span></p>-->
                </div>
                <div :class="$style['rating-button']">
                    <visual-rating :class="$style.rating" :value="coffee.rating"></visual-rating>
                    <button-general :class="$style.seemore" button-text="Ver más" bg-color="#7971d9" text-color="#fff" @click="handleClick(coffee)"></button-general>
                </div>
            </div>   
    </div>
</template>

<script>
import VueTypes from "vue-types";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral.vue";
import VisualRating from "../VisualRating/VisualRating.vue";

export default {
  name: "VisualSliderItem",
  components: {
    VisualRating,
    ButtonGeneral
  },
  props: {
    coffee: VueTypes.object

    /*businessHours: VueTypes.arrayOf(Number),*/
  },
  data() {
    return {};
  },
  methods: {
    handleClick(coffee) {
      console.log(`You clicked: ${coffee.name}`);
      console.log("Path click #1");
      this.$emit("itemClick", coffee);
    }
  }
};
</script>

<style module>
@import "../../styles/variables.css";
.slider {
  background-color: white;
  width: 250px;
  height: 190px;
  border-radius: 30px;
  overflow: hidden;
}

.image {
  background-image: url("../../assets/cafevisualslideitem.jpg");
  height: 80px;
}
.info {
  line-height: 15px;
  padding-left: 20px;
  width: 120px;
  display: flex;
  flex-direction: column;
}

.columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.rating-button {
  width: 100px;
}
.status {
  color: green;
  position:absolute;
  bottom:15px;
  left:20px;
}
.address {
  color: grey;
  font-size: 13px;
}
.time {
  font-weight: bold;
  color: black;
  font-size: 13px;
  margin-right: 5px;
}
.nombre {
  color: rgb(121, 113, 217);
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
}
.rating {
  margin-top: 15px;
  margin-bottom: 40px;
  margin-right: 15px;
}
.seemore {
  width: 80px;
  margin-right: 20px;
}
</style>