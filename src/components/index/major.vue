<template>
  <div id="major">
    <div class="areaTitle">
      <div class="left">
        <div class="small">MAJORS</div>
        <div class="text">专业介绍</div>
      </div>
    </div>
    <n-carousel
        class="content"
        slides-per-view="auto"
        centered-slides
        draggable
        :loop="false"
    >
      <n-carousel-item class="item" v-for="(url,index) in majors.images">
        <div class="type">本科 - 学制四年</div>
        <img :src="url" alt="">
        <div class="title">
          {{ majors.names[index] }}
        </div>
        <div class="mainCourse">
          <div class="tag">主要课程</div>
          <div class="item" v-for="item in majors.courses[index]">{{ item }}</div>
          <div class="item more">更多...</div>
        </div>
      </n-carousel-item>
      <template #dots="{ total, currentIndex, to }">
        <div class="custom-dots">
          <div
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
          />
        </div>
      </template>
    </n-carousel>
  </div>
</template>

<script>
export default {
  name: "major",
  data() {
    return {
      majors: {
        images: [
          "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/6964349/pexels-photo-6964349.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/6964349/pexels-photo-6964349.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/6964349/pexels-photo-6964349.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/6964349/pexels-photo-6964349.jpeg?auto=compress&cs=tinysrgb&w=1200",
          "https://images.pexels.com/photos/6964343/pexels-photo-6964343.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        types: ["本科 - 学制四年"],
        names: ["数据科学与大数据技术", "新媒体艺术", "大数据技术", "计算机网络技术", "网络营销与直播电商", "环境艺术设计", "数字媒体艺术设计", "计算机应用技术 - 广西高职高专优质专业", "计算机科学与技术"],
        courses: [
          ["数据库系统原理", "数据结构", "云计算技术与应用"],
          ["数据库系统原理", "数据结构", "云计算技术与应用"],
          ["数据库系统原理", "数据结构", "云计算技术与应用"],
          ["数据库系统原理", "数据结构", "云计算技术与应用"],
          ["数据库系统原理", "数据结构", "云计算技术与应用"],
          ["数据库系统原理", "数据结构", "云计算技术与应用"],
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../../styles/index/major.less";
</style>
