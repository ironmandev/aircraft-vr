import { createApp } from 'vue'
import App from './App.vue'
import aframe from '@plugins/aframe'

const app = createApp(App)
app.use(aframe)
app.mount('#app')
