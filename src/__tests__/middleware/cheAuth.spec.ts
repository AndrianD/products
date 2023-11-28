import { createRouter, createMemoryHistory } from 'vue-router'
import { checkAuthMiddleware } from '@/middleware/checkAuth.ts'
import { useUserStore } from '@/stores/userStore'

vi.mock('@/stores/userStore', () => ({
  useUserStore: vi.fn(() => ({
    current: { isAuthenticated: true }
  }))
}))

const TestComponent = {
  template: '<div>Test Component</div>'
}

test.each`
  routeName         | routePath                | isAuthenticated | fromRoute         | expectedRedirect
  ${'CartSummary'}  | ${'/checkout'}           | ${true}         | ${'Home'}         | ${'CartSummary'}
  ${'DeliveryInfo'} | ${'/checkout/delivery'}  | ${true}         | ${'CartSummary'}  | ${'DeliveryInfo'}
  ${'ThankYou'}     | ${'/checkout/thank-you'} | ${true}         | ${'DeliveryInfo'} | ${'ThankYou'}
  ${'Login'}        | ${'/login'}              | ${true}         | ${'Home'}         | ${'Login'}
  ${'Login'}        | ${'/login'}              | ${false}        | ${'CartSummary'}  | ${'Login'}
`(
  'handles redirection for $routeName when isAuthenticated === $isAuthenticated',
  async ({ routeName, routePath, isAuthenticated, fromRoute, expectedRedirect }) => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: routePath,
          name: routeName,
          component: TestComponent
        }
      ]
    })

    // Mock la valeur de isAuthenticated selon le cas
    useUserStore.mockReturnValueOnce({ current: { isAuthenticated } })

    // Simulation de la redirection
    if (fromRoute) {
      await router.push({ name: routeName })
      await router.isReady()
    }

    router.beforeEach(checkAuthMiddleware)

    await router.isReady()

    // Execution des tests
    const currentRoute = router.currentRoute.value
    if (expectedRedirect) {
      expect(currentRoute.name).toBe(expectedRedirect)
    } else {
      expect(currentRoute.name).toBe(routeName)
    }
  }
)
