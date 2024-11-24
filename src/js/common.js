export default {
    htmlParser(html) {
        let parser = new DOMParser();
        return parser.parseFromString(html, "text/html");
    },
    getHrefIds(element) {
        return element.href.split("info/").pop().split(".")[0].replace("/", "-");
    },
    dateParser(element, separator = "-") {
        let dates = element.querySelector(".date").innerText.split(separator);
        return [dates.pop(), dates.pop()].reverse().join("-");
    },
    insertStr(source, start, newStr) {
        return source.slice(0, start) + newStr + source.slice(start);
    },
    categories: {
        news: {title: "新闻动态", eng: "News", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1097", from: 0},
        notice: {title: "通知公告", eng: "Notice", url: "/jsj/list.jsp?a1101365t=11&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1063", from: 0},

        majors: {title: "专业介绍", eng: "Major introduction", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1065", from: 1},
        majors2: {title: "专业建设", eng: "Major build", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1066", from: 1},
        majors3: {title: "实习实训", eng: "Major introduction", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1067", from: 1},

        party: {title: "党建动态", eng: "Party", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1069", from: 2},
        party2: {title: "工会之家", eng: "Party", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1070", from: 2},

        teachers: {title: "师资队伍", eng: "Teaching team", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1072", from: 3},

        group: {title: "团学工作", eng: "Group", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1074", from: 4},
        group2: {title: "学生资助", eng: "Group", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1075", from: 4},
        group3: {title: "榜样引领", eng: "Group", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1076", from: 4},
        group4: {title: "校友天地", eng: "Group", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1077", from: 4},

        admissions: {title: "招生信息", eng: "Notice", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1088", from: 5},
        admissions2: {title: "就业信息", eng: "Notice", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1080", from: 5},
        admissions3: {title: "就业指导", eng: "Notice", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1081", from: 5},


        file: {title: "文件下载", eng: "File download", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1083", from: 6},
        rules: {title: "规章制度", eng: "Rules and regulations", url: "/jsj/list.jsp?a1101365t=2&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1084", from: 6},
        do: {title: "办事流程", eng: "Do things", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1085", from: 6},

        competition: {title: "竞赛通知", eng: "Student competition", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1087", from: 7},
        competition2: {title: "竞赛荣誉", eng: "Student competition", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1088", from: 7},


        search: {title: "文章搜索", eng: "Student competition", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1088"},


    }
};

