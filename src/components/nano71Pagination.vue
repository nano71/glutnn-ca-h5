<template>
    <n-pagination
        class="pagination"
        v-model:page="page"
        style="justify-content: space-between;margin-bottom: 40px;"
        :page-slot="7"
        @update:page="onChange"
        :page-count="max"/>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
    props: ["max"],
    name: "nano71Pagination",
    daa() {
        return {
            page: 1
        };
    },
  created() {
    console.log(this.max);
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
