<template>
  <n-pagination
      class="pagination"
      v-model:page="page"
      style="justify-content: space-between;margin-bottom: 40px;"
      :page-slot="7"
      @update:page="onChange"
      page-count="21"/>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  props: {},
  name: "nano71Pagination",
  setup() {
    return {
      page: ref(1)
    };
  },
  methods: {
    onChange(page) {
      this.$emit("onChange", page)
    }
  }
});
</script>

<style scoped>

</style>
