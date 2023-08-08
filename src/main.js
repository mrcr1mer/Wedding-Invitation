import './assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { browserDetectPlugin } from '@/plugins/browserDetect'
import { animateDirective } from "@/directives/observer"

const app = createApp(App)

app.use(createPinia())
app.use(browserDetectPlugin)

app.directive('animate', (el, binding) => {
  animateDirective(el, binding)
})

app.mount('#app')
