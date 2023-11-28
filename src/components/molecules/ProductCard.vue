<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img cover height="250" :src="product.thumbnail"></v-img>

    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ product.brand }}</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="product.rating"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-2">
          {{ product.rating }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">• {{ product.category }}</div>

      <div>{{ shortenDescription(product.description, 50) }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn color="blue-darken-4" variant="text">
        <router-link :to="`/product/${product.id}`" class="v-btn v-btn--router">
          {{ buttonText }}
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { type Product } from '@/types/Product'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  },
  buttonText: {
    type: String as PropType<string>,
    default: 'Voir détails'
  }
})

// Si la description est inférieur à maxLength on le garde tel quel et on rajoute les ...
// Sinon on tronque la description à maxLength, on la découpe en mots (pour éviter les mots coupés)
// Et on ajoute les ... à la fin
const shortenDescription = (description: string, maxLength: number) => {
  return description.length <= maxLength
    ? description
    : description.slice(0, maxLength).split(' ').slice(0, -1).join(' ') + '...'
}
</script>
