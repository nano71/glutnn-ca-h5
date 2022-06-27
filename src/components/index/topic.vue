<template>
  <div id="topic">
    <div class="areaTitle">
      <div class="text">
        专题网站
      </div>
      <div class="small">
        党史 | 学习 | 就业
      </div>
    </div>
    <div class="list">
      <div class="card" v-for="(url,index) in list.images">
        <img :src="url" alt="">
        <div class="title" v-if="list.titles[index]">
          {{ list.titles[index] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const list = {
  images: [
    "http://jsj.glutnn.cn/static/jsj/images/jy.glutnn.cn.jpg",
    "https://nano71.com/img/glutnn/dangshi.people.com.cn.jpg",
    "https://nano71.com/img/glutnn/cloud.jpg"
  ],
  titles: ["", "", "校园全景VR"]
}
</script>
<script>
export default {
  name: "topic"
}
</script>

<style scoped lang="less">
@import "../../styles/index/topic.less";
</style>
