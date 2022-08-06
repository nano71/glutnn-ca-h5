<template>
  <div class="placeholder-48"></div>
  <n-h2>搜索结果</n-h2>
  <nano71-footer2/>
</template>

<script>
export default {
  name: "search",
  created() {
    this.$store.commit("setNavbarTopMode", [false, false])
  },
}
</script>
<script setup>
import Nano71Footer2 from "../components/nano71Footer2.vue";
</script>
<style scoped>

</style>
