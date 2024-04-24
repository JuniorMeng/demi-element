// const path = require('path')
// const fsExtra = require('fs-extra')
// const fs = require('fs')
// const { defineConfig, build } = require('vite')
// const vue = require('@vitejs/plugin-vue')
// const vueJsx = require('@vitejs/plugin-vue-jsx')


// const entryDir = path.resolve(__dirname, '../components')
// const outputDir = path.resolve(__dirname, '../../lib')


// const baseConfig = defineConfig({
//   configFile: false,
//   publicDir: false,
//   plugins: [vue(), vueJsx()]
// })

// const rollupOptions = {
//   external: ['vue', 'vue-router'],
//   output: {
//     globals: {
//       vue: 'Vue'
//     }
//   }
// }

// //全量构建
// const buildAll = async () => {
//   await build(defineConfig({
//     ...baseConfig,
//     build: {
//       rollupOptions,
//       lib: {
//         entry: path.resolve(entryDir, 'index.ts'),
//         name: 'index',
//         fileName: 'index',
//         formats: ['es', 'umd']
//       },
//       outDir: outputDir
//     }
//   }))
// }


// const buildSingle = async (name) => {
//   await build(defineConfig({
//     ...baseConfig,
//     build: {
//       rollupOptions,
//       lib: {
//         entry: path.resolve(entryDir, name),
//         name: 'index',
//         fileName: 'index',
//         formats: ['es', 'umd']
//       },
//       outDir: path.resolve(outputDir, name)
//     }
//   }))
// }

// // 生成组件的 package.json 文件
// const createPackageJson = (name) => {
//   const fileStr = `{
//   "name": "${name}",
//   "version": "0.0.0",
//   "main": "index.umd.js",
//   "module": "index.es.js",
//   "style": "style.css"
// }`

//   fsExtra.outputFile(
//     path.resolve(outputDir, `${name}/package.json`),
//     fileStr,
//     'utf-8'
//   )
// }


// const declareFileStr = `
// import { App } from 'vue';
// declare const _default: {
//   install(app: App): void
// }
// export default _default`;


// const createDeclare = (name) => {
//   fsExtra.outputFile(
//     path.resolve(outputDir, `${name}/index.d.ts`),
//     declareFileStr,
//     'utf-8'
//   )
// }




// const buildLib = async () => {
//   await buildAll()
//   // 获取组件名称组成的数组
//   const components = fs.readdirSync(entryDir).filter(name => {
//     const componentDir = path.resolve(entryDir, name)
//     const isDir = fs.lstatSync(componentDir).isDirectory()
//     return isDir && fs.readdirSync(componentDir).includes('index.ts')
//   })

//   fsExtra.outputFile(
//     path.resolve(outputDir, `index.d.ts`),
//     declareFileStr,
//     'utf-8'
//   )

  

//   // 循环一个一个组件构建
//   for (const name of components) {
//     // 构建单组件
//     await buildSingle(name)

//     // 生成组件的 package.json 文件
//     createPackageJson(name)

//     // 生成组件的 index.d.ts
//     createDeclare(name)
//   }
// }

// buildLib()


// import path from 'path'
// import fsExtra  from 'fs-extra'
// import fs from 'fs'
// import baseConfig from '../vue3-ui/vite.config'


import { defineConfig, build } from 'vite'
import { fileURLToPath } from 'url'
import { baseVue3Config } from './base-vue3-config.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import * as path from 'path'
import fs from 'fs'
import fsExtra from 'fs-extra'
// import { isVue2 } from 'vue-demi'

const outputName = 'index'
const entryDir = path.resolve(__dirname, '../../src/components-v3')
const outputDir = path.resolve(__dirname, '../../dist/v3')

const buildAllConfig = defineConfig({
  build: {
    outDir: outputDir,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(entryDir, 'index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: format => `${outputName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs', 'element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'vue': 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs':
            'VueCompositionAPI',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi', 'vue', 'vue2'],
  },
})


const buildAll = async () => {
  await build(defineConfig({
    ...baseVue3Config,
    ...buildAllConfig
  }))
}



const buildSingle = async (name) => {
  await build(defineConfig({
    ...baseVue3Config,
    build: {
      outDir: path.resolve(outputDir, name),
      emptyOutDir: false,
      lib: {
        entry: path.resolve(entryDir, name),
        formats: ['es', 'cjs', 'umd'],
        name: 'index',
        fileName: format => `${outputName}.${format}.js`,
      },
      rollupOptions: {
        external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs','element-plus'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            'vue': 'Vue',
            '@vue/composition-api/dist/vue-composition-api.mjs':
              'VueCompositionAPI',
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ['vue-demi', 'vue', 'vue2'],
    },
  }))
}

// 生成组件的 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css"
}`

  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}


const declareFileStr = `
import { App } from 'vue';
declare const _default: {
  install(app: App): void
}
export default _default`;


const createDeclare = (name) => {
  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/index.d.ts`),
    declareFileStr,
    'utf-8'
  )
}


const buildLib = async () => {
  await buildAll()


  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })


  // 循环一个一个组件构建
  for (const name of components) {
    //构建单组件
    await buildSingle(name)

    // 生成组件的 package.json 文件
    createPackageJson(name)

    // 生成组件的 index.d.ts
    createDeclare(name)
  }
}



buildLib()

