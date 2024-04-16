import Button from './index.vue';

Button.install = (Vue:any)=>{
    Vue.component(Button.name, Button);
}

export default Button