<script src="./CustomMap.js"></script>

<template>
	<div>
        <MapWrapper
        :zoom="15"
        :center="{lat: -34.586347, lng: -58.431469}"
        :coffees="coffees"
        @markerClick="handleMarkerClick"/>
       <visualSlider @itemClick="handleCoffeeClick" ref="slider" :coffees="coffees"/>
        <VisualCafeDetail :coffee="coffee" v-if="coffee" @closeDetail="closeDetail"/>
        <input-dropdown @input="changeNeighborhood" class="seconddropdown" :compact="true" :location="neighborhood"></input-dropdown>
    </div>

</template>

<style scoped>

.swiper-container{
    position:absolute;
    z-index:400;
    bottom:20px;
    max-width:100vw;
}
.seconddropdown{
    position: absolute;
    z-index:500;
    top:10px;
    left:50px;
    width:80vw;
}

</style>