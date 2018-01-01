<script src="./CustomMap.js"></script>

<template>
	<div>
        <h1>{{ title }}</h1>

        <gmap-map
            :center="center"
            :zoom="7"
            style="width: 500px; height: 300px"
        >
            <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="dalemecha(m)"
            ></gmap-marker>
        </gmap-map>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    display: block;
    font-size: 30px;
    border-bottom: 2px solid #ccc
}
</style>