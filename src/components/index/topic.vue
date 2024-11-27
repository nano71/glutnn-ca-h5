<template>
    <div id="topic">
        <div class="areaTitle">
            <div class="text">
                专题网站
            </div>
            <div class="small">
                党史 | 学习 | 就业
            </div>
        </div>
        <div class="list">
            <div class="card" v-for="(url,index) in list.images" @click="to(list.urls[index])">
                <img :src="url" alt="">
                <div class="title" v-if="list.titles[index]">
                    {{ list.titles[index] }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";

const list = {
    images: [
        "https://nnfx.glut.edu.cn/jsj/img/202203240943424.jpg",
        "https://nnfx.glut.edu.cn/jsj/img/pexels-luis-gomes-166706-546819.jpg",
        "https://nnfx.glut.edu.cn/jsj/img/202203240945070.jpg",
        "https://nnfx.glut.edu.cn/jsj/img/2015060515183976.png"
    ],
    urls: ["http://jy.glutnn.cn", "/list/majors", "https://zsw.glutnn.cn/", "https://720yun.com/t/01fjO7kmza6?from=singlemessage&pano_id=3635792"],
    titles: ["就业信息", "专业介绍", "招生网", "校园全景VR"]
}
const router = useRouter()

function to(url) {
    if (url.startsWith("http")) {
        location.href = url;
    } else {
        router.push(url)
    }
}
</script>
<script>
export default {
    name: "topic"
}
</script>

<style scoped lang="less">
@import "../../styles/index/topic.less";
</style>
