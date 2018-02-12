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
        <div class="mapFilters">
        <input-dropdown @input="changeNeighborhood" class="seconddropdown" :compact="true" :location="neighborhood"></input-dropdown>
        <FilterButton name="filter3" :buttonSize="60" :iconSize="35" @click="handleClickFilter('wifi')" class="btnFilter"/>
        </div>
    </div>

</template>

<style scoped>

.swiper-container{
    position:absolute;
    z-index:400;
    bottom:20px;
    max-width:100vw;
}

.mapFilters {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:500;
    top:10px;
    left:50px;
}
.seconddropdown{
    width:70vw;
}

.btnFilter {
    width:60vw;
    margin-top: -8px;
    background-color:  #7971D9;
    color: white;
}

</style>