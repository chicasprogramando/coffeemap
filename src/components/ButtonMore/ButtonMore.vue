//html
<template>
    <button-general button-text="Ver más" text-color="#fff" bg-color="#7573d2"></button-general>
</template>

<script>
import ButtonGeneral from '../ButtonGeneral/ButtonGeneral.vue';

export default {
    name: 'ButtonMore',
    props: ['buttonText'],
    components: {
        ButtonGeneral,
    }
}
</script>


//css
<style scoped>
    .button {
        width: 10%;
        padding: 5px 8px;
        background-color: #7573d2;
        font-weight: bold;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        border: none;
        border-radius: 25px;
    }
</style>

