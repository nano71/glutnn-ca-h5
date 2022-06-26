<template>
  <welcome :class="{end}"/>
  <div id="index">
    <top-bar @touchmove.stop.prevent="1"/>
    <carousel/>
    <news/>
    <notice/>
    <major/>
    <group-study-party-build/>
    <service/>
    <topic/>
    <Footer/>
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

</style>
