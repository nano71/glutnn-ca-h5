export default {
    htmlParser(html) {
        let parser = new DOMParser();
        console.log(parser);
        return parser.parseFromString(html, "text/html");
    },
    getHrefIds(element) {
        return element.href.split("/").pop().split(".")[0]
    },
    dateParser(element) {
        let dates = element.querySelector(".date").innerText.split("-")
        return [dates.pop(), dates.pop()].reverse().join("-")
    }
}
