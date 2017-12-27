<template>
    <div  class="initial " v-on:click="changeStatus"  :class="{ active: isActive }">
        <div class="center">
          <icon  v-if="isActive" color="blueviolet"  :name="iconName"/>
          <icon  v-else color="white" :name="iconName"/>
          <label class="initialLabel" :class="{ labelActive: isActive }">{{labelName}}</label>
        </div>
    </div>
</template>

<script>
import Icon from "../Icon/Icon";

let ICON_NAME = "wifi";
let LABEL_NAME = "Wifi";

export default {
  name: "FilterButton",
  props: ["name"],
  components: {
    Icon
  },
  data() {
    return {
      iconName: ICON_NAME,
      isActive: false,
      labelName: LABEL_NAME
    };
  },

  methods: {
    changeStatus: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style scoped>

.initial {
  width: 150px;
  height: 150px;
  margin: auto;
  padding: 10px;
  border: 5px solid white;
  border-radius: 50%;
}
.initialLabel {
  display: block;
  font-weight: bold;
  color:white;
}
.active {
  background-color: white;
}
.labelActive{
    color:blueviolet;
}
.center{
  display: flex;
  flex-direction:column;
  align-items: center;
}
</style>
