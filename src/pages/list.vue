<template>
  <div class="placeholder-48"></div>
  <nano71-header :english="$route.params.id.toUpperCase()" :title="titles[$route.params.id]"/>
  <content/>
  <nano71-footer2/>

</template>

<script setup>
import Nano71Header from "../components/nano71Header.vue";
import Content from "../components/list/content.vue";
import Nano71Footer2 from "../components/nano71Footer2.vue";

</script>
<script>
export default {
  name: "list",
  created() {
    this.$store.commit("setNavbarTopMode", [false, false])
  },
  data() {
    return {
      titles: {
        news: "新闻",
        notice: "通知",
        file: "文件下载",
        group: "团学党建"
      }
    }
  }
}
</script>

<style scoped>

</style>
