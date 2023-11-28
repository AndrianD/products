import { mount } from '@vue/test-utils'
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import vuetify from '../vuetify-setup'

describe('ButtonComponent', () => {
  const ariaLabel = 'My Button'
  const buttonText = 'Click me'
  const wrapper = mount(ButtonComponent, {
    props: {
      ariaLabel,
      buttonText
    },
    global: {
      plugins: [vuetify]
    }
  })

  it('renders a button with the given text and aria-label', () => {
    // wrapper.props() pour accéder aux props du composant rendu
    expect(wrapper.props().ariaLabel).toContain('My Button')
    expect(wrapper.props().buttonText).toContain('Click me')
  })
})
