<template>
    <div class="squareButton">
        <icon :name="iconName"/>
    </div>
</template>

<script>
import Icon from "../Icon/Icon";

const ICON_NAME = "filter";

export default {
  name: "ButtonIcon",
  props: ["name"],
  components: {
    Icon
  },
  data() {
    return {
      iconName: ICON_NAME,
    };
  },
};
</script>

<style scoped>
.squareButton {
  background-color:blueviolet;
  width: 100px;
  height: 100px;
  margin: auto;
  padding: 30px;
  }
</style>
