import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import { setupRouter } from './router'
import { setupPlugin } from './plugins'
function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugin(app)
    app.mount('#app')
}
bootstrap()