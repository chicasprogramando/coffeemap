<script src="./Home.js"></script>

<template>
	<div class="container">
		<h2>{{ title }} <span>{{ subtitle }}</span></h2>
    <Example />
    <ButtonGeneral />
    <ButtonMore />
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: #7573d2;
}

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