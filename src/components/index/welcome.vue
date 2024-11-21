<template>
    <div id="welcome" :class="{end}">
        <div class="box">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
        <img :class="{welcome:true,show:shows[1]}" alt="" src="/src/images/welcome.png"
             @load="start()">
    </div>
</template>
<script>
export default {
    data() {
        return {
            end: false,
            initCount: 0,
            shows: [false, false]
        }
    },
    created() {

    },
    methods: {
        start() {
            setTimeout(() => {
                this.shows = [true, true]
                setTimeout(() => {
                    this.end = true
                }, 1000)
            }, 500)
        }
    }
}
</script>
<style scoped lang="less">
@import "../../styles/index/welcome.less";
</style>
