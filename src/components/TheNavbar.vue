<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <!-- https://vuetifyjs.com/en/components/navigation-drawers/ -->
      <v-app-bar color="blue-darken-4" prominent>
        <v-toolbar-title>
          <router-link :to="{ name: 'Home' }" class="navbar--link"
            >Accueil</router-link
          ></v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-cart">
          <span v-if="cartItems.length && totalCartItemQuantity">
            <router-link :to="{ name: 'CartSummary' }">
              <v-badge color="error" :content="totalCartItemQuantity">
                <v-icon icon="mdi:mdi-cart" color="white"></v-icon>
              </v-badge>
            </router-link>
          </span>
          <span v-else>
            <v-icon icon="mdi:mdi-cart" color="white"></v-icon>
          </span>
        </v-btn>

        <AvatarComponent />
      </v-app-bar>

      <v-main style="height: 5px">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import AvatarComponent from './atoms/AvatarComponent.vue'

defineComponent({ name: 'TheNavbar' })

const cartStore = useCartStore()

const cartItems = cartStore.cartItems

// Calcul du nombre total d'articles en tenant compte de la quantité
const totalCartItemQuantity = computed(() => {
  return cartStore.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
})
// console.log('Total Cart Item Quantity:', totalCartItemQuantity);
</script>

<style scoped lang="scss">
.navbar {
  &--link {
    color: #fff;
    text-decoration: none;
  }
}
</style>
