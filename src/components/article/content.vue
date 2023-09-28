<template>
    <div id="content" v-if="article.title">
        <n-h2 id="title">
            {{ article.title }}
        </n-h2>
        <div id="source">
            <div>{{ article.author }}</div>
            <div>{{ article.editor }}</div>
            <div>{{ article.auditor }}</div>
        </div>
        <div class="time">
            <!--            <n-time locale="zhCN" :time="new Date(article.time)" time-zone="Asia/Shanghai" type="relative"/>-->
            发布:
            {{ article.time }}
        </div>
        <div class="HTML" style="margin-top: 20px;" v-html="parseHTML()"></div>
    </div>
    <n-spin v-else :show="true" stroke="#646CFF"
            style="width: 100%;height: calc(100vh - 160px);">
        <template #description>
            加载中...
        </template>
    </n-spin>
</template>

<script>
import {dateZhCN} from "naive-ui";

export default {
    name: "content",
    props: {
        article: {
            title: "",
            time: "",
            source: "",
            author: "",
            editor: "",
            auditor: "",
            content: "",
        },
    },
    data() {
        return {
            dateZhCN,
        };
    },
    methods: {
        parseHTML() {
            console.log(this.article);
            let style = `<style>#content *{margin: 0}#content img,#content video{width: 100%;height: auto;display: block;background-color: #f8f8f8;}</style>`;
            style += this.article.content.replaceAll(/text-indent: 2em; text-align: center;|text-align: center; text-indent: 2em;/g, "text-align: center;font-size:14px;").replace(/<(sp*?)[^>]*>.*?|<\/span>/g, "").replaceAll("<p><br></p>", "").replaceAll("<p></p>", "").replaceAll("<img src=\"/", "<img src=\"/proxy/").replaceAll("&nbsp;", "").replaceAll("<br>", "").replaceAll("margin", "margn").replaceAll("font", "fon").replaceAll("color", "colo").replaceAll("padding", "paddin");
            // .replaceAll("style=\"", "styl=\"").replaceAll("styl=\"text-align: center;\"","style=\"text-align: center;\"");
            let smallImg = style.match(/<img.*?src="(.*?)(jsj.glutnn.cn\/static)(.*?)".*?\/?>/gi);
            console.log(smallImg);

            if (smallImg && smallImg.length) {
                for (const item of smallImg) {
                    let cache = item;
                    cache = cache.substring(0, cache.length - 1);
                    style = style.replace(item, cache + " style='width:16px'>");
                }
            }
            console.log(style);
            return style;
        },
    },
};
</script>

<style scoped lang="less">
@import "../../styles/article/content.less";
</style>
