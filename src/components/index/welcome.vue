<template>
  <div id="welcome">
    <div class="box">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
<!--    <div class="text" v-html="html">-->
<!--    </div>-->
    <img class="logo" src="../../images/logo-black.png" alt="">
    <img class="welcome" src="../../images/welcome.png" alt="">
  </div>
</template>

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
