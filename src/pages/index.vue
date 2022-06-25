<template>
  <welcome :class="{end}"/>
  <div id="index">
    <top-bar @touchmove.stop.prevent="1"/>
    <carousel/>
    <news/>
    <notice/>
    <major/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      end: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.end = true
    }, 1000)
  }
}
</script>
<script setup>
import TopBar from "../components/topBar.vue";
import Carousel from "../components/index/carousel.vue";
import News from "../components/index/news.vue";
import Notice from "../components/index/notice&publicity.vue";
import Welcome from "../components/index/welcome.vue";
import Major from "../components/index/major.vue";
</script>

<style scoped>

</style>
