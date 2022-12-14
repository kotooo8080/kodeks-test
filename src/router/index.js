import { createWebHistory, createRouter } from 'vue-router'

import MainPage from '../pages/MainPage.vue'

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
        meta: {
            layout: 'MainLayout'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router