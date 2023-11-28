import { type Product } from '@/types/Product'
import { type CartState } from '@/types/Cart'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cartItems: []
  }),
  actions: {
    // Action pour ajouter un article au panier avec quantité
    addCartItem(productItem: Product): void {
      const existingItemIndex = this.cartItems.findIndex(
        (cartItem) => cartItem.productItem && cartItem.productItem.id === productItem.id
      )
      if (existingItemIndex !== -1) {
        // si l'article existe déjà dans le panier, on incrémente simplement la quantité
        this.cartItems[existingItemIndex].quantity += 1
      } else {
        // sinon on l'ajoute
        this.cartItems.push({ productItem, quantity: 1 })
      }
    },

    // Action pour supprimer un article du panier
    removeFromCart(item: Product): void {
      const index = this.cartItems.findIndex((cartItem) => cartItem.productItem.id === item.id)
      if (index !== -1) {
        const cartItem = this.cartItems[index]
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1
        } else {
          this.cartItems.splice(index, 1)
        }
      }
    },

    // Action pour vider complètement le panier
    clearCart(): void {
      this.cartItems = []
    }
  }
})
