<template>
  <div id="panel">
    <div class="areaTitle">
      <div class="left">
        <div class="small">GROUP | PARTY</div>
        <div class="text">团学与党建</div>
      </div>
      <div class="more" @click="$router.push('/list/group')">
        更多内容
        <ri-arrow-right-s-line class="icon"/>
      </div>
    </div>
    <div class="card">
      <div class="title">团学工作</div>
      <div class="list">
        <div class="item" v-for="item in 2" @click="$router.push('/article/1')">
          <div class="time">
            <div class="month">
              05
            </div>
            /
            <div class="day">
              19
            </div>
          </div>
          <div class="right">
            <div class="text">
              {{ item }}好像过度动画容易引发不适一样，真正好的文案也应该是润物细无声的
            </div>
            <div class="view">
              查看详情<i class="ri-arrow-right-s-line"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="card">
      <div class="title">党群工作</div>
      <div class="list">
        <div class="item" v-for="item in 2" @click="$router.push('/article/1')">
          <div class="time">
            <div class="month">
              05
            </div>
            /
            <div class="day">
              19
            </div>
          </div>
          <div class="right">
            <div class="text">
              {{ item }}好像过度动画容易引发不适一样，真正好的文案也应该是润物细无声的
            </div>
            <div class="view">
              查看详情<i class="ri-arrow-right-s-line"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "groupStudy&PartyBuild"
}
</script>

<style scoped lang="less">
@import url("../../styles/index/groupStudy&PartyBuild.less");
</style>
