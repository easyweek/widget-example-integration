<template>
    <div>
        <h1 class="uk-heading-small">Roistat Integration</h1>

        <BaseCode :code="code" class="uk-margin-large-top" />
    </div>
</template>

<script>
export default {
    name: 'RoistatPage',

    head() {
        return {
            script: [
                {
                    hid: 'roistat-id',
                    innerHTML: `(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', 'cfda05cf44284b2b6274729c5e770365');`,
                    type: 'text/javascript',
                    charset: 'utf-8'
                },
                {
                    innerHTML: `window.onRoistatAllModulesLoaded = function () {
    window.roistat.registerOnVisitProcessedCallback(function() {
        console.log("Установлен номер визита: " + window.roistat.getVisit());
        new window.EasyWeekWidget({
            url: "https://widget.easyweek.io/awescode-gmbh?roistat_visit=" + window.roistat.getVisit(),
            button: { text: 'Online Booking', showText: true }
        });
    });
};`,
                    type: 'text/javascript',
                    body: true
                }
            ],
            // this line need for application/ld+json
            __dangerouslyDisableSanitizers: ['script']
        }
    },

    computed: {
        code() {
            const widgetUrl = process.env.WIDGET_URL

            return [
                '<!-- Insert after Roistat integration -->',
                `<script src="${widgetUrl}/widget.js"></scr` + 'ipt>',
                '<script>',
                '    (function(){',
                '        // Widget loading function',
                '        function loadEasyweek(roistatVisit) {',
                '            window.ewWidget = new EasyWeekWidget({',
                `                url: "${widgetUrl}/company-slug" + (roistatVisit ? ("?roistat_visit=" + roistatVisit) : ""),`,
                '                button: { text: "Online Booking", showText: true }',
                '            })',
                '        };',
                '',
                '        // Load Easyweek after 3 seconds if Roistat not responding',
                '        var tm = setTimeout(loadEasyweek, 3000);',
                '',
                '        // Register Roistat callbacks',
                '        window.onRoistatAllModulesLoaded = function () {',
                '            window.roistat.registerOnVisitProcessedCallback(function() {',
                '                // Cancel loading by timeout',
                '                clearTimeout(tm)',
                '',
                '                // Get Roistat visit',
                '                var roistatVisit = window.roistat.getVisit();',
                '',
                '                // Destroy widget if already loaded',
                '                if (window.ewWidget) {',
                '                    window.ewWidget.destroy(true)',
                '                }',
                '',
                '                loadEasyweek(roistatVisit)',
                '            });',
                '        }',
                '    })();',
                '</scr' + 'ipt>'
            ].join('\n')
        }
    }
}
</script>
