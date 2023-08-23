import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        component: import("@/layouts/admin.vue")
    }
]
export default routes