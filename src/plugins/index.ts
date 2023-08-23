import { App } from "vue"
import '@/styles/global.scss'
import { setupTailwindcss } from "./tailwindcss"

export function setupPlugin(app: App) {
	setupTailwindcss()
}

export function autoRegisterComponent(app: App) {
	const components = import.meta.glob("../components/form/*.vue", { eager: true })
	Object.entries(components).forEach(([key, component]: [string, any]) => {
		let name = key.split("/").pop()?.split(".")[0]!
		let comp = component.default
		app.component(name, comp)
	})
}