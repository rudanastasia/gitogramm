<template>
<button :class="['button', { active: isOpened }]" @click="toggle">
<span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
<span class="icon">
<icon name="triangle" />
</span>
</button>
</template>

<script>
import { icons } from '../../icons'

export default {
    component: {
        icons
    },
    data () {
        return {
            isOpened: false
        }
    },
    methods: {
        toggle () {
            this.isOpened = !this.isOpened;
            this.$emit('onToggle', this.isOpened)
        }
    }
};
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
