import { RouteRecordRaw } from "vue-router"
import { env } from '@/utils'
const layouts = import.meta.glob("../layouts/*.vue", { eager: true })
const views = import.meta.glob("../views/**/*.vue", { eager: true })


const layout_routes: RouteRecordRaw[] = []

function getChildrenRoutes(layout_route: RouteRecordRaw) {
	const routes: RouteRecordRaw[] = []
	Object.entries(views).forEach(([file, module]) => {
		//排除不是属于对应的layouts中的内容

		if (file.includes(`../views/${layout_route.name as unknown as string}`)) {
			const route = getRouteByModule(file, module as unknown as any)
			routes.push(route)
		}
	})
	return routes
}


function getRouteByModule(file: string, module: Record<string, any>): RouteRecordRaw {
	const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "")
	const route: RouteRecordRaw = {
		name,
		path: `/${name}`,
		component: module.default
	}

	return Object.assign(route, module.default?.route)
}
function getRoutes() {
	Object.entries(layouts).forEach(([file, module]) => {
		const route = getRouteByModule(file, module as unknown as any)
		route.children = getChildrenRoutes(route)
		layout_routes.push(route)
	})
	return layout_routes

}

const routes = env.VITE_ROUTE_AUTOLOAD === true ? getRoutes() : []
export default routes