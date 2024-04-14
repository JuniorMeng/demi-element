import HelloWorld from './components-v3/HelloWorld.vue'

const TemplateComponent = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app: any) {
    app.component('TemplateComponent', HelloWorld)
  },
}

export default TemplateComponent
