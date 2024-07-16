<template>
    <div>
        <div class="uk-margin-medium-top uk-section uk-padding-remove-top">
            <div class="uk-container">
                <h1 class="uk-heading-small">On-page Full Page</h1>
            </div>
        </div>

        <iframe
            :src="widgetUrl"
            style="border: 0"
            frameborder="0"
            referrerpolicy="origin"
            class="widget-full"
        ></iframe>

        <div class="uk-margin-medium-top uk-section uk-padding-remove-top">
            <div class="uk-container">
                <BaseCode :code="code" />
            </div>
        </div>
    </div>
</template>

<script>
import { DEFAULT_WIDGET_COMPANY } from '~/assets/js/constants'

export default {
    name: 'Fullpage',

    layout: 'empty',

    computed: {
        widgetUrl() {
            return `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}?source=3`
        },

        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                `<iframe src="${widgetUrl}/company-slug" style="border: 0" frameborder="0" referrerpolicy="origin" class="widget-full"></iframe>`,
                '<script>;(function(w,l){w.addEventListener("message",function(e){if(/(easyweek|eswk)\\./.test(e.origin)&&e.data&&e.data.type==="redirect"){l.replace(e.data.url)}})})(window,location);</scr' +
                    'ipt>',
                `<style>
.widget-full {
    display: block;
    width: 100%;
    height: 100vh;
}
</style>`
            ].join('\n')
        }
    }
}
</script>

<style>
.widget-full {
    display: block;
    width: 100%;
    height: 100vh;
}
</style>
