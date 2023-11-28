<template>
  <v-sheet class="pa-12" color="grey-lighten-3" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field class="mb-2" clearable :rules="[required]" label="Email"></v-text-field>

        <v-text-field
          clearable
          :rules="[required]"
          label="Mot de passe"
          type="password"
          placeholder="Entrez le mot de passe"
        ></v-text-field>

        <br />

        <ButtonComponent ariaLabel="Se connecter" type="submit">Se connecter</ButtonComponent>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

const form = ref(false)
const loading = ref(false)

const router = useRouter()

const login = () => {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR'
    })
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setUser(data)
      userStore.login(data.token)
      router.push({ name: 'Home' })
    })
    .catch((error) => {
      console.error('Erreur:', error)
    })
}

function onSubmit() {
  if (!form.value) return
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
  login()
}
function required(v: string) {
  return !!v || 'Champs requis'
}
</script>
