<template>
    <div>
        <h1 class="uk-heading-small">On-page built in</h1>

        <iframe
            :src="widgetUrl"
            style="border: 0"
            frameborder="0"
            class="widget-frame"
        ></iframe>

        <BaseCode :code="code" />
    </div>
</template>

<script>
import { DEFAULT_WIDGET_COMPANY } from '~/assets/js/constants'

export default {
    name: 'BuiltIn',

    computed: {
        widgetUrl() {
            return `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}?source=3`
        },

        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                `<iframe src="${widgetUrl}/company-slug" style="border: 0" frameborder="0" class="widget-frame"></iframe>`,
                '<script>;(function(w,l){w.addEventListener("message",function(e){if(/easyweek\\./.test(e.origin)&&data.type==="redirect"){l.replace(e.data.url)}})})(window,location);</scr' +
                    'ipt>',
                '<style>',
                '    .widget-frame {',
                '       display: block;',
                '       height: 600px;',
                '       width: 100%;',
                '       max-width: 550px;',
                '       margin: 25px auto;',
                '       padding: 10px;',
                '       border-radius: 15px;',
                '       box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;',
                '    }',
                '</style>'
            ].join('\n')
        }
    }
}
</script>

<style>
.widget-frame {
    display: block;
    height: 600px;
    width: 100%;
    max-width: 550px;
    margin: 25px auto;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
}
</style>
