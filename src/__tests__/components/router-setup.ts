import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import appRoutes from '@/router/index'

const routes: Array<RouteRecordRaw> = [...appRoutes.options.routes]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
