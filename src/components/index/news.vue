<template>
  <div id="news">
    <div class="areaTitle">
      <div class="box">
        <span class="text">新闻公告</span>
        <span class="small">NEWS</span>
      </div>
    </div>
    <n-carousel class="content" autoplay draggable>
      <n-carousel-item class="item" v-for="(url,index) in newsList.images" @click="$router.push('/article/1')">
        <img :src="url"
             alt="">
        <div class="tag">
          新闻动态 NEWS
        </div>
        <div class="title">
          {{ newsList.titles[index] }}
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
export default {
  name: "news",
  data() {
    return {
      newsList: {
        titles: [
          "南宁分校副校长苏欣率队到中国-泰国崇左产业园开展调研",
          "南宁分校副校长苏欣带队到南宁高新科技企业调研",
          "计算机应用系党总支召开全体党员大会选举产生新一届党总支委员会"
        ],
        images: [
          "http://jsj.glutnn.cn/uploads/admin/article_thumb/20220516/58321addc63cd6e492fea63a7b5e8512.jpg",
          "http://jsj.glutnn.cn/uploads/admin/article_thumb/20220426/100d488fd766b5b5b3652c303a18a5e3.jpg",
          "http://jsj.glutnn.cn/uploads/admin/article_thumb/20220425/317f3bc6f7fb8de699bda9909b59a9c3.jpg"
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../../styles/index/news.less";
</style>
