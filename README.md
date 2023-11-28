# products

- Vue 3, Vite, Vitest, Typescript et Vuetify
- Les tests unitaires sont réalisés avec vue-test-utils et vitest
- J'ai également mis un peu de **BEM** dans le css, donc utilisation de node-sass && sass-loader
- Un "composable" `productDetails` pour récupérer un unique produit par exemple (on imagine qu'à différents endroits du site, on a besoin de récupérer un produit particulier... )

- J'ai pensé aussi à **l'accessibilité**, donc je l'ai intégré un peu partout dans les composants comme dans les pages. (on peux toujours pousser le délire un peu plus loin, avec plus de navigation au clavier et contraste de couleur sur le site par exemple mais bon, je suis resté basique ...)

- Je présente également les composants avec une approche **Atomic Design**

- Pour le store j'utilise **pinia** 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Workflow
1. On arrive sur la page d'accueil

1. On clique sur un prooduit et on arrive sur la page dédiée

1. On le rajoute au panier (en cliquant plusieurs fois ca augmente sa quantité)

1. On clique sur l'icone du panier pour voir le panier

1. On valide (là comme on est pas connecté, on est redirigé vers la login page)

1. On met n'importe quoi comme identifiant/mot de passe et on clique sur "Connecter"

1. On est directement redirigé sur la page de livraison

1. On confirme et là, on arrive sur la page de remerciement

---
## Useful links
[Pinia unit testing components](https://pinia.vuejs.org/cookbook/testing.html#Unit-testing-components)