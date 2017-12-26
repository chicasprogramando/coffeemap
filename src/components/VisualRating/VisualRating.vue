<template>
    <div :class="$style.container">
        <icon 
            v-for="n in max" 
            :name="name" 
            :key="n"
            :class="opacityClass(n)"
            :size="size"
            :color="color"
        />
    </div>
</template>

<script>
import VueTypes from 'vue-types';
import Icon from '../Icon/Icon';

export default {
    name: 'VisualRating',
    props: {
        value: VueTypes.number.isRequired,
        color: VueTypes.string.def('blueviolet'),
        size: VueTypes.number.def(20),
        name: VueTypes.string.def('heart'),
        max: VueTypes.number.def(5),
    },
    components: {
        Icon,
    },
    methods: {
        isGreater(n) {
            return n > this.value;
        },
        opacityClass(n) {
            // IF ELSE
            // if (n> this.value){
            //     return this.$style.opacity50
            // } else {
            //     return null;
            // }

            // TERNARY
            // return n > this.value ? this.$style.opacity50 : null;
            return this.isGreater(n) && this.$style.opacity50;
        },
    },
}
</script>

<style module>
    .container {
        display: flex;
    }
    .icon {
        display: inline;
    }
    .opacity50 {
        opacity: 0.5;
    }
</style>
