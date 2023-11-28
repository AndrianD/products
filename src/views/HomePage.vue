<template>
  <!-- On maximise l'utilisation des balises HTML5 ainsi que les propriétés "aria" pour l'accessibilité -->
  <main>
    <header>
      <HeadingComponent level="4"> Liste des Produits </HeadingComponent>
    </header>
    <div v-if="noProducts" aria-live="polite">Aucun produit disponible.</div>
    <div v-else class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/molecules/ProductCard.vue'
import HeadingComponent from '@/components/atoms/HeadingComponent.vue'
import { type Product } from '@/types/Product'

const products = ref<Product[]>([]) // Initialisation products

// Propriété calculée pour vérifier s'il n'y a pas de produits
const noProducts = computed(() => products.value.length === 0)

// Effectuez la requête API
onMounted(async () => {
  try {
    const data = await fetch('https://dummyjson.com/products').then((response) => response.json())
    products.value = data.products
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'API:", error)
  }
})
</script>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
