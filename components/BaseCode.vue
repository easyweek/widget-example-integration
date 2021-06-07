<template>
    <div>
        <h4>Widget Code</h4>
        <p>
            Copy and paste this code as the first item into the &lt;HEAD&gt; of
            every web page that you want to connect widget.
        </p>

        <pre><code v-html="highlighted" :class="`language-${language}`"></code></pre>
        <small>
            <b>Warning!</b> please change <b>company-slug</b> to your company
            slug on EasyWeek (you can find it in EasyWeek website config).
        </small>
    </div>
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
