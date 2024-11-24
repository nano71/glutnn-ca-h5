<template>
    <img src="https://nnfx.glut.edu.cn/jsj/img/bar2.jpg" style="height: 200px;width: 100%;object-fit:cover" alt="">
    <nano71-header :english="categories[$route.params.category].eng"
                   :title="categories[$route.params.category].title"
                   :from="categories[$route.params.category].from"/>
    <content :list="list" :load="load" :page="page" :max="maxPage" :type="$route.params.category" @onChange="onChange"/>
    <nano71-footer2/>

</template>

<script setup>
import Nano71Header from "../components/nano71Header.vue";
import Content from "../components/list/content.vue";
import Nano71Footer2 from "../components/nano71Footer2.vue";
</script>
<script>
import axios from "axios";
import common from "../js/common";

export default {
    name: "list",
    created() {
        this.$store.commit("setNavbarTopMode", [false, false]);
        console.log(this.$route.params.category);
        this.getList(1);
    },
    data() {
        return {
            load: true,
            list: [],
            maxPage: 1,
            page: 1,
            categories: common.categories,
        };
    },
    watch: {
        '$route.params.category': function (to, from) {
            this.getList(1);
        }
    },
    methods: {
        onChange(page) {
            this.getList(page);
        },
        getList(page = 1) {
            console.log("getList");
            this.load = true;
            this.page = page;
            let item = this.categories[this.$route.params.category];
            axios.get(item.url + "&a1101365p=" + page).then(result => {
                let document = common.htmlParser(result.data);
                let items = document.querySelectorAll(".articleList > a");
                this.list = [];
                let pages = document.querySelectorAll("span.p_no a")
                const url = pages[pages.length - 1]?.href
                if (!url) {
                    this.maxPage = 1
                } else {
                    const params = new URLSearchParams(url.split('?')[1]);
                    this.maxPage = params.get("a1101365t");
                }

                for (let item of items) {
                    let date = [
                        item.querySelector(".day").innerText,
                        item.querySelector(".month").innerText
                    ]
                    console.log(date);
                    this.list.push({
                        title: item.querySelector(".title").innerText.replaceAll("\n", ""),
                        date,
                        id: common.getHrefIds(item, false),
                    })
                }
                this.load = false;
            }).catch(reason => {
                console.log(reason);
                // this.getList()
            })
        },
    },
};
</script>
