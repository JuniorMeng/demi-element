import { defineConfig } from 'vite'
import { baseVue3Config } from './build/base-vue3-config'

export const viteVue3Config = defineConfig({
  ...baseVue3Config,
  server: {
    port: 3000,
  }
})

export default viteVue3Config
