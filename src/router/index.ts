// src/router/index.ts

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProductPage from '@/views/ProductPage.vue'
import CartSummary from '@/components/checkout/CartSummary.vue'
import DeliveryInfo from '@/components/checkout/DeliveryInfo.vue'
import ThankYou from '@/components/checkout/ThankYou.vue'
import NotFound from '@/views/NotFound.vue'
import LoginPage from '@/views/LoginPage.vue'
import { checkAuthMiddleware } from '@/middleware/checkAuth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/checkout',
    name: 'CartSummary',
    component: CartSummary // Page 1 : Récapitulatif du Panier
  },
  {
    path: '/checkout/delivery',
    name: 'DeliveryInfo',
    component: DeliveryInfo, // Page 2 : Informations de Livraison
    beforeEnter: checkAuthMiddleware
  },
  {
    path: '/checkout/thank-you',
    name: 'ThankYou',
    component: ThankYou, // Page 3 : Page de Remerciement
    beforeEnter: checkAuthMiddleware
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    beforeEnter: checkAuthMiddleware
  },
  // Route de redirection vers la page d'erreur 404
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // https://github.com/vitejs/vite/issues/1973#issuecomment-777253019
  routes
})

export default router
