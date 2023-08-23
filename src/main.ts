import { createApp } from 'vue'
import App from '@/App.vue'

import { setupRouter } from './router'
import { autoRegisterComponent, setupPlugin } from './plugins'
function bootstrap() {
	const app = createApp(App)
	autoRegisterComponent(app)
	setupRouter(app)
	setupPlugin(app)
	app.mount('#app')
}
bootstrap()