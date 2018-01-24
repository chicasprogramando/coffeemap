<template>
    <div class="range-slider">
      <div class="range-margin">
        <input
          class="range-slider__range"
          type="range"
          v-model="value"
          min="0"
          max="150"
        >
        <span class="range-slider__value">$ {{ value }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {},
  components: {},
  data(){
    return {
      value: 0,
    };
  },
  methods: {}
};
</script>


<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  padding: 60px 20px;
}

.range-slider {
  margin: 15px auto;
  min-width: 300px;
  max-width:400px;
}

.range-margin {
  margin-right: -3vw;
}

.range-slider__range {
  -webkit-appearance: none;
  width: 60%;
  min-width: 200px;
  max-width: 500px;
  height: 10px;
  border-radius: 5px;
  background: #fff;
  outline: none;
  padding: 0;
  margin: 0;
}
.range-slider__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-in-out;
  transition: background 0.15s ease-in-out;
}
.range-slider__range::-webkit-slider-thumb:hover {
  background: #1abc9c;
}
.range-slider__range:active::-webkit-slider-thumb {
  background: #1abc9c;
}
.range-slider__range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-in-out;
  transition: background 0.15s ease-in-out;
}
.range-slider__range::-moz-range-thumb:hover {
  background: #1abc9c;
}
.range-slider__range:active::-moz-range-thumb {
  background: #1abc9c;
}

.range-slider__value {
  display: inline-block;
  position: relative;
  width: 65px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #2c3e50;
  padding: 5px 10px;
  margin-left: 8px;
}
.range-slider__value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #2c3e50;
  border-bottom: 7px solid transparent;
  content: "";
}

::-moz-range-track {
  background: #d7dcdf;
  border: 0;
}

input::-moz-focus-inner,
input::-moz-focus-outer {
  border: 0;
}

@media (min-width: 600px) {
  body {
    padding: 60px;
  }
}
</style>