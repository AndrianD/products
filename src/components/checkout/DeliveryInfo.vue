<template>
  <v-container>
    <v-row>
      <v-col>
        <HeadingComponent level="4"> Bonjour {{ current?.username }} </HeadingComponent>
        <p>Nous sommes heureux de vous retrouver parmi nous!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>Voici un récapitulatif de votre achat:</p>

        <v-table theme="dark">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nom</th>
                <th class="text-left">Quantité</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ productItem }, n) in cartItems" :key="productItem.id">
                <td>{{ productItem.title }}</td>
                <td>{{ cartItems[n].quantity }}</td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>Vos colis seront livrés à l'adresse suivante:</p>
        <v-card>
          <v-row>
            <v-col>
              <p class="text-overline">
                {{ current?.address?.name }} <br />
                {{ current?.address?.city }} - {{ current?.address?.postalCode }} -
                {{ current?.address?.state }}
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>Si tout est bon pour vous, cliquer sur "Confirmer"</v-col>
    </v-row>
    <v-row>
      <v-col>
        <ButtonComponent
          ariaLabel="Confirmer le panier"
          @click="goToThanksPage()"
          color="blue-darken-4"
          >Confirmer</ButtonComponent
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
import ButtonComponent from '../atoms/ButtonComponent.vue'
import HeadingComponent from '../atoms/HeadingComponent.vue'

const router = useRouter()
const { current } = useUserStore()
const { cartItems } = useCartStore()

function goToThanksPage() {
  useCartStore().clearCart()
  router.push({ name: 'ThankYou' })
}
</script>
