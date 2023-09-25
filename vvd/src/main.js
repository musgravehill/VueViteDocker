import { createApp } from 'vue'
import './style.css'
import Root from './App2.vue'  // app root component

import i18nPlugin from './plugins/i18n.js'

const app = createApp(Root)

const i18nPluginOptions = {
    greetings: {
        hello: 'Bonjour!'
    }
}
app.use(i18nPlugin, i18nPluginOptions)


app.mount('#app')

