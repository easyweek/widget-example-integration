<template>
    <div>
        <h1 class="uk-heading-small">Roistat Test</h1>
    </div>
</template>

<script>
export default {
    name: 'RoistatPage',
    head() {
        return {
            script: [
                {
                    innerHTML: `
                    window.onRoistatAllModulesLoaded = function () {
    window.roistat.registerOnVisitProcessedCallback(function() {
        console.log("Установлен номер визита: " + window.roistat.getVisit());
        new window.EasyWeekWidget({
            url: "https://widget.easyweek.io/awescode-gmbh?roistat_visit=" + window.roistat.getVisit(),
            button: { text: 'Онлайн-запись', showText: true }
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
    }
}
</script>
