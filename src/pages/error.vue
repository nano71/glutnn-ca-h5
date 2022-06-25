<template>
  <n-result class="result" status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button style="border-radius: 0">找点乐子吧</n-button>
    </template>
  </n-result>
</template>

<script>
export default {
  name: "error"
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
