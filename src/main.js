import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// const result = await sass.compileAsync(scssFilename);
import '../css/about.css'
//import '../css/layout.css'
import './assets/style.css'
import '@/assets/layout.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
