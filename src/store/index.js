import {createStore} from 'vuex'


// 创建一个新的 store 实例
export default createStore({
    state() {
        return {
            navbar: {
                topMode: false,
                canTopMode: false
            }
        }
    },
    mutations: {

        setNavbarTopMode(state, [boolean, can = true]) {
            state.navbar.topMode = boolean
            state.navbar.canTopMode = can

            this.commit("initNavbar")
        },
        initNavbar(state) {
            function onScroll() {
                if (state.navbar.canTopMode) {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    state.navbar.topMode !== scrollTop < 200 && (state.navbar.topMode = scrollTop < 200)
                }
            }

            window.addEventListener("scroll", onScroll)
        }
    }
})
