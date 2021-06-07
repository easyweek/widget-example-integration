<template>
    <iframe
        :src="widgetUrl"
        style="border: 0"
        frameborder="0"
        class="widget-full"
    ></iframe>
</template>

<script>
import { DEFAULT_WIDGET_COMPANY } from '~/assets/js/constants'

export default {
    name: 'Fullpage',

    computed: {
        widgetUrl() {
            return `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}?source=3`
        }
    }
}
</script>

<style>
.widget-full {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
