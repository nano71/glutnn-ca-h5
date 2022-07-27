<template>
  <n-result class="result" status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button style="border-radius: 0" @click="$router.back()">返回上级</n-button>
    </template>
  </n-result>
  <div class="html" v-html="style" v-if="$route.path === '/404'"></div>
</template>

<script>
export default {
  name: "error",
  data() {
    return {
      style: `<style> #topBar, .mask {opacity: 0;}</style>`
    }
  }
}
</script>

<style scoped>
.result {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

</style>
