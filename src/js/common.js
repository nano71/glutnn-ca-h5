export default {
    htmlParser(html) {
        let parser = new DOMParser();
        console.log(parser);
        return parser.parseFromString(html, "text/html");
    }, getHrefIds(element) {
        return element.href.split("/").pop().split(".")[0];
    }, dateParser(element) {
        let dates = element.querySelector(".date").innerText.split("-");
        return [dates.pop(), dates.pop()].reverse().join("-");
    }, insertStr(source, start, newStr) {
        return source.slice(0, start) + newStr + source.slice(start);
    }, categories: {
        news: {title: "新闻", eng: "News", url: "/news_lists.shtml", getAll: false, itemsXML: ".news_list_right"},
        notice: {title: "通知", eng: "Notice", url: "/event_lists.shtml", itemsXML: ".once"},
        publicity: {title: "公告", eng: "Publicity", url: "/event_lists.shtml", itemsXML: ".once"},
        file: {title: "文件下载", eng: "File download", url: "/jsj/service/download.shtml", itemsXML: ".once"},
        majors: {title: "专业介绍", eng: "Major introduction", url: "/jsj/talent/speciality.shtml", itemsXML: ".once"},
        party: {title: "党建动态", eng: "Party", url: "/jsj/party/partyinfo.shtml", itemsXML: ".once"},
        group: {title: "团学工作", eng: "Group", url: "/jsj/student/txgz.shtml", itemsXML: ".once"},
        service: {title: "服务指南", eng: "Service guide", itemsXML: ".once"},
        competition: {
            title: "学生竞赛",
            eng: "Student competition",
            url: "/jsj/competition/jsry.shtml",
            itemsXML: ".once",
        },
        teachers: {title: "师资队伍", eng: "Teaching team", itemsXML: ".once"},
        rules: {
            title: "规章制度",
            eng: "Rules and regulations",
            url: "/jsj/service/regulations.shtml",
            itemsXML: ".once"
        },
        do: {title: "办事流程", eng: "Do things", url: "/jsj/service/process.shtml", itemsXML: ".once"},
    },
};

