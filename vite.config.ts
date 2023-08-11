import { ConfigEnv, loadEnv } from 'vite'
import { alias } from './vite/alias'
import { setupPlugins } from './vite/plugins'
import { parseEnv } from './vite/util'


export default ({ command, mode }: ConfigEnv) => {
	const isBuild = command === "build"
	const env = parseEnv(loadEnv(mode, "."))

	return {
		resolve: {
			alias
		},
		plugins: setupPlugins(isBuild, env)
	}
}