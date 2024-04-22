import Button from './Button/index.ts'
import GigaInput from './GigaInput/index.ts'
const componentsV3 = [
  Button,
  GigaInput
]

const install = function (Vue:any) {
  componentsV3.forEach(component => {
    Vue.component(component.name, component);
  })
}

export default {
  Button,
  GigaInput,
  install
}

export {
  Button,
  GigaInput,
  install
}
