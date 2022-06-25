<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
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
