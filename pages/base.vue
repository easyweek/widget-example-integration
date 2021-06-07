<template>
    <div>
        <h1 class="uk-heading-small">Default View</h1>
        <p>
            Quis sed quibusdam quia error modi voluptas non, sint, ducimus
            cupiditate consequuntur mollitia fugiat molestiae qui rerum adipisci
            nostrum debitis fugit hic fuga odit vero deleniti quod nobis. Animi
            perspiciatis molestias vero error veritatis quos ab nulla suscipit
            itaque consectetur omnis sit repellat ex provident nobis sint fugit
            dolores, eligendi numquam quas cumque esse labore pariatur.
            Necessitatibus, hic.
        </p>
        <BaseCode :code="code" />
    </div>
</template>

<script>
import { DEFAULT_WIDGET_COMPANY } from '~/assets/js/constants'

export default {
    name: 'DefaultIntegration',

    computed: {
        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                `<script src="${widgetUrl}/widget.js"></scr` + 'ipt>',
                '<script>',
                '   new EasyWeekWidget({',
                `        url: '${widgetUrl}/company-slug',`,
                "        button: { text: 'Book now', showText: true }",
                '   })',
                '</scr' + 'ipt>'
            ].join('\n')
        }
    },

    mounted() {
        const widget = new window.EasyWeekWidget({
            url: `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}`,
            button: { text: 'Book now', showText: true }
        })

        this.$once('hook:beforeDestroy', () => {
            widget.destroy(true)
        })
    }
}
</script>
