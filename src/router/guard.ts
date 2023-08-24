import { store } from "@/utils"
import { RouteLocationNormalized, Router } from "vue-router"

class Guard {
    constructor(private router: Router) { }
    public run() {
        this.router.beforeEach((to, from) => {
            const token = store.get('token')?.token

            if (this.isLogin(to, token) === false) return { name: "login" }
            if (this.isGuest(to, token) === false) return from
        })
    }
    private isLogin(route: RouteLocationNormalized, token: string): boolean {
        return Boolean(!route.meta.auth || (route.meta.auth) && token)
    }
    private isGuest(route: RouteLocationNormalized, token: string): boolean {
        return Boolean(!route.meta.guest || (route.meta.guest) && token)
    }

}
export default (router: Router) => {
    new Guard(router).run()
}