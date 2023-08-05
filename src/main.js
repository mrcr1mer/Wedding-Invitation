import "./assets/styles/index.scss"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import { browserDetectPlugin } from "@/plugins/browserDetect"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(browserDetectPlugin)

app.mount("#app")
