<script setup>
import TopBar from "./components/topBar.vue";
const text = "tbb"
</script>

<template>
  <top-bar/>
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
