import Vue from 'vue'
import GigauiV2 from '../src/components-v2/index.ts'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'


// Vue.use(ElementUI);

// console.warn('Vue version:', Vue.version)
Vue.config.productionTip = false
Vue.use(GigauiV2)


new Vue({ render: h => h(App) }).$mount('#app')
