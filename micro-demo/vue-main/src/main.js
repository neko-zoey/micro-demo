import { createApp } from 'vue'
import App from './App.vue';
import router from './router.ts';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const vue = createApp(App);
vue.use(router);
// @ts-ignore
vue.use(ElementPlus);
vue.mount('#app');
