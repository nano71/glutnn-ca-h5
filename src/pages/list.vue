<template>
  <div class="placeholder-48"></div>
  <nano71-header :english="titles[$route.params.id].eng"
                 :title="titles[$route.params.id].title"/>
  <content :list="list" :max="maxPage" @onChange="onChange"/>
  <nano71-footer2/>

</template>

<script setup>
import Nano71Header from "../components/nano71Header.vue";
import Content from "../components/list/content.vue";
import Nano71Footer2 from "../components/nano71Footer2.vue";
</script>
<script>
import axios from "axios";
import common from "../js/common";

export default {
  name: "list",
  created() {
    this.$store.commit("setNavbarTopMode", [false, false])
    console.log(this.$route.params.id);
    this.getList(1)
  },
  data() {
    return {
      list: [{}],
      maxPage: 1,
      titles: {
        news: {title: "新闻", eng: "News", url: "/proxy/news_lists.shtml?page=", getAll: false},
        notice: {title: "通知", eng: "Notice"},
        publicity: {title: "公告", eng: "Publicity"},
        file: {title: "文件下载", eng: "File download"},
        group: {title: "团学党建", eng: "Group"},
        service: {title: "服务指南", eng: "Service guide"},
        competition: {title: "学生竞赛", eng: "Student competition"},
        teachers: {title: "师资队伍", eng: "Teaching team"},
        rules: {title: "规章制度", eng: "Rules and regulations"},
        do: {title: "办事流程", eng: "Do things"}
      }
    }
  },
  methods: {
    onChange(page) {
      this.getList(page)
    },
    getList(page) {
      axios.get(this.titles[this.$route.params.id].url + page).then(result => {
        let document = common.htmlParser(result.data)
        let items = document.querySelectorAll(".news_list_right")
        this.list = []
        this.maxPage = document.querySelector("p.pageRemark b").innerHTML
        for (let item of items) {
          this.list.push({
            title: item.querySelector("a").innerHTML,
            time: item.querySelector("span").innerHTML.substring(3)
          })
        }
        console.log(this.list);
      })
    }
  }
}
</script>

