import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import CartSummary from '@/components/checkout/CartSummary.vue'
import { useCartStore } from '@/stores/cartStore'
import vuetify from '../vuetify-setup'
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import router from '../router-setup'

const wrapper = mount(CartSummary, {
  global: {
    plugins: [createTestingPinia(), router, vuetify]
  }
})

describe('CartSummary.vue', () => {
  // Crée une instance de Pinia avec un store de test
  const cartStore = useCartStore

  it('affiche un texte quand le panier est vide et le clic renvoie sur la Home', async () => {
    // Configure le store fictif avec des données de test
    cartStore.cartItems = []

    // Vérifie le contenu du composant
    expect(wrapper.text()).toContain("Vous n'avez actuellement aucun produit dans votre panier")
    expect(wrapper.text()).toContain('Ajouter un produit')

    // Test de la redirection
    const button = wrapper.findComponent(ButtonComponent)
    await button.trigger('click')

    // Attendre la prochaine navigation
    await router.isReady()

    // Redirection vers Home
    expect(router.currentRoute.value.name).toBe('Home')
  })

  it(
    "affiche le récapitulatif du panier lorsque le panier n'est pas vide et le clic redirige vers DeliveryInfo"
  ),
    async () => {
      cartStore.cartItems = [
        {
          productItem: { id: 1, title: 'Produit 1', price: 10, thumbnail: '/product1.jpg' },
          quantity: 2
        },
        {
          productItem: { id: 2, title: 'Produit 2', price: 15, thumbnail: '/product2.jpg' },
          quantity: 1
        }
      ]

      expect(wrapper.text()).toContain('Récapitulatif du Panier')
      expect(wrapper.text()).toContain('Produit 1')
      expect(wrapper.text()).toContain('Produit 2')
      expect(wrapper.text()).toContain('Prix Total : 35 €')

      // Déclenchelment du clic
      const button = wrapper.findComponent(ButtonComponent)
      await button.trigger('click')

      // Attendre la prochaine navigation
      await router.isReady()

      // Redirection vers DeliveryInfo
      expect(router.currentRoute.value.name).toBe('DeliveryInfo')
    }
})
