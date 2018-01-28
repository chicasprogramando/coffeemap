<script src="./CustomMap.js"></script>

<template>
	<div>
        <MapWrapper 
        :zoom="15" 
        :center="{lat: -34.586347, lng: -58.431469}" 
        @coffeClick="handleCoffeClick"
        />
       <visualSlider/>
        <VisualCafeDetail :coffee="coffee" v-if="coffee"/>
    </div>
    
</template>

<style scoped>

.swiper-container{
    position:absolute;
    z-index:400;
    bottom:20px;
    left:10px;
    max-width:100vw;
    cursor:grab;
}
</style>