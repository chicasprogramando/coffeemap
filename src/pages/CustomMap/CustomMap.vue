<script src="./CustomMap.js"></script>

<template>
	<div>
        <MapWrapper
        :zoom="15"
        :center="{lat: -34.586347, lng: -58.431469}"
         @coffeClick="handleCoffeClick"/>
       <visualSlider @coffeClick="handleCoffeClick"/>
        <VisualCafeDetail :coffee="coffee" v-if="coffee"/>
        <input-dropdown @input="changeNeighborhood" class="seconddropdown" :compact="true" :location="neighborhood"></input-dropdown>
    </div>

</template>

<style scoped>

.swiper-container{
    position:absolute;
    z-index:400;
    bottom:20px;
    max-width:100vw;
    cursor:grab;
}
.seconddropdown{
    position: absolute;
    z-index:500;
    top:10px;
    left:50px;
    width:80vw;
}

</style>