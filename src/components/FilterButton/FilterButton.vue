<template>
    <div  class="initial " v-on:click="changeStatus" :class="{ active: isActive }">
        <icon :name="iconName"/>
        <label class="initialLabel" :class="{ labelActive: isActive }">{{labelName}}</label>
    </div>
</template>

<script>
import Icon from "../Icon/Icon";

let ICON_NAME = "wifi";
const LABEL_NAME = "Wifi";

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
      if (this.isActive == false) {
          ICON_NAME = "wifi"
          console.log(ICON_NAME)
      }else{
          ICON_NAME = "wifi_active"
           console.log(ICON_NAME)
      } 
    }
  }
};
</script>
<style scoped>
.initial {
  border-radius: 100px;
  border: 5px solid white;
  width: 150px;
  height: 150px;
  margin: auto;
  padding: 10px;
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
    display:block;
    color:blueviolet;
}

</style>
