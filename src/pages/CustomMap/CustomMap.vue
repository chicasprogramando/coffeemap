<script src="./CustomMap.js"></script>

<template>
	<div>
        <h2>{{ title }}</h2>
        <MapWrapper 
        :zoom="15" 
        :center="{lat: -34.586347, lng: -58.431469}" 
        @coffeClick="handleCoffeClick"
        />
        <VisualCafeDetail :coffee="coffee" v-if="coffee"/>
    </div>
    
</template>

<style scoped>
h2 {
    display: block;
    font-size: 30px;
}
</style>