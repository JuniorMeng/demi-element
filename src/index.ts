import Button from './components-v3/Button/index.ts'
const components = [
  Button
]

// if(isVue2){

// }

// const TemplateComponent = {
//   install(app: any) {
//     app.component('TemplateComponent', HelloWorld)
//   },
// }

const install = function (Vue:any) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

export default {
  Button,
  install
}

export {
  Button,
  install
}
