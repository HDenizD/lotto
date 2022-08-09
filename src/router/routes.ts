import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import EuroJackpot from '@/pages/EuroJackpot.vue'
import NoGameFound from '@/pages/NoGameFound.vue'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/games/eurojackpot',
    component: EuroJackpot,
  },
  {
    path: '/no-game-found',
    component: NoGameFound,
  },
]
