import Button from './Button/index'
const componentsV2 = [
  Button
]

const install = function (Vue:any) {
  componentsV2.forEach(component => {
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
