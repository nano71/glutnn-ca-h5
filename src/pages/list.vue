<template>
    <div class="placeholder-48"></div>
    <nano71-header :english="categories[$route.params.category].eng"
                   :title="categories[$route.params.category].title"/>
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
    methods: {
        onChange(page) {
            this.getList(page);
        },
        getList(page) {
            console.log("getList");
            this.load = true;
            this.page = page;
            let item = this.categories[this.$route.params.category];
            axios.get("/proxy" + item.url + "?page=" + page).then(result => {
                console.log("then");
                let document = common.htmlParser(result.data);
                let items = document.querySelectorAll(item.itemsXML);
                this.list = [];
                this.maxPage = document.querySelector("p.pageRemark b")?.innerHTML;
                for (let item of items) {
                    this.list.push({
                        title: item.querySelector("a").innerHTML,
                        time: item.querySelector("span").innerHTML.substring(3),
                        id: common.getHrefIds(item.querySelector("a")),
                    });
                }
                this.load = false;
                // console.log(this.list);
            }).catch(reason => {
                console.log(reason);
                this.getList()
            })
        },
    },
};
</script>

