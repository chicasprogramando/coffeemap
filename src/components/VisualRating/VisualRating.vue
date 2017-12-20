<template>
    <div>
        <icon 
            v-for="n in iconMax" 
            :name="iconName" 
            :key="n"
            :class="opacityClass(n)"
        />
    </div>
</template>

<script>
import Icon from '../Icon/Icon';

const MAX = 5;
const ICON_NAME = 'heart';

export default {
    name: 'VisualRating',
    props: ['value'],
    components: {
        Icon,
    },
    data() {
        return {
            iconName: ICON_NAME,
            iconMax: MAX,
        }
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
    .opacity50 {
        opacity: 0.5;
    }
</style>
