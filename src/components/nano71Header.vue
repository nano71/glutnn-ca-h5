<template>
    <div id="header">
        <n-h1 class="title">
            {{ title }}
            <svg :class="{active:showMenus}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" @click="showMenus=!showMenus">
                <path
                    d="M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM13 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z"/>
            </svg>
        </n-h1>
        <div class="menus" v-if="showMenus">
            <div class="item" v-for="item in category" @click="showMenus=false,$router.push('/list/'+item.key)">
                {{ item.title }}
            </div>
        </div>
        <n-breadcrumb style="white-space: normal">
            <n-breadcrumb-item href="#/">首页</n-breadcrumb-item>
            <n-breadcrumb-item :href="item.href" v-for="item in items">{{ item.name || "列表" }}</n-breadcrumb-item>
        </n-breadcrumb>
    </div>
</template>
<script>
import common from "../js/common";

export default {
    name: "nano71Header",
    data() {
        return {
            cache: common.categories,
            category: [],
            showMenus: false,
        };
    },
    created() {
        this.updateCache()

    },
    methods:{
        updateCache(){
            for (let cacheKey in this.cache) {
                this.cache[cacheKey].key = cacheKey;
                this.category = Object.values(this.cache).filter(item => item.from === this.from)
            }
        }
    },
    watch: {
        from: function (to, from) {
            this.updateCache()
        }
    },
    props: {
        title: "",
        english: "",
        from: 0,
        items: {
            type: Array,
            default: [{}],
        },
    },
};
</script>
<style scoped lang="less">
@import "../styles/header.less";
</style>
