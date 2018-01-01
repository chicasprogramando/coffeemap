<script src="./Home.js"></script>

<template>
	<div class="container">
        <template v-if="isModalOpen">
	    <div class="modal">
            <button-general button-text="CLOSE" @buttonClick="closeModal"/>
            <h1>Modal {{$route.params.id}}</h1>
        </div>
        </template>
	</div>
</template>

<style scoped>
.modal {
    background: #CCC;
    width: 300px;
    height: 500px;
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