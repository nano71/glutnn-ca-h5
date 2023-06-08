<template>
    <div id="major">
        <div class="areaTitle">
            <div class="left">
                <div class="small">MAJORS</div>
                <div class="text">专业介绍</div>
            </div>
            <div class="more" @click="$router.push('/list/majors')">
                更多专业
                <ri-arrow-right-s-line class="icon"/>
            </div>
        </div>
        <n-carousel
            class="content"
            slides-per-view="auto"
            centered-slides
            draggable
            :loop="false"
        >
            <n-carousel-item class="item" v-for="(url,index) in majors.images"
                             @click="$router.push('/article/'+majors.ids[index]+'?category=majors')">
                <div class="type">{{ majors.types[index] }}</div>
                <img :src="url" alt="">
                <div class="title">
                    {{ majors.names[index] }}
                </div>
                <div class="mainCourse">
                    <div class="tag">主要课程</div>
                    <div class="item" v-for="item in majors.courses[index]">{{ item }}</div>
                    <div class="item more">更多...</div>
                </div>
            </n-carousel-item>
            <template #dots="{ total, currentIndex, to }">
                <div class="custom-dots">
                    <div
                        v-for="index of total"
                        :key="index"
                        :class="{ ['is-active']: currentIndex === index - 1 }"
                        @click="to(index - 1)"
                    />
                </div>
            </template>
        </n-carousel>
    </div>
</template>

<script>
export default {
    name: "major",
    data() {
        return {
            majors: {
                images: [
                    "https://nano71.com/img/glutnn/ds.jpg",
                    "https://nano71.com/img/glutnn/na.jpg",
                    "https://nano71.com/img/glutnn/ca.jpg",
                    "https://nano71.com/img/glutnn/bd.jpg",
                    "https://nano71.com/img/glutnn/cn.jpg",
                    "https://nano71.com/img/glutnn/nl.jpg"
                ],
                types: [
                    "本科 - 学制四年",
                    "本科 - 学制四年",
                    "专科 - 学制三年",
                    "专科 - 学制三年",
                    "专科 - 学制三年",
                    "专科 - 学制三年",
                ],
                names: ["数据科学与大数据技术", "新媒体艺术", "计算机应用技术", "大数据技术", "计算机网络技术", "网络营销与直播电商"],
                courses: [
                    ["云计算技术与应用", "大数据项目管理", "人工智能"],
                    ["新媒体广告设计", "短视频创作实践", "新媒体创新创业"],
                    ["SQL SERVER/ORACLE数据库", "面向对象程序设计", "JQUERY&EASYUI框架应用"],
                    ["大数据核心平台Hadoop应用", "分布式数据库HBase原理与应用", "大数据仓库Hive原理与应用"],
                    ["网络安全技术", "云计算与虚拟化技术", "Python程序设计等"],
                    ["营销型网站策划与搭建", "网络营销", "SEO搜索引擎优化"],
                ],
                ids: [
                    1134, 1135, 1014, 1013, 1137, 170,
                ],
            },
        };
    },
};
</script>

<style scoped lang="less">
@import "../../styles/index/major.less";
</style>
