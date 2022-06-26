<template>
  <div id="topic">
    <div class="areaTitle">
      <div class="text">
        专题网站
      </div>
      <div class="small">
        党史 学习 就业
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
import people from "../../images/dangshi.people.com.cn.jpg"
import cloud from "../../images/cloud.jpg"

const list = {
  images: [
    "http://jsj.glutnn.cn/static/jsj/images/jy.glutnn.cn.jpg",
    people,
    cloud,
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
