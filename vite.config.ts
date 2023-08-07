import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { alias } from './vite/alias'
import { parseEnv } from './vite/util'

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build"
  const env = parseEnv(loadEnv(mode, "."))

  return {
    plugins: [vue()],
    resolve: {
      alias
    }
  }
}