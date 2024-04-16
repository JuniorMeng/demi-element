import Button from './Button/index.ts'
const componentsV3 = [
  Button
]

const install = function (Vue:any) {
  componentsV3.forEach(component => {
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
