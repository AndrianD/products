import { type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { type Redirections } from '@/types/Redirections'

export const checkAuthMiddleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const userStore = useUserStore()

  const isAuthenticated = userStore.current?.isAuthenticated

  // On mappe les cas de redirection
  const redirections: Redirections = {
    CartSummary: () => {
      // Autoriser l'accès au panier.
      next()
    },
    DeliveryInfo: () => {
      // accès à la page si connecté
      if (isAuthenticated && from.name === 'CartSummary') {
        next()
      } else {
        next({ name: 'Login' })
      }
    },
    ThankYou: () => {
      // Autoriser les users ayant effectué un achat avec succès
      if (isAuthenticated && from.name === 'DeliveryInfo') {
        next()
      } else {
        next({ name: 'Login' })
      }
    },
    Login: () => {
      // Autoriser l'accès à la page de login.
      next()
    }
  }

  if (to.name && redirections[to.name.toString()]) {
    redirections[to.name.toString()]()
  } else {
    next()
  }
}
