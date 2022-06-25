<script>
export default {
  data() {
    return {
      imageList: {
        urls: [
          "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        titles: [
          "计算机应用系以“开放 融合 创新 ”为办学理念",
          "以“培养实用型、技术型”的高素质应用型人才为目标",
          "面向全国招生，本专层次学历与学位教育",
          "2022 - nano71 dev-team"
        ]
      }
    }
  }
}
</script>
<template>
  <n-carousel draggable autoplay effect="fade" style="height: 240px">
    <img
        v-for="url in imageList.urls"
        class="carousel-img"
        :src="url"
        alt="">
    <template #dots="{ total, currentIndex, to }">
      <div class="titleArea">
        {{ imageList.titles[currentIndex] }}
      </div>
      <div class="placeholder-48"/>
      <ul class="custom-dots">
        <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>

</template>

<style scoped lang="less">
@import "../../styles/index/carousel.less";
</style>
