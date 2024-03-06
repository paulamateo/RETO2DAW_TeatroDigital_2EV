import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BillboardView from '../views/BillboardView.vue'
import ProgrammingView from '../views/ProgrammingView.vue'
import ShowView from '../views/ShowView.vue'
import AdminPanelView from '../views/AdminPanelView.vue'

// import { ref } from 'vue'; 
// export const isLockActivated = ref(false);

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
      path: '/Shows/:showId',
      name: 'Show-details',
      component: ShowView,
      props: true
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
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router