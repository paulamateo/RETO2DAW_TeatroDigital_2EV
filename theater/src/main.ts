import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { createI18n } from 'vue-i18n';
import { messages } from './locales/local'


const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
});

const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(pinia)

app.mount('#app')