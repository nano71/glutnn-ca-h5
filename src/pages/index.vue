<template>
  <div id="index">
    <carousel/>
    <div class="placeholder-240"></div>
    <div id="main">
      <news/>
      <notice/>
      <major/>
      <group-study-party-build/>
      <service/>
      <topic/>
    </div>
    <nano71/>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("setNavbarTopMode", [true])
  }
}
</script>
<script setup>
import Nano71 from "../components/pageFooter.vue";
import Carousel from "../components/index/carousel.vue";
import News from "../components/index/news.vue";
import Notice from "../components/index/notice&publicity.vue";
import Major from "../components/index/major.vue";
import GroupStudyPartyBuild from "../components/index/groupStudy&PartyBuild.vue";
import Service from "../components/index/service.vue";
import Topic from "../components/index/topic.vue";
</script>
<style scoped>
#index {
  transition: .5s;
}

#main {
  background-color: #fff;
  position: relative;
}
</style>
