<template>
    <div id="infoPanel">
        <div class="tabs">
            <div :class="{areaTitle:true,active:!active}" @click="switchShow(0)">
                通知<span class="word">NOTICE</span>
            </div>
            <div :class="{areaTitle:true,active}" @click="switchShow(1)">
                公告<span class="word">PUBLICITY</span>
            </div>
        </div>
        <div :class="{panel:true,notice:!active,publicity:active,animation}">
            <div id="notice">
                <div class="imageBox">
                    <img
                        @click="$router.push('/list/notice')"
                        src="https://nnfx.glut.edu.cn/jsj/mobile/notice.png"
                        alt="">
                </div>
                <div class="list">
                    <div class="item" v-for="(title,index) in notice.titles" @click="$router.push('/article/'+notice.ids[index]+'?category=notice')">
                        <div class="time" v-if="true">
                            <div class="day">
                                {{ notice.dates[index][0].trim() }}
                            </div>
                            <div class="month">
                                {{ notice.dates[index][1].trim() }}
                            </div>
                        </div>
                        <div class="right">
                            <div class="text">
                                {{ title }}
                            </div>
                        </div>

                    </div>
                    <div class="item more" @click="$router.push('/list/notice')">更多通知</div>

                </div>
            </div>
            <div id="publicity">
                <div class="imageBox">
                    <img
                        @click="$router.push('/list/notice')"
                        src="https://nnfx.glut.edu.cn/jsj/mobile/publicity.png"
                        alt="">
                </div>
                <div class="list">
                    <div class="item" v-for="(title,index) in publicity.titles" @click="$router.push('/article/'+publicity.ids[index]+'?category=notice')">
                        <div class="time" v-if="true">
                            <div class="day">
                                {{ publicity.dates[index][0].trim() }}
                            </div>
                            <div class="month">
                                {{ publicity.dates[index][1].trim() }}
                            </div>
                        </div>
                        <div class="right">
                            <div class="text">
                                {{ title }}
                            </div>
                        </div>

                    </div>
                    <div class="item more" @click="$router.push('/list/notice')">更多公告</div>
                </div>
            </div>
        </div>
        <img alt="" class="background" src="https://nnfx.glut.edu.cn/jsj/mobile/logo-2.png">
        <img alt="" class="background" src="https://nnfx.glut.edu.cn/jsj/mobile/welcome.png">
    </div>

</template>

<script>
export default {
    props: ["publicity", "notice"],
    name: "notice",
    data() {
        return {
            // notice: {
            //     titles: [
            //         "关于计算机应用系2021-2022年度系级团体优秀干事评选的通知",
            //         "关于2022届计算机应用系本科毕业论文校级答辩的通知",
            //         "关于桂林理工大学南宁分校计算机应用系 2022 届本科毕业论文答辩的通知",
            //         "关于开展“我们有信仰-奋进新青年，建功新时代”艺术创作比赛的通知",
            //         "计算机应用系关于举办第八届中国国际“互联网+”大学生创新创业大赛系部初赛的通知",
            //         "关于开展计算机应用系2021年度教职工考核工作的通知"
            //     ]
            // },
            // publicity: {
            //     titles: [
            //         "关于计算机应用系2022年4月及5月学生综合素质测评加减分内容公示"
            //     ]
            // },
            active: 0,
            animation: false,
            canActive: true
        }
    },
    methods: {
        switchShow(i) {
            if (this.canActive) {
                this.active = i
                this.canActive = false
                this.animation = true
                setTimeout(_ => {
                    this.animation = false
                    this.canActive = true
                }, 1000)
            }

        }
    }
}
</script>

<style scoped lang="less">
@import "../../styles/index/notice&publicity.less";
</style>
