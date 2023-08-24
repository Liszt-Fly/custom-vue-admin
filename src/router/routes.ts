import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: "/home",
        component: import("@/layouts/admin.vue")
    }
]
export default routes