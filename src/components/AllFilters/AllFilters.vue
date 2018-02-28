<template>
    <div :class="$style.Iconwrap">
        <div v-if="is320" :class="$style.miniIcons">
          <FilterButton :isActive="wifi" name="wifi" button-text="Wifi" :buttonSize="100" :iconSize="35" @click="handleClickFilter('wifi')"/>
          <FilterButton :isActive="kitchen" name="food" button-text="Cocina" :buttonSize="100" :iconSize="35" @click="handleClickFilter('kitchen')"/>
          <FilterButton :isActive="takeaway" name="bag" button-text="Take away" :buttonSize="100" :iconSize="35" @click="handleClickFilter('takeaway')"/>
          <FilterButton :isActive="coworking" name="laptop" button-text="Coworking" :buttonSize="100" :iconSize="35" @click="handleClickFilter('coworking')"/>
        </div>
        <div v-else :class="$style.miniIcons">
          <FilterButton :isActive="wifi" name="wifi" button-text="Wifi" :buttonSize="120" :iconSize="50" @click="handleClickFilter('wifi')"/>
          <FilterButton :isActive="kitchen" name="food" button-text="Cocina" :buttonSize="120" :iconSize="50" @click="handleClickFilter('kitchen')"/>
          <FilterButton :isActive="takeaway" name="bag" button-text="Take away" :buttonSize="120" :iconSize="50" @click="handleClickFilter('takeaway')"/>
          <FilterButton :isActive="coworking" name="laptop" button-text="Coworking" :buttonSize="120" :iconSize="50" @click="handleClickFilter('coworking')"/>
        </div>
    </div>
</template>

<script>
import AppHeader from "../../components/AppHeader/AppHeader";
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral";
import FilterButton from "../../components/FilterButton/FilterButton";
import InputRadio from "../../components/InputRadio/InputRadio.vue";
import RangeSlider from "../../components/RangeSlider/RangeSlider.vue";
import VueTypes from "vue-types";

export default {
  name: "AllFilters",
  components: {
    AppHeader,
    ButtonGeneral,
    FilterButton,
    InputRadio,
    RangeSlider
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);

      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    handleClick() {
      this.$router.push("/map");
    },
    handleClickFilter(filter) {
      this.$store.dispatch("updateFilter", filter);
    },
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
    }
  },
  computed: {
    is320() {
      return this.windowWidth <= 320;
    },
    wifi() {
      return this.$store.getters.wifiSelected;
    },
    kitchen() {
      return this.$store.getters.kitchenSelected;
    },
    takeaway() {
      return this.$store.getters.takeawaySelected;
    },
    coworking() {
      return this.$store.getters.coworkingSelected;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style module lang="postcss">
@import "../../styles/variables.css";
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

.Iconwrap {
  padding-top: 50px;
}

.miniIcons {
  width: 100%;
  max-width: 600px;
  margin: 2vw auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
}

.button {
  text-align: center;
  width: 100%;
  background-color: purpleLight;
  position: absolute;
  bottom: 0;
}

.buttonWidth {
  min-width: 300px;
  margin: 15px auto;
  font-size: fs-m;
}

@media (min-width: 700px) {
  .miniIcons {
    max-width: 380px;
    justify-content: space-around;
  }
}

@media (max-width: 320px) {
  .container {
    margin: 10vw 1vh;
  }
}

@media (max-width: 615px) {
  .miniIcons {
    max-width: 300px;
  }
}
</style>
