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
        <input-dropdown :class="$style.seconddropdown" :compact="true" location="belgrano"></input-dropdown>
    </div>
    
</template>

<style module>

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