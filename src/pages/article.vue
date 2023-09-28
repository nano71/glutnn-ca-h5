<template>
    <div class="placeholder-48"></div>
    <nano71-header v-if="$route.query.category" :english="english" :items="breadcrumbItems" :title="title"/>
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
            title: "",
            english: "",
            breadcrumbItems: [
                {
                    name: "",
                    href: "#/list/",
                },
                {
                    name: "正文",
                },
            ],
            article: {
                title: "",
                time: "",
                source: "",
                author: "",
                editor: "",
                auditor: "",
                content: `加载中...`,
            },
        };
    },
    created() {
        let category = this.$route.query.category;
        if (category) {
            this.title = common.categories[category].title;
            this.breadcrumbItems[0].name = this.title;
            this.breadcrumbItems[0].href += category;
            this.english = common.categories[category].eng;
        }
        this.$store.commit("setNavbarTopMode", [false, false]);
        this.getDetail(this.$route.params.id);
    },
    methods: {
        getDetail(id) {
            console.log(id);
            axios.get(`/proxy/html/Article/${id}.html`).then(r => {
                console.log("then");
                let document = common.htmlParser(r.data);
                document = document.querySelector(".info_page_content_body_text");
                let textInfo = document.querySelector("div").innerText.replaceAll(/\n|\s/g, "").replaceAll(":", ":  ").split("|");
                // console.log(textInfo);
                let endIndex = document.innerHTML.indexOf("<p");
                this.article.title = document.querySelector("h2").innerText;
                this.article.time = common.insertStr(textInfo[0], 10, " ");
                this.article.source = textInfo[1];
                this.article.author = textInfo[2];
                this.article.editor = textInfo[3];
                this.article.auditor = textInfo[4];
                this.article.content = document.innerHTML.substring(endIndex);
                // console.log(document.innerHTML);
            }).catch(reason => {
                console.log(reason);
                this.getList()
            })
        },
    },
};
</script>

<style scoped>

</style>
