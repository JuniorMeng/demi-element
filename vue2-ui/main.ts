import Vue from 'vue'
import Gigaui from '../src/index'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'


// Vue.use(ElementUI);

// console.warn('Vue version:', Vue.version)
Vue.config.productionTip = false
Vue.use(Gigaui)


new Vue({ render: h => h(App) }).$mount('#app')
