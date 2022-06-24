<script>
export default {
  data() {
    return {
      show: false,
      searchMode: false,
      searchList: {
        names: ["图书资源", "国际交流", "继续教育", "人才招聘"],
        paths: []
      },
      linkList: {
        names: ["系简介", "新闻/公告", "人才培养", "师资队伍", "党群工作", "招生就业", "服务指南", "学生竞赛", "学校校历"]
      },
      host: "glutnn.cn"
    }
  }
}
</script>

<template>
  <div id="topBar" :class="show&&'show'">
    <div :class="{top:true,searchMode}">
      <div class="logo">
        <img src="../images/logo.png" alt="">
      </div>
      <div class="menu">
        <i class="ri-search-line" @click="!show&&(show=!show,searchMode=true)"></i>
        <div class="lineBox" @click="show=!show">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div :class="{menuList:true,searchMode}">
      <div class="search">
        <div class="input">
          <label for="searchInput">
            <i class="ri-search-line icon"></i>
            <input @focus="searchMode=true" :placeholder="`搜索 ${host}`" id="searchInput" type="text">
          </label>
        </div>
        <div class="cancel" @click="searchMode=false">
          取消
        </div>
      </div>
      <hr/>
      <div class="searchList list">
        <div class="tag">快速链接</div>
        <div class="item" v-for="item in searchList.names">{{ item }}</div>
      </div>
      <div class="list">
        <div class="item" v-for="item in linkList.names">{{ item }}</div>
      </div>
    </div>
  </div>
  <div class="placeholder-48"></div>
</template>

<style scoped lang="less">
@import "../../src/styles/topBar.less";
</style>
