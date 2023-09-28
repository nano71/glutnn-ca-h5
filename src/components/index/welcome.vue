<template>
    <div id="welcome" :class="{end}">
        <div class="box">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
        <img :class="{logo:true,show:shows[0]}" alt="" src="https://nano71.com/img/glutnn/logo-black.png"
             @load="start(0)">
        <img :class="{welcome:true,show:shows[1]}" alt="" src="https://nano71.com/img/glutnn/welcome.png"
             @load="start(1)">
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
            this.initCount++
            if (this.initCount === 2) {
                setTimeout(() => {
                    this.shows = [true, true]
                    setTimeout(() => {
                        this.end = true
                    }, 1000)
                }, 500)
            }
        }
    }
}
</script>
<style scoped lang="less">
@import "../../styles/index/welcome.less";
</style>
