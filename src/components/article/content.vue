<template>
    <div id="content">
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
        <div v-html="parseHTML()" style="margin-top: 20px;"></div>

    </div>
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
        }
    },
    data() {
        return {
            dateZhCN,
        }
    },
    methods: {
        parseHTML() {
            console.log(this.article);
            let style = `<style>#content img{width: 100%;height: auto}</style>`
            return style + this.article.content
                .replaceAll(/text-indent: 2em; text-align: center;|text-align: center; text-indent: 2em;/g, "text-align: center;font-size:14px;")
                .replace(/<(sp*?)[^>]*>.*?|<\/span>/g, '')
                .replaceAll("<p><br></p>", "")
                .replaceAll("<p></p>", "")
                .replaceAll("<img src=\"/", "<img src=\"/proxy/")
        }
    }
}
</script>

<style scoped lang="less">
@import "../../styles/article/content.less";
</style>
