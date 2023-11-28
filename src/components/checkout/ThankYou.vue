<template>
  <v-container>
    <HeadingComponent level="4"> Félicitations pour votre achat ! </HeadingComponent>
    <v-row>
      <v-col>
        <p><v-icon icon="mdi:mdi-email-fast" color="blue-darken-4" class="text-h1"></v-icon></p>
        <p>
          Un email de confirmation a été envoyé à votre adresse:
          <span class="font-weight-bold">{{ current?.email }}</span>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ButtonComponent ariaLabel="Confirmer le panier" @click="goToHome()" color="blue-darken-4"
          >Continuer mes achats</ButtonComponent
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import ButtonComponent from '../atoms/ButtonComponent.vue'
import HeadingComponent from '../atoms/HeadingComponent.vue'

const { current } = useUserStore()

const router = useRouter()

function goToHome() {
  router.push({ name: 'Home' })
}
</script>
