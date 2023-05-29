<template>
  <div id="content">
    <div class="list" >
      <div class="item" v-for="item in list">
        <span class="time">{{ item.time}}</span>
        {{ item.title}}
      </div>
    </div>
    <nano71-pagination :max="max" @onChange="onChange"/>
    <div class="style" v-html="style"></div>
  </div>
</template>

<script>
import Nano71Pagination from "../nano71Pagination.vue";

export default {
  name: "content",
  components: {Nano71Pagination},
  props: ["list","max"],
  data() {
    return {
      page: 2,
      style: `<style>.n-pagination-item{border-radius: 0 !important;}.n-pagination-item--active{color: #646CFF !important;border-color: #646CFF !important}</style>  `
    }
  },
  methods: {
    onChange(page) {
      window.scrollTo(0, 0)
      console.log(page);
      this.$emit("onChange", page)
    }
  }

}
</script>

<style scoped lang="less">
@import "../../styles/list/content.less";
</style>
