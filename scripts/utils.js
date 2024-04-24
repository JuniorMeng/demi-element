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

function copyFileDir(OriginFilePath,CopyFilePath){
  fs.readdir(OriginFilePath,{withFileTypes:true},(err,files)=>{
    for(let file of files){
      if(!file.isDirectory()){
        //获取旧文件夹中要复制的文件
         const OriginFile = path.resolve(OriginFilePath,file.name)
         //获取新文件夹中复制的地方
         const CopyFile = path.resolve(CopyFilePath,file.name)
         //将文件从旧文件夹复制到新文件夹中
         fs.copyFileSync(OriginFile,CopyFile) 
       }else{//如果是文件夹就递归变量把最新的文件夹路径传过去
         const CopyDirPath = path.resolve(CopyFilePath,file.name)
         const OriginDirPath = path.resolve(OriginFilePath,file.name)
         fs.mkdir(CopyDirPath,(err)=>{
          console.log('=======',err)
         })
        //  OriginFilePath = OriginPath
        //  CopyFilePath = DirPath
         copyFileDir(OriginDirPath,CopyDirPath)
       }
    }
  })
}

function switchVersion(version, vue) {
  // copy('index.umd.js', version, vue)
  // copy('index.es.js', version, vue)
  // copy('index.cjs.js', version, vue)
  // copy('style.css', version, vue)
  const cpDir = path.resolve(dir, `v${version}`)
  const components = fs.readdirSync(cpDir).filter(name => {
    const componentDir = path.resolve(cpDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.d.ts')
  })
  for (const name of components) {
    let OriginFilePath = path.resolve(dir,`v${version}`)
    let CopyFilePath = path.resolve(dir)
    if(!fs.existsSync(CopyFilePath)){
      fs.mkdir(CopyFilePath,err=>{
        console.log(err)
      })
    }
    copyFileDir(OriginFilePath,CopyFilePath)
  }
}


export{
  loadModule,
  switchVersion
}
