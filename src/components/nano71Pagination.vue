<template>
    <n-pagination
        :page-count="max"
        :page-slot="7"
        class="pagination"
        style="justify-content: space-between;margin-bottom: 40px;"
        @update:page="onChange"/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    props: ["max"],
    name: "nano71Pagination",
    created() {
        console.log(this.max);
    },
    methods: {
        onChange(page) {
            this.$emit("onChange", page);
        },
    },
});
</script>

<style scoped>

</style>
