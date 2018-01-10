
<template>
    <button :class="[$style.button, buttonClass]" :style="buttonStyle" @click="handleClick">
        {{ buttonText }}
    </button>
</template>

<script>
import VueTypes from 'vue-types';

export default {
    name: 'ButtonGeneral',
    props: {
        textColor: VueTypes.string.def('#7573d2'),
        size: VueTypes.oneOf(['small', 'large']).def('small'),
        buttonText: VueTypes.string.isRequired,
        bgColor: VueTypes.string.def('#fff'),
    },
    methods: {
        handleClick(){
            this.$emit('click');
        }
    },
    computed: {
        buttonStyle() {
            return {
                color: this.textColor,
                backgroundColor: this.bgColor,
            }
        },
        buttonClass() {
            if (this.size === 'small') {
                return this.$style.smallButton;
            }
            if (this.size === 'large') {
                return this.$style.largeButton;
            }
        }
    }
};
</script>

<style module>
    .button {
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: none;
        border-radius: 25px;
    }
    .smallButton {
        padding: 5px 8px;
        font-size: 12px;
    }
    .largeButton {
        padding: 10px 20px;    
        font-size: 24px;
    }
</style>

