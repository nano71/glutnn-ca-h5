<template>
    <div id="header">
        <n-h1 class="title">{{ title }} <span>{{ english }}</span></n-h1>
        <n-breadcrumb style="white-space: normal">
            <n-breadcrumb-item href="#/">首页</n-breadcrumb-item>
            <n-breadcrumb-item :href="item.href" v-for="item in items">{{ item.name || "列表" }}</n-breadcrumb-item>
        </n-breadcrumb>
    </div>
</template>
<script>
export default {
    name: "nano71Header",
    data() {
        return {}
    },
    props: {
        title: "",
        english: "",
        items: {
            type: Array,
            default: [{}]
        }
    }
}
</script>
<style scoped lang="less">
@import "../styles/header.less";
</style>
