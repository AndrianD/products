import { defineStore } from 'pinia'
import { type User } from '@/types/User'

export const useUserStore = defineStore('user', {
  state: (): { current: User | null } => ({
    current: null // Initialisé à null car l'utilisateur n'est pas connecté au début
  }),
  actions: {
    // Action pour connecter le user et ajouter des infos
    setUser(user: User) {
      ;(user.address = {
        name: '629 Debbie Drive',
        city: 'Nashville',
        coordinates: {
          lat: 36.208114,
          lng: -86.58621199999999
        },
        postalCode: '37076',
        state: 'TN'
      }),
        (this.current = user)
    },

    // Action pour se connecter
    login(token: string) {
      localStorage.setItem('productToken', token)
      if (this.current) this.current.isAuthenticated = true
    },
    // Action pour déconnecter l'utilisateur
    logout() {
      if (this.current) this.current.isAuthenticated = false
      this.current = null
      localStorage.removeItem('productToken')
    }
  }
})
