<template>
    <div id="index">
        <carousel :urls="banner.urls" :titles="banner.titles"/>
        <div class="placeholder-240"></div>
        <div id="main">
            <news :titles="news.titles" :pictures="news.pictures"/>
            <notice :notice="notice" :publicity="publicity"/>
            <major/>
            <group-study-party-build :group="group" :party="party"/>
            <service/>
            <topic/>
        </div>
        <nano71/>
    </div>
</template>
<script>
import axios from "axios";
import common from "../js/common";

let document
export default {
    data() {
        return {
            banner: {
                ids: [],
                urls: [],
                titles: []
            },
            news: {
                ids: [],
                titles: [],
                pictures: []
            },
            notice: {
                ids: [],
                titles: [],
                dates: []
            },
            publicity: {
                ids: [],
                titles: [],
                dates: []
            },
            group: {
                ids: [],
                titles: [],
                dates: []
            },
            party: {
                ids: [],
                titles: [],
                dates: []
            },
        }
    },
    created() {
        console.log("created");
        this.getHtmlResource()
    },
    methods: {
        getHtmlResource() {
            console.log("getHtmlResource");
            axios.get("/proxy").then(result => {
                document = common.htmlParser(result.data)
                this.parseBanner(document)
                this.parseNews(document)
                this.parseNoticeAndPublicity(document)
                this.parseGroupAndParty(document)
            })
        },
        parseGroupAndParty(document) {
            let plates = document.querySelectorAll("body > .info > div")
            let groups = plates[1].querySelectorAll("div > a")
            let partyBuilds = plates[0].querySelectorAll("div > a")

            for (let i = 0; i < groups.length; i++) {
                this.group.titles.push(groups[i].querySelector(".title span").innerText)
                this.group.dates.push(common.dateParser(groups[i]).split("-"))
                this.group.ids.push(common.getHrefIds(groups[i]))
                if (i >= 3) {
                    break
                }
            }
            for (let i = 0; i < partyBuilds.length; i++) {
                this.party.titles.push(partyBuilds[i].querySelector(".title span").innerText)
                this.party.dates.push(common.dateParser(partyBuilds[i]).split("-"))
                this.party.ids.push(common.getHrefIds(partyBuilds[i]))
                if (i >= 3) {
                    break
                }
            }
        },
        parseNoticeAndPublicity(document) {
            let plates = document.querySelectorAll("body > .notify > div")
            let notices = plates[0].querySelectorAll(".info_list_box a")
            let publicity = plates[1].querySelectorAll(".info_list_box a")
            for (let i = 0; i < notices.length; i++) {
                this.notice.titles.push(notices[i].querySelector(".title span").innerText)
                this.notice.dates.push(common.dateParser(notices[i]))
                this.notice.ids.push(common.getHrefIds(notices[i]))
            }
            for (let i = 0; i < publicity.length; i++) {
                this.publicity.titles.push(publicity[i].querySelector("span").innerText)
                this.publicity.dates.push(common.dateParser(publicity[i]))
                this.publicity.ids.push(common.getHrefIds(publicity[i]))
            }
            // console.log(this.notice);
        },
        parseNews(document) {
            let news = document.querySelectorAll(".news_left > a")
            for (let i = 0; i < news.length; i++) {
                this.news.pictures.push(news[i].querySelector("img").src.replace("/uploads/", "/proxy/uploads/"))
                this.news.titles.push(news[i].querySelector("p.title").innerText)
                this.news.ids.push(common.getHrefIds(news[i]))
            }
            // console.log(this.news);
        },
        parseBanner(document) {
            let bannerText = document.querySelector("script:not([src])").innerText
            this.banner.urls = bannerText.replace(/\w+ \w+.=|[\[\]\\);"'(\n]|url| /g, "").replaceAll("/uploads/", "/proxy/uploads/").split(",")
            console.log(this.banner);
        }
    }
}
</script>
<script setup>
import Nano71 from "../components/nano71Footer.vue";
import Carousel from "../components/index/carousel.vue";
import News from "../components/index/news.vue";
import Notice from "../components/index/notice&publicity.vue";
import Major from "../components/index/major.vue";
import GroupStudyPartyBuild from "../components/index/groupStudy&PartyBuild.vue";
import Service from "../components/index/service.vue";
import Topic from "../components/index/topic.vue";
</script>
<style scoped>
#index {
    transition: .5s;
    background: #646CFF
}

#main {
    background-color: #fff;
    position: relative;
}
</style>
