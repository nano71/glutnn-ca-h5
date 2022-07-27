<template>
  <div class="placeholder-48"></div>
  <nano71-header :title="title" :items="breadcrumbItems"/>
    <content/>
  <nano71-footer2/>
</template>
<script setup>
import Nano71Header from "../components/nano71Header.vue";
import Content from "../components/article/content.vue";
import Nano71Footer2 from "../components/nano71Footer2.vue";

</script>
<script>

export default {
  name: "article",
  data() {
    return {
      title: "新闻",
      breadcrumbItems: [
        {
          name: "新闻",
          href: "#/list/news"
        },
        {
          name: "正文"
        }
      ]
    }
  },
  created() {
    this.$store.commit("setNavbarTopMode", [false, false])
  }
}
</script>

<style scoped>

</style>
