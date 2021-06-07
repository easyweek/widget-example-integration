<template>
    <pre><code v-html="highlighted" :class="`language-${language}`"></code></pre>
</template>

<script>
import Prism from 'prismjs'

export default {
    name: 'BaseCode',

    props: {
        code: {
            type: String,
            default: ''
        },

        language: {
            type: String,
            default: 'markup'
        }
    },

    computed: {
        highlighted() {
            try {
                return Prism.highlight(
                    this.code,
                    Prism.languages[this.language],
                    this.language
                )
            } catch (e) {
                console.log(e)
                return ''
            }
        }
    }
}
</script>

<style>
@import 'prismjs/themes/prism.css';
</style>
