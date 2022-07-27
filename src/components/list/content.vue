<template>
  <div id="content">
    <div class="list" data-v-690e8cc4="">
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于计算机应用系2021-2022年度系级团体优秀干事评选的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于2022届计算机应用系本科毕业论文校级答辩的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于桂林理工大学南宁分校计算机应用系 2022
        届本科毕业论文答辩的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于开展“我们有信仰-奋进新青年，建功新时代”艺术创作比赛的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        计算机应用系关于举办第八届中国国际“互联网+”大学生创新创业大赛系部初赛的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于开展计算机应用系2021年度教职工考核工作的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于计算机应用系2021-2022年度系级团体优秀干事评选的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于2022届计算机应用系本科毕业论文校级答辩的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于桂林理工大学南宁分校计算机应用系 2022
        届本科毕业论文答辩的通知
      </div>
      <div class="item" data-v-690e8cc4="">
        <span class="time" data-v-690e8cc4="">[06-25]</span>
        关于开展“我们有信仰-奋进新青年，建功新时代”艺术创作比赛的通知
      </div>
    </div>
    <nano71-pagination @onChange="onChange"/>
    <div class="style" v-html="style"></div>
  </div>
</template>

<script>
import Nano71Pagination from "../nano71Pagination.vue";

export default {
  name: "content",
  components: {Nano71Pagination},
  data() {
    return {
      page: 2,
      list: [
        {
          time: "06-25",
          title: "关于开展计算机应用系2021年度教职工考核工作的通知",
          href: ""
        }
      ],
      style: `<style>.n-pagination-item{border-radius: 0 !important;}</style>  `
    }
  },
  methods: {
    onChange(page) {
      window.scrollTo(0, 0)
      console.log(page);
    }
  }

}
</script>

<style scoped lang="less">
@import "../../styles/list/content.less";
</style>
