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
        news: {title: "新闻", eng: "News", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1097", getAll: false, itemsXML: ".news_list_right"},
        notice: {title: "通知", eng: "Notice", url: "/jsj/list.jsp?a1101365t=11&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1063", itemsXML: ".once"},
        publicity: {title: "公告", eng: "Publicity", url: "/jsj/list.jsp?a1101365t=11&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1063", itemsXML: ".once"},
        file: {title: "文件下载", eng: "File download", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1083", itemsXML: ".once"},
        majors: {title: "专业介绍", eng: "Major introduction", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1065", itemsXML: ".once"},
        party: {title: "党建动态", eng: "Party", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1069", itemsXML: ".once"},
        group: {title: "团学工作", eng: "Group", url: "/jsj/list.jsp?a1101365t=23&&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1074", itemsXML: ".once"},
        service: {title: "服务指南", eng: "Service guide", itemsXML: ".once"},
        competition: {
            title: "学生竞赛",
            eng: "Student competition",
            url: "/jsj/competition/jsry.shtml",
            itemsXML: ".once",
        },
        teachers: {
            title: "师资队伍",
            eng: "Teaching team",
            url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1072",
            itemsXML: ".once"
        },
        rules: {
            title: "规章制度",
            eng: "Rules and regulations",
            url: "/jsj/list.jsp?a1101365t=2&a1101365c=10&urltype=tree.TreeTempUrl&wbtreeid=1084",
            itemsXML: ".once"
        },
        do: {title: "办事流程", eng: "Do things", url: "/jsj/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1085", itemsXML: ".once"},
    }
};

