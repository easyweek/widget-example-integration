<template>
    <div>
        <h1 class="uk-heading-small">Button & Icon</h1>
        <p>
            Quis
            <a href="#" class="js-booking-trigger">book now link</a>
            quibusdam quia error modi voluptas non, sint, ducimus cupiditate
            consequuntur mollitia fugiat molestiae qui rerum adipisci nostrum
            debitis fugit hic fuga odit vero deleniti quod nobis. Animi
            perspiciatis molestias vero error veritatis quos ab nulla suscipit
            itaque consectetur omnis sit repellat ex provident nobis sint fugit
            dolores, eligendi numquam quas cumque esse labore pariatur.
            Necessitatibus, hic.
        </p>
        <p>
            <button class="uk-button uk-button-primary js-booking-trigger">
                Book now button
            </button>
        </p>
        <BaseCode :code="code" />
    </div>
</template>

<script>
import { DEFAULT_WIDGET_COMPANY } from '~/assets/js/constants'

export default {
    name: 'CustomTrigger',

    computed: {
        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                `<script src="${widgetUrl}/widget.js"></scr` + 'ipt>',
                '<script>',
                '   new EasyWeekWidget({',
                `        url: '${widgetUrl}/company-slug',`,
                "        button: { text: 'Book now icon', showText: true },",
                "        trigger: '.js-booking-trigger'",
                '   })',
                '</scr' + 'ipt>'
            ].join('\n')
        }
    },

    mounted() {
        const widget = new window.EasyWeekWidget({
            url: `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}`,
            button: { text: 'Book now icon', showText: true },
            trigger: '.js-booking-trigger'
        })

        this.$once('hook:beforeDestroy', () => {
            widget.destroy(true)
        })
    }
}
</script>
