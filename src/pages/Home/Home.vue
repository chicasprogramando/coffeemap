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
<script>
import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral.vue';

export default {
    name: 'Home',
    components: {
        ButtonGeneral,
    },
    created(){
        console.log(this.$route)
    },
    computed: {
        isModalOpen() {
            return this.$route.name === 'cafe'
            }
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.$router.push('/')
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}
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