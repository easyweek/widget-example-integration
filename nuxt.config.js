export default {
    ssr: true,

    target: 'static',

    server: {
        host: '0.0.0.0'
    },

    telemetry: false,

    components: true,

    head: {
        title: 'Integration examples',
        titleTemplate: '%s - EasyWeek Widget',
        htmlAttrs: {
            lang: '',
            translate: 'no'
        },
        meta: [
            { charset: 'utf-8' },
            {
                hid: 'viewport',
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no'
            }
        ],
        link: [
            {
                hid: 'uikit',
                href: 'https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css',
                rel: 'stylesheet'
            }
        ],
        script: [
            {
                hid: 'uikit',
                src: 'https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/js/uikit.min.js',
                async: true
            },
            {
                hid: 'widget',
                src: `${process.env.WIDGET_URL}/widget.js`
            }
        ]
    },

    env: {
        WIDGET_URL: process.env.WIDGET_URL
    }
}
