<template>
    <div id="pageFooter" style="padding: 20px">
        <!--    <img src="https://nano71.com/img/glutnn/welcome-white.png" alt="" class="text">-->
        <div class="contactDetails">
            地址: 崇左市扶绥县空港大道21号
            <br>
            电话: 0771-5075511 或 0771-2204399
            <br>
            邮箱: nnfxjsj@163.com
        </div>
        <div class="siteInfo">
            <div class="copyright">
                桂ICP备2021003184号-2
                <br>
                Copyright © 2021 - 2022 nano71. All Rights Reserved.
                <br>
                lightning Development team 版权所有
            </div>
        </div>
        <img src="https://nano71.com/img/glutnn/logo-2.png" alt="" class="backgroundLogo">
    </div>
</template>

<script>
export default {
    name: "nano71Footer2",
    data() {
        return {
            footerMenuList: [
                {
                    name: "联系方式",
                    list: [
                        "空港校区: 崇左市扶绥县空港大道21号",
                        "安吉校区: 南宁市安吉大道15号",
                        "办公室: 空港校区2教2202",
                        "电话: 0771-5075511 或 0771-2204399",
                        "系主任,书记信箱: nnfxjsj@163.com"
                    ],
                    hasHref: false,
                    active: true
                },
                {
                    name: "常用链接",
                    list: [
                        "招生网",
                        "学校校历",
                        "教务系统",
                        "桂林理工大学",
                        "桂林理工大学南宁分校",
                    ],
                    hasHref: true,
                    href: [
                        "http://zsw.glutnn.cn/",
                        "http://departs.glutnn.cn/jwglb/list.aspx?classid=2708",
                        "http://jw.glutnn.cn/",
                        "http://glut.edu.cn/",
                        "http://glutnn.cn/"
                    ],
                    active: false
                }
            ]
        }
    },

}
</script>

<style scoped lang="less">
@import "../styles/footer.less";
</style>
