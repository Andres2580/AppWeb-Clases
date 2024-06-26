import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import router from '@/router.js'

const app = createApp(App)

app.use(PrimeVue)

app.use(router)

app.component('pv-button', Button)
app.component('pv-input-text', InputText)
