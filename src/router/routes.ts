import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  // { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound },
]

