<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TopBar from "./components/topBar.vue";
</script>

<template>
  <top-bar/>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3 + Vite"/>
  <iframe src="https://staging-cn.vuejs.org"></iframe>
</template>

<style lang="less">
@import "styles/global";
@import "styles/theme";
@import 'remixicon/fonts/remixicon.css';

iframe {
  border: 0;
  height: 10000vh;
  width: 100vw;
}

</style>
