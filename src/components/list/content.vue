<template>
    <n-spin v-if="load" :show="true" stroke="#646CFF"
            style="width: 100%;height: calc(100vh - 160px);">
        <template #description>
            加载中...
        </template>
    </n-spin>
    <div id="content" v-else>
        <div class="list">
            <div class="item" v-for="item in list" @click="$router.push('/article/'+item.id+'?category='+type)">
                <span class="time">{{ item.time }}</span>
                {{ item.title }}
            </div>
        </div>
        <nano71-pagination v-if="max>1" :page="page" :max="max" @onChange="onChange"/>
        <div class="style" v-html="style"></div>
    </div>
</template>

<script>
import Nano71Pagination from "../nano71Pagination.vue";

export default {
    name: "content",
    components: {Nano71Pagination},
    props: ["list", "max", "load", "page", "type"],
    data() {
        return {
            style: `<style>.n-pagination-item{border-radius: 0 !important;}.n-pagination-item--active{color: #646CFF !important;border-color: #646CFF !important}</style>  `,
        };
    },
    methods: {
        onChange(page) {
            window.scrollTo(0, 0);
            console.log(page);
            this.$emit("onChange", page);
        },
    },

};
</script>

<style scoped lang="less">
@import "../../styles/list/content.less";
</style>
