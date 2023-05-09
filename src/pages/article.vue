<template>
    <div class="placeholder-48"></div>
    <nano71-header :title="title" :items="breadcrumbItems"/>
    <content :article="article"/>
    <nano71-footer2/>
</template>
<script setup>
import Nano71Header from "../components/nano71Header.vue";
import Content from "../components/article/content.vue";
import Nano71Footer2 from "../components/nano71Footer2.vue";
</script>
<script>

import axios from "axios";
import common from "../js/common";

export default {
    name: "article",
    data() {
        return {
            title: "新闻",
            breadcrumbItems: [
                {
                    name: "新闻",
                    href: "#/list/news"
                },
                {
                    name: "正文"
                }
            ],
            article: {
                title: "",
                time: "",
                source: "",
                author: "",
                editor: "",
                auditor: "",
                content: `加载中...`
            }
        }
    },
    created() {
        this.$store.commit("setNavbarTopMode", [false, false])

        this.getDetail(this.$route.params["id"])
    },
    methods: {
        getDetail(id) {
            console.log(id);
            axios.get(`/proxy/html/Article/${id}.html`).then(r => {
                let document = common.htmlParser(r.data)
                document = document.querySelector(".info_page_content_body_text")
                let textInfo = document.querySelector("div").innerText.replaceAll(/\n|\s/g, "").replaceAll(":",":  ").split("|")
                console.log(textInfo);
                let endIndex = document.innerHTML.indexOf("<p")

                this.article.title = document.querySelector("h2").innerText
                this.article.time = common.insertStr(textInfo[0], 10, " ")
                this.article.source = textInfo[1]
                this.article.author = textInfo[2]
                this.article.editor = textInfo[3]
                this.article.auditor = textInfo[4]
                this.article.content = document.innerHTML.substring(endIndex)
                console.log(document.innerHTML);
            })
        }
    }
}
</script>

<style scoped>

</style>
