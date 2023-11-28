<template>
  <!-- On maximise l'utilisation des balises HTML5 ainsi que les propriétés "aria" pour l'accessibilité -->
  <div class="product-page">
    <section class="product-page__content mt-4" v-if="product">
      <v-row>
        <v-col>
          <HeadingComponent level="4">
            {{ product.title }}
          </HeadingComponent>
          <div class="product-page__details">
            <div class="product-page__description">
              <v-card-text>{{ product.description }}</v-card-text>
              <div class="product-page__price-and-button">
                <div class="product-page__price" aria-label="prix du produit">
                  <strong>{{ product.price }} €</strong>
                </div>
              </div>
              <v-card-actions>
                <!-- Ajout au panier -->
                <ButtonComponent
                  ariaLabel="ajouter le produit au panier"
                  @click="addToCart(product)"
                  class="text-none ms-4 text-white"
                  color="blue-darken-4"
                  rounded="5"
                  variant="flat"
                >
                  Ajouter au panier
                </ButtonComponent>
                <router-link to="/" class="v-btn v-btn--router">Retour à la liste</router-link>
              </v-card-actions>
            </div>
          </div>
        </v-col>
        <v-col>
          <v-carousel show-arrows="hover" cycle>
            <v-carousel-item
              v-for="(image, im) in product.images"
              :key="im"
              :src="image"
              :alt="product.category"
              :aria-label="product.brand"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
    <section v-else>
      <h1>Produit non trouvé ou inexistant ...</h1>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { type Product } from '@/types/Product'
import { useCartStore } from '@/stores/cartStore'
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import { useProductDetails } from '@/composables/productDetails'
import HeadingComponent from '@/components/atoms/HeadingComponent.vue'

const route = useRoute()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)
const cartStore = useCartStore()

// On charge le produit une fois que le composant est monté
onMounted(async () => {
  try {
    const { getProductById } = useProductDetails()
    const loadedProduct = await getProductById(productId)

    // On mets à jour la valeur de 'product' uniquement si les données sont chargées avec succès
    product.value = loadedProduct
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'API:", error)
  }
})

const addToCart = (productToAdd: Product | null) => {
  if (productToAdd) {
    cartStore.addCartItem(productToAdd)
    // console.log('Produit ajouté au panier:', productToAdd.title)
  }
}
</script>

<style scoped lang="scss">
// On utilise du BEM ici pour mieux repérer les éléments plus rapidement
.product-page {
  &__title {
  }

  &__details {
  }

  &__image {
  }

  &__description {
  }

  &__price-and-button {
    font-size: 24px;
    font-weight: 400;
    text-align: right;
  }
}
</style>
