<template>
    <button class="IconBtn" @click="ClickOpenFilters">
        <icon color="white" :name="name" :size="iconSize"/>
    </button>
</template>

<script>
import Icon from "../Icon/Icon";
import VueTypes from "vue-types";


export default {
  name: "ButtonIcon",
  props: {
    name: VueTypes.string.isRequired,
    iconSize: VueTypes.number.def(100),
  },
  components: {
    Icon
  },
  data() {
    return {

    };
  },
  methods: {
    ClickOpenFilters(){
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.IconBtn{
  cursor: pointer;
  background-color: #7971D9;
  margin: 5px;
  margin-top: -10px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.IconBtn:focus {
  outline:none;
}
</style>
