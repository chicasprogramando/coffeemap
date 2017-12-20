<template>
  <img :src="src" :class="$style.icon" />
</template>

<script>
export default {
    name: 'Icon',
    props: ['name'],
    computed: {
        src() {
            return require(`../../assets/icons/${this.name}.svg`);
        },
    }
}
</script>

<style module>
    .icon {
        width: 100px;
        height: 100px;
    }
</style>
