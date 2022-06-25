// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import Index from "../pages/index.vue"
import Error from "../pages/error.vue"

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: '/404',
        name: '404',
        component: Error
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
