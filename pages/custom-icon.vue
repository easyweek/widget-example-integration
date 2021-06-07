<template>
    <BaseCode :code="code" />
</template>

<script>
import { DEFAULT_WIDGET_COMPANY } from '~/assets/js/constants'

export default {
    name: 'CustomIcon',

    layout: 'dummy-page',

    computed: {
        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                `<script src="${widgetUrl}/widget.js"></scr` + 'ipt>',
                '<script>',
                '   new EasyWeekWidget({',
                `        url: '${widgetUrl}/company-slug',`,
                '        button: {',
                "            text: 'Make appointment',",
                '            showText: true,',
                "            color: '#d9ed92'",
                "            background: '#168aad',",
                "            textColor: '#222',",
                "            textBackground: '#d9ed92'",
                '        }',
                '   })',
                '</scr' + 'ipt>'
            ].join('\n')
        }
    },

    mounted() {
        const widget = new window.EasyWeekWidget({
            url: `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}`,
            button: {
                text: 'Make appointment',
                showText: true,
                color: '#d9ed92',
                background: '#168aad',
                textColor: '#222',
                textBackground: '#d9ed92'
            }
        })

        this.$once('hook:beforeDestroy', () => {
            widget.destroy(true)
        })
    }
}
</script>
