<template>
    <div :class="[$style.container, compact && $style.compact]">
        <select :value="location" :class="$style.select" @input="handleInput($event.target.value)">
            <option
				v-for="neighborhood in neighborhoods"
				:key="neighborhood.name"
				:value="neighborhood.name">{{ neighborhood.name }}
			</option>
        </select>
        <div :class="$style.select__arrow"></div>
    </div>
</template>

<script>
import VueTypes from "vue-types";

export default {
  name: "InputDropdown",
  props: {
    compact: VueTypes.bool.def(false),
    location: VueTypes.string.isRequired
  },
  computed: {
    neighborhoods() {
      return this.$store.getters.getNeighborhoods;
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style module lang="scss">
.container {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

.select {
  display: inline-block;
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  background: transparent;
  border: 0;
  outline: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 60px;
  font-size: 20px;
  border-bottom: 2px solid white;
  border-radius: 0;
  font-family: "Roboto";
}

.select__arrow {
  position: absolute;
  top: 26px;
  right: 20px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-width: 8px 5px 0 5px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}
option {
  color: rgb(121, 113, 217);
}
.compact {
  background: white;
  width: initial;
  border-radius: 30px;

  .select {
    color: rgb(121, 113, 217);
    padding-right: 35px;
    border-bottom: 0px;
  }
  .select__arrow {
    border-color: rgb(121, 113, 217) transparent transparent transparent;
  }
}
</style>
