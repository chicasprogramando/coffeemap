<template>
    <div class="select" v-bind:class="{ compact: compact }">
        <select>
            <option value="">Palermo</option>

        </select>
        <div class="select__arrow"></div>
    </div>
</template>

<script>

export default {
    name: 'InputDropdown',
    props: ['compact'],
    components: {
        
    },
    data() {
    	return {
			compact:false,
		}
    },
    methods: {
        
    }       
}
</script>

<style scoped>
.select {
	position: relative;
	display: inline-block;
	width: 320px;
	margin-bottom: 15px;
	background: blueviolet;
}

.select.compact {
	background: white;
	width: initial;
}

.select select {
	display: inline-block;
	width: 100%;
	padding: 10px 15px;
	cursor: pointer;
	color:white;
    background: transparent;
	border: 0;
	border-radius: 0;
	outline: 0;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
    height: 60px;
    font-size: 20px;
    border-bottom:2px solid white;

}
.select.compact select {
	color:blueviolet;
	width: initial;
	padding-right: 35px;
}


.select__arrow {
	position: absolute;
	top: 26px;
	right: 20px;
	width: 0;
	height: 0;
	pointer-events: none;
	border-width: 8px 5px 0 5px;
	border-style: solid;
	border-color: white transparent transparent transparent;
    
}
.select.compact .select__arrow {
	border-color:blueviolet transparent transparent transparent;
}

    
</style>
