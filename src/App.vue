<template>
  <welcome/>
  <top-bar ref="navbar"/>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>
<script setup>
import TopBar from "./components/nano71Navbar.vue";
import Welcome from "./components/index/welcome.vue";
</script>
<style lang="less">
@import "styles/global";
</style>
<style scoped>
#welcome + * {
  opacity: 0;
}

#welcome.end + * {
  opacity: 1;
}
</style>
