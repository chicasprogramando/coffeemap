<script src="./CustomMap.js"></script>

<template>
	<div>
        <MapWrapper
        :zoom="15"
        :center="{lat: -34.586347, lng: -58.431469}"
        :coffees="coffees"
        @markerClick="handleMarkerClick"/>
        <visualSlider @itemClick="handleCoffeeClick" ref="slider" :coffees="coffees"/>
        <VisualCafeDetail :coffee="coffee" v-if="coffee" @closeDetail="closeDetail" class="VisualDetail"/>
        <div class="mapFilters">
          <input-dropdown @input="changeNeighborhood" class="seconddropdown" :compact="true" :location="neighborhood"></input-dropdown>
          <ButtonIcon name="filter3" :iconSize="30" class="btnFilter" @click="OpenFilters()"/>
        </div>
        <div class="wrapperFilter">
          <AllFilters/>
          <button-general button-text="Filtrar" size="large" @click="handleClick" class="buttonWidth"></button-general>
        </div>
    </div>

</template>

<style scoped>
@import "../../styles/variables.css";

.swiper-container {
  position: absolute;
  z-index: 400;
  bottom: 20px;
  max-width: 100vw;
}

.VisualDetail {
  width: 100%;
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
  position: absolute;
  width: 100%;
  z-index: 1000;
  top:0;
  background-color: purpleStrong;
  opacity: 0.8;
  padding: 20px 0px;
  text-align: center;
}

.buttonWidth {
  min-width: 300px;
  margin: 15px auto;
  font-size: fs-m;
}


</style>