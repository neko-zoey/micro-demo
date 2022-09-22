import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';
import App from './App.vue';
import routes from './routes.ts';

export const history = createWebHistory(isInIcestark() ? getBasename() : '/');

let vue = null;

const runApp = (container) => {
  const router = createRouter({
    history,
    routes,
  });
  vue = createApp(App);
  vue.use(router);
  vue.mount(container);
};

if (!isInIcestark()) {
  runApp('#app');
}

export function mount({ container }) {
  runApp(container);
}

export function unmount() {
  if (vue) {
    vue.unmount();
  }
}
