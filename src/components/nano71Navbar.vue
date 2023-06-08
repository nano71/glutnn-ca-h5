<script>
export default {
    data() {
        return {
            show: false,
            searchMode: false,
            topMode: false,
            search: "",
            searchList: {
                names: ["图书资源", "国际交流", "继续教育", "人才招聘"],
                paths: ["//lib.glutnn.cn/", "//departs.glutnn.cn/gjlx/", "//departs.glutnn.cn/jxjyzx/", "//www.glutnn.cn/detail.aspx?articleid=7046"]
            },
            linkList: {
                names: ["系简介", "系部新闻", "通知公告", "师资队伍", "党群工作", "服务指南", "学生竞赛", "学校校历"],
                paths: ["/article/161", "/list/news", "/list/publicity", "/list/teachers", "/list/group", "/index#service", "/list/competition", "//departs.glutnn.cn/jwglb/list.aspx?classid=2708"]
            },
            host: "glutnn.cn",
            zIndex: null
        }
    },
    methods: {
        toSearch() {
            // this.$router.push("/search")
            window.open("https://www.baidu.com/s?wd=site:www.glutnn.cn%20" + this.search)
            this.searchMode = false
            // this.action()
        },
        to(path) {
            if (path.includes("http") || path.includes("//")) {
                window.open(path)
                this.searchMode = false
                return
            }
            this.$router.push(path)
            this.action()
            if (path.includes("#")) {
                let where = path.split("#")[1]
                setTimeout(() => {
                    let offset = document.querySelector(`#${(where)}`).offsetTop
                    window.scrollTo(0, offset + 120)
                }, 500)
            }
        },
        action() {
            this.show = !this.show
            if (!this.show) {
                this.zIndex = 13
                setTimeout(() => {
                    this.zIndex = null
                }, 500)
            }
            return true
        }
    },
    watch: {
        $route(to, from) {
            console.log(from.path)
            console.log(to.path)
            if (to.path === "/")
                this.$store.commit("setNavbarTopMode", [true])
        }
    }
}
</script>

<template>
    <div class="mask"></div>
    <div id="topBar" :class="{show}" :style="`z-index: ${zIndex};`">
        <div :class="{top:true,searchMode,topMode:$store.state.navbar.topMode}">
            <div class="logo" @click="$router.push('/')">
                <img class="lineMode" src="https://nano71.com/img/glutnn/logo-line.png" alt="">
                <img class="blackMode" src="https://nano71.com/img/glutnn/logo-black.png" alt="">
                <img class="whiteMode" src="https://nano71.com/img/glutnn/logo-white.png" alt="">
            </div>
            <div class="menu">
                <ri-search-line class="icon" @click="show||(searchMode=true)&&(show=!show)"/>
                <div class="lineBox" @click="action">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <div :class="{menuList:true,searchMode}">
            <div class="placeholder-48"/>
            <div class="search">
                <div class="input">
                    <label for="searchInput">
                        <ri-search-line class="icon"/>
                        <input
                            v-model="search"
                            @focus="searchMode=true"
                            :placeholder="`搜索 ${host}`"
                            id="searchInput"
                            type="text">
                    </label>
                </div>
                <div class="cancel" v-if="search.length" @click="toSearch">
                    搜索
                </div>
                <div class="cancel" v-else @click="searchMode=false">
                    取消
                </div>

            </div>
            <hr/>
            <div class="searchList list">
                <div class="tag">快速链接</div>
                <div class="item" v-for="(item,i) in searchList.names" @click="to(searchList.paths[i])">
                    {{ item }}
                </div>
            </div>
            <div class="list">
                <div class="item" v-for="(item,i) in linkList.names" @click="to(linkList.paths[i])">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
    <!--  <div class="placeholder-48"></div>-->
</template>

<style scoped lang="less">
@import "../../src/styles/topBar.less";
</style>
