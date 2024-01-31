import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import BillboardView from "../views/BillboardView.vue"
import ProgrammingView from "../views/ProgrammingView.vue"
import ShowView from "../views/ShowView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/shows',
            name: 'shows',
            component: BillboardView
        },
        {
            path: '/shows/:id',
            name: 'show-details',
            component: ShowView
        },
        {
            path: '/programming',
            name: 'programming',
            component: ProgrammingView
        }
    ]
})

export default router