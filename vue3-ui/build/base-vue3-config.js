import * as path from 'path'
import { defineConfig } from 'vite'
import vue3 from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const baseVue3Config = defineConfig({
    plugins: [
        vue3(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        {
            name: 'vite:import-css',
            apply: 'build',
            enforce: 'post',
            renderChunk(code, chunk) {
                // 判断是不是组件入口js
                console.log('==================>',chunk.isEntry, chunk.type, chunk.fileName)
                // if(chunk.type==='chunk' && /\index.(js)$/i.test(chunk.fileName)){
                    return `import './style.css';\n${code}`
                // }
            },
        }
    ],
    resolve: {
        alias: {
            'element-plus': path.resolve(__dirname, '../node_modules/element-plus'),
            '@': path.resolve(__dirname, '../../src'),
            'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.runtime.esm-browser.js'),
            'vue-demi': path.resolve(__dirname, '../../node_modules/vue-demi/lib/v3/index.mjs')
        },
    }
  })
