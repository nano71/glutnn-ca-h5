<template>
  <div id="welcome" :class="{end}">
    <div class="box">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <!--    <div class="text" v-html="html">-->
    <!--    </div>-->
    <img :class="{logo:true,show:shows[0]}" src="../../images/logo-black.png" @load="start(0)" alt="">
    <img :class="{welcome:true,show:shows[1]}" src="../../images/welcome.png" @load="start(1)" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {
      end: false,
      initCount: 0,
      shows: [false, false]
    }
  },
  methods: {
    start() {
      this.initCount++
      if (this.initCount === 2) {
        setTimeout(() => {
          this.shows = [true, true]
          setTimeout(() => {
            this.end = true
          }, 1000)
        }, 500)
      }
    }
  }
}
</script>
<script setup>
const textList = [
  "先学习计算机科学及理论,接着形成自己编程的风格",
  "布尔值最好的一点是, 就算你错了, 也顶多错了一位而已"
]
const html = textList[Math.floor(Math.random() * textList.length)].replaceAll(",", "</br>")
</script>

<style scoped lang="less">
@import "../../styles/index/welcome.less";
</style>
