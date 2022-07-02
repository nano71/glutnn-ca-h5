<template>
  <div class="placeholder-48"></div>
  <nano71-header/>
  <n-config-provider :date-locale="dateZhCN">
    <content/>
  </n-config-provider>
  <nano71Footer/>
</template>
<script setup>
import Nano71Footer from "../components/nano71Footer.vue";
import Nano71Header from "../components/article/nano71Header.vue";
import Content from "../components/article/content.vue";
import {dateZhCN} from 'naive-ui'

</script>
<script>

export default {
  name: "article",
  created() {
    this.$store.commit("setNavbarTopMode", [false, false])
  }
}
</script>

<style scoped>

</style>
