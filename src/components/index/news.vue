<template>
  <div id="news">
    <div class="areaTitle">
      <div class="box">
        <span class="text">新闻公告</span>
        <span class="small">NEWS</span>
      </div>
    </div>
    <n-carousel class="content" autoplay draggable>
      <n-carousel-item class="item" v-for="(url,index) in pictures" @click="$router.push('/article/'+ids[index])">
        <img :src="url"
             alt="">
        <div class="tag">
          新闻动态 NEWS
        </div>
        <div class="title">
          {{ titles[index] }}
        </div>
      </n-carousel-item>
      <template #dots="{ total, currentIndex, to }">
        <div class="count">
          {{ currentIndex + 1 + " / " + total }}
          <div class="line"/>
          <div class="more" @click="$router.push('/list/news')">
            更多
          </div>
        </div>
        <div class="customDots">
          <div
              v-for="index of total"
              :key="index"
              :class="{ active: currentIndex === index - 1 }"
              @click="to(index - 1)"
          />
        </div>

      </template>
    </n-carousel>
  </div>
</template>

<script>
let document
export default {
  name: "news",
  props: ["titles", "ids", "pictures"],
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
@import "../../styles/index/news.less";
</style>
