<template>
    <n-pagination
            class="pagination"
            style="justify-content: space-between;margin-bottom: 40px;"
            :page-slot="7"
            @update:page="onChange"
            :page-count="max"/>
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
