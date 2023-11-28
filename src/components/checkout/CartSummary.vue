<template>
  <v-container v-if="isCartNotEmpty">
    <HeadingComponent level="4"> Récapitulatif du Panier </HeadingComponent>
    <v-table>
      <thead>
        <tr>
          <th>Produit</th>

          <th>Désignation</th>

          <th class="text-center">Quantité</th>

          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ productItem }, index) in cartItems" :key="productItem.id">
          <td>
            <img
              class="py-2 cart-items-grid__image"
              :src="productItem.thumbnail"
              :aspect-ratio="1"
              :alt="productItem.brand"
            />
          </td>
          <td>{{ productItem.title }}</td>
          <td class="text-center">{{ cartItems[index].quantity }}</td>
          <td>{{ productItem.price }} €</td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="cart-items-grid__price">
              <p class="text-h6 text-right">Prix Total :</p>
            </div>
          </td>
          <td>{{ totalPrice }} €</td>
        </tr>
      </tbody>
    </v-table>
    <v-row>
      <v-col>
        <ButtonComponent @click="goToDeliveryInfo" color="blue-darken-4"
          >Continuer vers la livraison</ButtonComponent
        >
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <HomeRedirect
      iconText="Vous n'avez actuellement aucun produit dans votre panier"
      buttonText="Ajouter un produit"
    ></HomeRedirect>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '../atoms/ButtonComponent.vue'
import HeadingComponent from '../atoms/HeadingComponent.vue'
import HomeRedirect from '../molecules/HomeRedirect.vue'
import { useCartStore } from '@/stores/cartStore'

const { cartItems } = useCartStore()

const router = useRouter()

const isCartNotEmpty = computed(() => cartItems.length > 0)
// Prix total
const totalPrice = cartItems
  ? cartItems.reduce((total, cartItem) => total + cartItem.productItem.price * cartItem.quantity, 0)
  : 0

const goToDeliveryInfo = () => {
  if (router) {
    router.push({ name: 'DeliveryInfo' })
  } else {
    // Gére le cas où router est undefined (par exemple, lors de tests)
    console.error('Router is not defined. Unable to navigate to DeliveryInfo.')
  }
}
</script>

<style scoped lang="scss">
.cart-items-grid {
  &__image {
    width: 100px;
    height: auto;
  }
}
</style>
