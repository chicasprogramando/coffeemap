<template>
    <div :class="[$style.container, compact && $style.compact]">
        <select v-model="selected" :class="$style.select">
            <option 
				v-for="neighborhood in neighborhoods" 
				:key="neighborhood.value"
				:value="neighborhood.value">{{ neighborhood.label }}
			</option>
        </select>
        <div :class="$style.select__arrow"></div>
    </div>
</template>

<script>

export default {
    name: 'InputDropdown',
    props: {
		compact: {
			type: Boolean,
			default: false,
		},
	},
	data(){
		return {
			selected: 'palermo',
			neighborhoods: [
				{value: 'palermo', label: 'Palermo'},
				{value: 'belgrano', label: 'Belgrano'},
				{value: 'nunez', label: 'Nuñez'},
				{value: 'recoleta', label: 'Recoleta'},
			],
		}
	}
}
</script>

<style module lang="scss">

.container {
	position: relative;
	display: inline-block;
	
	// width: 320px;
	// Width should be controlled by outer container, depending on the page its used in

	margin-bottom: 15px;

	// background: blueviolet;
	// Color should be set by a prop (maybe set this color as a default)
}


.select {
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

.compact {
	background: white;
	width: initial;
	.select {
		color:blueviolet;
		width: initial;
		padding-right: 35px;
	}
	.select__arrow {
		border-color:blueviolet transparent transparent transparent;
	}
}
    
</style>
