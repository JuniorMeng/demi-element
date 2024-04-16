import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dir = path.resolve(__dirname, '..', 'dist')

function loadModule(name) {
  try {
    return require(name)
  }
  catch (error) {
    console.log(error)
  }
}

function copy(name, version, vue) {
  vue = vue || 'vue'
  const src = path.join(dir, `v${version}`, name)
  const dest = path.join(dir, name)
  try {
    let content = fs.readFileSync(src, 'utf-8')
    content = content.replace(/'vue'/g, `'${vue}'`)
    try {
      fs.unlinkSync(dest)
    }
    catch (error) {
      console.error(error);
    }
    fs.writeFileSync(dest, content, 'utf-8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File does not exists');
    } else {
      throw err;
    }
  }
}

function switchVersion(version, vue) {
  copy('index.umd.js', version, vue)
  copy('index.es.js', version, vue)
  copy('index.cjs.js', version, vue)
  copy('style.css', version, vue)
}

export{
  loadModule,
  switchVersion
}
