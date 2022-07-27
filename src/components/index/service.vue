<template>
  <div id="service">
    <img
        src="https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="" class="back">
    <div class="filter"></div>
    <div class="areaTitle">
      <div class="text">
        服务指南
      </div>
      <div class="small">
        文件下载与办事流程
      </div>
    </div>
    <div class="content">
      <div class="item" @click="$router.push(list.hrefs[index])" v-for="(url,index) in list.icons">
        <img :src="url" alt="">
        {{ list.names[index] }}
        <ri-arrow-right-s-line class="icon"/>
      </div>
    </div>
  </div>

</template>
<script setup>
import downloadIcon from "../../images/icon/download.png"
import regulationsIcon from "../../images/icon/regulations.png"
import guide from "../../images/icon/guide.png"

const list = {
  names: ["文件下载专区", "各项规章制度", "师生办事流程"],
  icons: [downloadIcon, regulationsIcon, guide],
  hrefs: ["/list/file", "#/", "#/"]
}
</script>
<script>
export default {
  name: "service"
}
</script>

<style scoped lang="less">
@import "../../styles/index/service.less";
</style>
