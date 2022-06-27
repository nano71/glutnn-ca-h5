<template>
  <welcome/>
  <div id="index">
    <top-bar @touchmove="1"/>
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
    <Footer/>
  </div>
</template>
<script setup>
import TopBar from "../components/topBar.vue";
import Footer from "../components/footer.vue";
import Carousel from "../components/index/carousel.vue";
import News from "../components/index/news.vue";
import Notice from "../components/index/notice&publicity.vue";
import Welcome from "../components/index/welcome.vue";
import Major from "../components/index/major.vue";
import GroupStudyPartyBuild from "../components/index/groupStudy&PartyBuild.vue";
import Service from "../components/index/service.vue";
import Topic from "../components/index/topic.vue";
</script>
<style scoped>
#index {
  opacity: 0;
  transition: .5s;
}

#main {
  background-color: #fff;
  position: relative;
}

#welcome.end + #index {
  opacity: 1;
}
</style>
