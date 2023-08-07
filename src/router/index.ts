import { createRouter, createWebHistory } from "vue-router"
import { App } from "vue"
import routes from "./routes"
import autoload_routes from '@/router/autoload'
const router = createRouter({
    history: createWebHistory(),
    routes: [...routes, ...autoload_routes]
})

export function setupRouter(app: App) {
    app.use(router)
}
export default router