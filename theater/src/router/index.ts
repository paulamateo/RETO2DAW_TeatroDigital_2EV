import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BillboardView from '../views/BillboardView.vue'
import ProgrammingView from '../views/ProgrammingView.vue'
import ShowView from '../views/ShowView.vue'
import AdminPanelView from '../views/AdminPanelView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Billboard',
      name: 'Billboard',
      component: BillboardView
    },
    {
      path: '/Shows/:id',
      name: 'Show-details',
      component: ShowView
    },
    {
      path: '/Programming',
      name: 'Programming',
      component: ProgrammingView
    },
    {
      path:'/Admin-Panel',
      name: 'Admin-Panel',
      component: AdminPanelView
    }
  ]
})

export default router