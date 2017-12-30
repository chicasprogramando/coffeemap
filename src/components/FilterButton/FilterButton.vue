<template>
    <div  :class="[$style.initial, status]" v-on:click="changeStatus">

          <icon  v-if="isActive" color="blueviolet"  :name="name"/>
          <icon  v-else color="white" :name="name"/>
          <label :class="[$style.initialLabel, labelStatus]">{{ buttonText }}</label>

    </div>
</template>

<script>
import VueTypes from "vue-types";
import Icon from "../Icon/Icon";

export default {
  name: "FilterButton",
  props: {
    name: VueTypes.string.isRequired,
    buttonText: VueTypes.string.isRequired
  },
  components: {
    Icon
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    changeStatus: function() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    status() {
      if (this.isActive) {
        return this.$style.active;
      }
    },
    labelStatus() {
      if (this.isActive) {
        return this.$style.labelActive;
      }
    }
  }
};
</script>
<style module>
  .initial {
    width: 150px;
    height: 150px;
    margin: auto;
    padding:15px;
    border: 5px solid white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .initialLabel {
    display: block;
    font-weight: bold;
    color: white;
  }
  .active {
    background-color: white;
  }
  .labelActive {
    color: blueviolet;
  }
</style>
