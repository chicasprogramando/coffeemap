<script src="./CustomMap.js"></script>

<template>
     
	<div>
        
        <div class="customMap">
        <MapWrapper
        :zoom="15"
        :center="{lat: -34.586347, lng: -58.431469}"
        :coffees="coffees"
        @markerClick="handleMarkerClick"/>
        <visualSlider @itemClick="handleCoffeeClick" ref="slider" :coffees="coffees"/>
        <transition @enter="onEnter" @leave="onLeave">
          <VisualCafeDetail :coffee="coffee" v-if="coffee" @closeDetail="closeDetail" class="VisualDetail"/>
        </transition>
        <div class="mapFilters">
          <input-dropdown @input="changeNeighborhood" class="seconddropdown" :compact="true" :location="neighborhood"></input-dropdown>
          <ButtonIcon name="filter3" :iconSize="30" class="btnFilter" @click="modalIn = true"/>
        </div>
        <div class="wrapperFilter" :class="{modalIn:modalIn}">
          <AllFilters class="filterSpace"/>
          <button-general button-text="Volver al mapa" size="large" @click="modalIn = false" class="buttonWidth"></button-general>
        </div>
        </div>
    </div>

</template>

<style scoped>
@import "../../styles/variables.css";

.swiper-container {
  position: absolute;
  z-index: 400;
  bottom: 10px;
  max-width: 100vw;
}

.mapFilters {
  width: 86vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  top: 10px;
  left: 50px;
}
.seconddropdown {
  width: 80vw;
}

.btnFilter {
  margin-top: -30px;
}

.wrapperFilter {
  transform: scale(0);
  position: absolute;
  width: 100%;
  z-index: 1000;
  top:0;
  background-color: purpleStrong;
  opacity: 0.9;
  padding: 10px 0px;
  text-align: center;
}

.filterSpace {
  padding-top: 10px;
}

.buttonWidth {
  min-width: 300px;
  margin: 15px auto;
  font-size: fs-m;
}

.modalIn {
  animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
@keyframes scaleUp {
  0% {
    transform: scale(0.8) translateY(1000px);
  }
  100% {
    transform: scale(1) translateY(0px);
  }
}

/*
.modalOut {
  animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  transform: scale(0);
}

@keyframes scaleDown {
  0% {
    transform: scale(1) translateY(0px);
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translateY(1000px);
    opacity: 0;
  }
}
*/
</style>