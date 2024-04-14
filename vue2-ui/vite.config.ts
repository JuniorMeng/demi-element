import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import { baseBuildConfig } from '../vite.base.config'
// import requireContext from "rollup-plugin-require-context"
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export const viteVue2Config = defineConfig({
  plugins: [vue2(), ScriptSetup({}), viteCommonjs()],
  server: {
    port: 2000,
  },
  resolve: {
    alias: {
      'vue': resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2/index.mjs'),
    },
  },
  ...baseBuildConfig,
})

export default viteVue2Config
