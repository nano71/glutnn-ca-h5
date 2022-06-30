<template>
  <div class="placeholder-48"></div>
  <header/>
  <nano71/>
</template>
<script setup>
import Nano71 from "../components/pageFooter.vue";
import Header from "../components/article/header.vue";
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
