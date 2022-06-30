// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import Index from "../pages/index.vue"
import Error from "../pages/error.vue"
import Article from "../pages/article.vue";

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/article",
        component: Article,
        children: [
            {
                path: '',
                redirect: '/404',
            },
            {
                path: ":id",
                component: Article,
            },
        ],
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
