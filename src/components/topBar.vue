<script>
export default {
  data() {
    return {
      show: false,
      searchMode: false,
      searchList: {
        names: ["查找零售店", "配件", "AirPods", "AirTag", "AppleCare+ 服务计划"],
        paths: []
      }
    }
  }
}
</script>

<template>
  <div id="topBar" :class="show&&'show'">
    <div :class="{top:true,searchMode}">
      <div class="logo"></div>
      <div class="menu">
        <i class="ri-search-line" @click="show=!show,searchMode=true"></i>
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
            <img alt=""
                 class="icon"
                 src="https://www.apple.com.cn/ac/globalnav/7/zh_CN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_small.svg">
            <input @focus="searchMode=true" placeholder="搜索 apple.com.cn" id="searchInput" type="text">
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
        <div class="item">商店</div>
        <div class="item">Mac</div>
        <div class="item">iPad</div>
        <div class="item">iPhone</div>
        <div class="item">Watch</div>
        <div class="item">AirPods</div>
        <div class="item">家居</div>
        <div class="item">Apple</div>
        <div class="item">独家</div>
        <div class="item">配件</div>
        <div class="item">技术支持</div>
      </div>
    </div>
  </div>
  <div class="placeholder-48"></div>
</template>

<style scoped lang="less">
@import "../../src/styles/topBar.less";
</style>
