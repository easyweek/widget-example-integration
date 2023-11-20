<template>
    <div>
        <h1 class="uk-heading-small">Use multiple buttons for each service</h1>
        <ul
            class="
                uk-list
                uk-list-divider
                uk-list-large
                uk-margin-auto
                uk-margin-large-top
                uk-margin-large-bottom
                uk-width-1-2@l
            "
        >
            <li
                v-for="{
                    id,
                    locationId,
                    name,
                    price
                } in $options.DEFAULT_WIDGET_SERVICES"
                :key="id"
            >
                <div class="uk-flex">
                    <div class="uk-width-expand" uk-leader>{{ name }}</div>
                    <div class="uk-margin-small-left uk-margin-small-right">
                        {{ price }}
                    </div>
                    <button
                        type="button"
                        :data-ew-location="locationId"
                        :data-ew-service="id"
                        class="uk-button uk-button-secondary uk-button-small"
                    >
                        Order
                    </button>
                </div>
            </li>
        </ul>

        <BaseCode :code="buttonCode">
            <template #default>
                <h4>Minimal button markup</h4>
                <p>
                    Add <code>data-attributes</code> to action buttons on your
                    website
                </p>
            </template>

            <template #notice>
                <small>
                    <b>Warning!</b> please change <b>location_id</b> and
                    <b>service_id</b> to your values (you can find it in URL of
                    service page in EasyWeek widget).
                </small>
            </template>
        </BaseCode>

        <BaseCode :code="code" class="uk-margin-large-top" />
    </div>
</template>

<script>
import {
    DEFAULT_WIDGET_COMPANY,
    DEFAULT_WIDGET_SERVICES
} from '~/assets/js/constants'

export default {
    name: 'MultiButtons',

    computed: {
        buttonCode() {
            return [
                '<button data-ew-location="{location_id}" data-ew-service="{service_id}">',
                '   Custom text or service name here...',
                '</button>'
            ].join('\n')
        },

        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                `<script src="${widgetUrl}/widget.js"></scr` + 'ipt>',
                '<script>',
                "    document.addEventListener('DOMContentLoaded', function() {",
                '        var widget = new EasyWeekWidget({',
                `            url: '${widgetUrl}/company-slug',`,
                '            button: false',
                '        })',
                '',
                '        function onServiceClick($event) {',
                "            var button = $event.target.matches('data-ew-service')",
                '                ? $event.target',
                "                : $event.target.closest('[data-ew-service]')",
                '',
                '            if (!button) return',
                '',
                '            widget.setProduct(',
                "                button.getAttribute('data-ew-service')",
                "                button.getAttribute('data-ew-location')",
                '            )',
                '        }',
                '',
                "        document.addEventListener('click', onServiceClick)",
                '    })',
                '</scr' + 'ipt>'
            ].join('\n')
        }
    },

    mounted() {
        const widget = new window.EasyWeekWidget({
            url: `${process.env.WIDGET_URL}/${DEFAULT_WIDGET_COMPANY}`,
            trigger: '.js-booking-trigger'
        })

        function onServiceClick($event) {
            var button = $event.target.matches('data-ew-service')
                ? $event.target
                : $event.target.closest('[data-ew-service]')

            if (!button) return

            widget.setProduct(
                button.getAttribute('data-ew-service'),
                button.getAttribute('data-ew-location')
            )
        }

        document.addEventListener('click', onServiceClick)

        this.$once('hook:beforeDestroy', () => {
            widget.destroy(true)

            document.removeEventListener('click', onServiceClick)
        })
    },

    DEFAULT_WIDGET_SERVICES
}
</script>
