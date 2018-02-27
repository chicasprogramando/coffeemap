<template>
    <button  :class="[$style.initial, status]" v-on:click="changeStatus" :style="defineSize">
          <icon  v-if="isActive" color="#7971D9" :name="name" :size="iconSize"/>
          <icon  v-else color="white" :name="name" :size="iconSize"/>
          <label :class="[$style.initialLabel, labelStatus]">{{ buttonText }}</label>
    </button>
</template>

<script>
import VueTypes from "vue-types";
import Icon from "../Icon/Icon";

export default {
  name: "FilterButton",
  props: {
    name: VueTypes.string.isRequired,
    buttonText: VueTypes.string,
    iconSize: VueTypes.number.def(100),
    buttonSize: VueTypes.number.def(120),
    isActive: VueTypes.bool.isRequired.def(false),
  },
  components: {
    Icon
  },
  methods: {
    changeStatus: function() {
      this.$emit('click');
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
    },
    defineSize() {
      return {
        height: `${this.buttonSize}px`,
        width: `${this.buttonSize}px`,
        minWidth:`${this.buttonSize}px`,
        minHeight:`${this.buttonSize}px`,
        };
    }
  }
};
</script>
<style module lang="postcss">
@import "../../styles/variables.css";

*:focus {
  outline: 0;
  outline: none;
}
.initial {
  cursor: pointer;
  background-color: transparent;
  margin: 5px;
  padding: 15px;
  border: 2px solid white;
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
  color: #7971D9;
}
</style>
