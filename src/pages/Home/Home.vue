<script src="./Home.js"></script>

<template>
	<div>
		<h2>{{ title }} <span>{{ subtitle }}</span></h2>
    <Example />
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