import { createApp } from 'vue'
import HeadingComponent from '@/components/atoms/HeadingComponent.vue'

describe('HeadingComponent behaviour', () => {
  it('HeadingComponent rend correctement avec un niveau de titre donné', () => {
    const level = '2' // Initialisation du level
    const app = createApp(HeadingComponent, {
      level
    })

    // on monte le composant
    const div = document.createElement('div')
    document.body.appendChild(div)
    app.mount(div)

    // assertions sur le DOM
    expect(div.querySelector(`.text-h${level}`)).not.toBeNull()

    // nettoyage après le test
    app.unmount()
    document.body.removeChild(div)
  })
})
