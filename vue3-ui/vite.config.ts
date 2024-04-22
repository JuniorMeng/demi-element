import * as path from 'path'
import { defineConfig } from 'vite'
import vue3 from '@vitejs/plugin-vue'
import { baseBuildConfig } from '../vite.base.config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export const viteVue3Config = defineConfig({
  plugins: [
    vue3(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'element-plus': path.resolve('./node_modules/element-plus'),
      '@': path.resolve(__dirname, '../src'),
      'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm-browser.js'),
      'vue-demi': path.resolve('../node_modules/vue-demi/lib/v3/index.mjs')
    },
  },
  ...baseBuildConfig,
})

export default viteVue3Config
