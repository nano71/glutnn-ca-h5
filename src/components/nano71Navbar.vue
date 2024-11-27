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
            linkActiveIndex: -1,
            linkMap: [
                {
                    name: "学院概况",
                    list: [
                        "学院简介@/article/1057-1120?category=",
                        "组织架构@",
                        "现任领导@",
                        "联系我们@"
                    ]
                },
                {
                    name: "综合新闻",
                    list: [
                        "学院新闻@/list/news",
                        "通知公告@/list/notice",
                    ]
                },
                {
                    name: "人才培养",
                    list: [
                        "专业介绍@/list/majors",
                        "专业建设@/list/majors2",
                        "实习实训@/list/majors3",
                    ]
                },
                {
                    name: "党群工作",
                    list: [
                        "党建动态@/list/party",
                        "工会之家@/list/party2",
                    ]
                },
                {
                    name: "师资队伍",
                    list: [
                        "教学团队@/list/teachers",
                    ]
                },
                {
                    name: "学生园地",
                    list: [
                        "团学工作@/list/group",
                        "学生资助@/list/group2",
                        "榜样引领@/list/group3",
                        "校友天地@/list/group4",
                    ]
                },
                {
                    name: "招生就业",
                    list: [
                        "招生信息@/list/admissions",
                        "就业信息@/list/admissions2",
                        "就业指导@/list/admissions3",
                    ]
                },
                {
                    name: "服务指南",
                    list: [
                        "下载专区@/list/file",
                        "规章制度@/list/rules",
                        "办事流程@/list/do",
                    ]
                },
                {
                    name: "学生竞赛",
                    list: [
                        "竞赛通知@/list/competition",
                        "竞赛荣誉@/list/competition2",
                    ]
                }
            ],
            host: "nnfx.glut.edu.cn/jsj",
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
                <img alt="" class="lineMode" src="https://nnfx.glut.edu.cn/jsj/mobile/logo-line.png">
                <img alt="" class="blackMode" src="https://nnfx.glut.edu.cn/jsj/mobile/logo-black.png">
                <img alt="" class="whiteMode" src="https://nnfx.glut.edu.cn/jsj/mobile/logo-white.png">
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
                            :placeholder="`搜索内容`"
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
                <div class="item" @click="to('/')">
                    首页
                </div>
                <div :class="{item:1,active:linkActiveIndex===i}" v-for="(item,i) in linkMap">
                    <div class="menuTitle">
                        <div @click="to(item.list[0].split('@')[1])">
                            {{ item.name }}
                        </div>
                        <ri-add-line class="icon" @click="linkActiveIndex=i"/>
                        <ri-subtract-line class="icon" @click="linkActiveIndex=-1"/>
                    </div>
                    <div class="list2">
                        <div class="item" v-for="item2 in item.list" @click="to(item2.split('@')[1])">
                            {{ item2.split('@')[0] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  <div class="placeholder-48"></div>-->
</template>

<style scoped lang="less">
@import "../../src/styles/topBar.less";
</style>
