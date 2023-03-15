<template>


    <div id="content">
        <n-h2 id="title">
            {{ article.title }}
        </n-h2>
        <div class="time">
            <n-time locale="zhCN" :time="new Date(article.time)" time-zone="Asia/Shanghai" type="relative"/>
            发布&nbsp;
            {{ article.time }}
        </div>
        <div v-html="parseHTML()" style="margin-top: 20px;"></div>
        <div id="source">
            <div>供稿:&nbsp;{{ article.author }}</div>
            <div>编辑:&nbsp;{{ article.editor }}</div>
            <div>审核:&nbsp;{{ article.auditor }}</div>

        </div>
    </div>
</template>

<script>
import {dateZhCN} from "naive-ui";

export default {
    name: "content",
    data() {
        return {
            dateZhCN,
            article: {
                title: "计算机网络技术教研室组织开展“鲲鹏专业建设-平台课（GaussDB方向）”课程培训",
                time: "2022-06-25 11:00:00",
                source: "计算机网络技术教研室",
                author: "连家剑",
                editor: "黄剑波",
                auditor: "曾灿博",
                content: `<p style="text-indent: 2em; text-align: justify;"><span style="font-size: 18px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2022年6月13日-24日，由计算机应用系组织开办的“鲲鹏专业建设-平台课（GaussDB方向）”课程培训顺利进行。</span></p><p style="text-indent: 2em; text-align: justify;"><span style="font-size: 18px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">本次培训依托于“桂林理工大学南宁分校鲲鹏人才培养基地”建设项目，聘请了浙江华为通信技术有限公司的专业HCIE讲师进行授课。参加本次培训的人员有计算机网络技术专业2021级82名同学。课程主要教授的内容是华为高斯数据库的设计与管理，数据库的运维与调优，数据库的安全管理和高可用设计等理论知识。</span></p><p style="text-align: center; text-indent: 2em;"><span style="font-size: 18px; font-family: 微软雅黑, "><img src="http://jsj.glutnn.cn/ueditor/php/upload/image/20220628/1656385591661829.png" title="1656385591661829.png" alt="1656385591661829.png" width="600" height="400"></span></p><p style="text-indent: 2em; text-align: center;"><span style="font-size: 18px; font-family: 微软雅黑, "><img src="http://jsj.glutnn.cn/ueditor/php/upload/image/20220628/1656385727402727.png" title="1656385727402727.png" alt="1656385727402727.png" width="600" height="400"></span></p><p style="text-indent: 2em; text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">现场</span></p>`
            }
        }
    },
    methods: {
        parseHTML() {
            let style = `<style>#content img{width: 100%;height: auto}</style>`
            return style + this.article.content
                .replaceAll(/text-indent: 2em; text-align: center;|text-align: center; text-indent: 2em;/g, "text-align: center;font-size:14px;")
                .replace(/<(sp*?)[^>]*>.*?|<\/span>/g, '')
        }
    }
}
</script>

<style scoped lang="less">
@import "../../styles/article/content.less";
</style>
