<template>
  <div class="menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/vue-child">vue child</a></li>
    </ul>
  </div>
  <div class="content">
    <div id="container"></div>
    <router-view />
  </div>
</template>

<script>

import { registerMicroApps } from '@ice/stark/lib/apps';
import start from '@ice/stark/lib/start';
import { onMounted, ref } from 'vue';
  let loading = ref(false);
  let microAppsActive = ref(false);
    const container = document.getElementById('container');
    registerMicroApps([
      {
        name: 'vue-home',
        activePath: '/vue-child',
        title: 'vue 子应用',
        loadScriptMode: 'import',
        entry: 'http://localhost:8081',
        container,
      }
    ]);
    start({
      onLoadingApp: () => {
        loading.value = true;
      },
      onFinishLoading: () => {
        loading.value = false;
      }
    });
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  display: inline-block;
  width: 200px;
}

.content {
  display: inline-block;
  width: calc(100% - 200px);
}
</style>
