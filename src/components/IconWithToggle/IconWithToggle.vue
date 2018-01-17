<template>
  <div :class="[$style.miniIconWrapper, status]" @click="toggleActive">
    <div :class="$style.miniIconStyle">
        <icon :name="iconName" :size="iconSize"/>
        <span>{{ name }}</span>                    
    </div>
  </div> 
</template>

<script>
import VueTypes from "vue-types"
import Icon from "../../components/Icon/Icon"

export default {
  name: "IconWithToggle",
  props: {
    name: VueTypes.string.isRequired,
    iconName: VueTypes.string,
    iconSize: VueTypes.number.def(100)
  },
  components: {
    Icon
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    status() {
      if (this.isActive) {
        return this.$style.active
      }
    }
  },
  methods: {
    toggleActive: function() {
      this.isActive = !this.isActive
      console.log("entro!")
    }
  }
}
</script>

<style module>
.miniIconWrapper {
  flex: 0 0 50%;
  height: auto;
  color: white;
}

.active .miniIconStyle {
  background-color: white;
}

.active .miniIconStyle svg path {
  fill: #8882da;
}

.active .miniIconStyle span {
  color: #8882da;
}

.miniIconStyle {
  width: 100px;
  height: 100px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  margin: 0 auto 15px;
  transition: all 0.3s ease-in-out;
}

.miniIconStyle svg path {
  fill: white;
}
</style>
