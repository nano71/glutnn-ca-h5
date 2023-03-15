<template>
    <n-config-provider :date-locale="dateZhCN" :locale="zhCN">
        <welcome/>
        <top-bar/>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </n-config-provider>
</template>
<script setup>
import TopBar from "./components/nano71Navbar.vue";
import Welcome from "./components/index/welcome.vue";
import {dateZhCN, zhCN} from 'naive-ui'
</script>
<style lang="less">
@import "styles/global";
</style>
<style scoped>
#welcome + * {
    opacity: 0;
}

#welcome.end + * {
    opacity: 1;
}
</style>
