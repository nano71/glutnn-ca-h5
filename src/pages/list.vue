<template>
  <div class="placeholder-48"></div>
  <nano71-header :english="titles[$route.params.id].eng"
                 :title="titles[$route.params.id].title"/>
  <content/>
  <nano71-footer2/>

</template>

<script setup>
import Nano71Header from "../components/nano71Header.vue";
import Content from "../components/list/content.vue";
import Nano71Footer2 from "../components/nano71Footer2.vue";
</script>
<script>
export default {
  name: "list",
  created() {
    this.$store.commit("setNavbarTopMode", [false, false])
  },
  data() {
    return {
      titles: {
        news: {title: "新闻", eng: "News"},
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
  }
}
</script>

