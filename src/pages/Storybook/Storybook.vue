<script src="./Storybook.js"></script>

<template>
	<div>
		<h2>{{ title }}</h2>
        <icon name="heart"/>
        <icon name="twitter"/>
        <visual-rating :value="4" />
        <visual-rating :value="3" />
        <div><input-dropdown /></div>
        <div><input-dropdown :compact="true"/></div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    display: block;
    font-size: 30px;
}

span {
    display: block;
    font-size: 15px;
    font-weight: bold;
}
</style>