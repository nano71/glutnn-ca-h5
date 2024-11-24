<template>
    <div id="index">
        <carousel :titles="banner.titles" :urls="banner.urls"/>
        <div class="placeholder-240"></div>
        <div id="main">
            <news :ids="news.ids" :dates="news.dates" :pictures="news.pictures" :titles="news.titles"/>
            <notice :notice="notice" :publicity="publicity"/>
            <!--            <major/>-->
            <group-study-party-build :group="group" :party="party"/>
            <!--            <service/>-->
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
                pictures: [],
                dates: []
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
        this.parseNoticeAndPublicity()
    },
    methods: {
        getHtmlResource() {
            console.log("getHtmlResource");
            axios.get("/jsj").then(result => {
                console.log("then");
                document = common.htmlParser(result.data)
                this.parseBanner(document)
                this.parseNews(document)

                this.parseGroupAndParty(document)
            }).catch(reason => {
                console.log(reason);
                // this.getList()
            })
        },
        parseGroupAndParty(document) {

            let groups = document.querySelectorAll(".party .flex a") // 团学
            let partyBuilds = document.querySelectorAll(".studentWork .list > a") // 党建
            for (let i = 0; i < 4; i++) {
                this.group.titles.push(groups[i].querySelector(".title").innerText)
                let date = groups[i].querySelector(".date").innerText
                // let date = groups[i].querySelector(".month")?.innerText || groups[i].querySelector(".date").innerText.split(" ")[0].slice(5)
                let dates = date.split("-")
                this.group.dates.push(dates)
                this.group.ids.push(common.getHrefIds(groups[i]))
            }
            console.log(this.group);
            for (let i = 0; i < 4; i++) {
                this.party.titles.push(partyBuilds[i].querySelector(".title").innerText)
                this.party.dates.push(partyBuilds[i].querySelector(".date").innerText.split("/"))
                // this.party.dates.push(common.dateParser(partyBuilds[i],"/").split("-"))
                this.party.ids.push(common.getHrefIds(partyBuilds[i]))
            }
        },
        parseNoticeAndPublicity() {
            let urls = [
                "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1063",
                "/jsj/list.jsp?a1101365t=11&a1101365p=2&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1063",
                "/jsj/list.jsp?a1101365t=11&a1101365p=3&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1063"
            ]
            urls.forEach((url, index) => {
                if (this.publicity.titles.length < 6 && this.notice.titles.length < 6)
                    axios.get(url).then(result => {
                        let document = common.htmlParser(result.data)
                        let notices = document.querySelectorAll(".articleList > a")
                        for (let i = 0; i < notices.length; i++) {
                            let title = notices[i].querySelector(".title").innerText
                            let description = notices[i].querySelector(".description").innerText
                            let id = common.getHrefIds(notices[i])
                            let date = [notices[i]
                                .querySelector(".day").innerText,notices[i]
                                .querySelector(".month").innerText,]
                            let key = "publicity"
                            if (!title.includes("公示")) {
                                if (!description.includes("公示期")) {
                                    key = "notice"
                                }
                            }
                            if (this[key].titles.length <= 5) {
                                this[key].titles.push(title)
                                this[key].dates.push(date)
                                this[key].ids.push(id)
                            }
                        }

                    })
            })

            // console.log(this.notice);
        },
        parseNews(document) {
            let news = document.querySelectorAll(".news .list > a")
            for (let i = 0; i < news.length; i++) {
                this.news.pictures.push(news[i].querySelector("img").src)
                this.news.titles.push(news[i].querySelector(".title").innerText.replace("\n", "").trim())
                this.news.ids.push(common.getHrefIds(news[i]))
                this.news.dates.push(common.dateParser(news[i]))
            }
            // console.log(this.news);
        },
        parseBanner(document) {
            let carouselImages = document.querySelectorAll(".carousel a img")
            carouselImages.forEach(image => {
                this.banner.urls.push(image.src)
            })
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
