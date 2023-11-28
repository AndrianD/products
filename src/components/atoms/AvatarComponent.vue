<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn variant="text" v-bind="props">
          <v-avatar @click="toggleMenu" color="white" size="small" class="v-btn__content">
            <v-icon v-if="!isAuthenticated" icon="mdi-account-circle" />
            <span v-else class="text-h6">{{ userInitials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item height="15">
          <ButtonComponent @click="login" v-if="!isAuthenticated">Login</ButtonComponent>
          <ButtonComponent @click="logout" v-else>Logout</ButtonComponent>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore' //
import { useRouter } from 'vue-router'
import ButtonComponent from './ButtonComponent.vue'

const router = useRouter()
const userStore = useUserStore()

const menuVisible = ref(false)

const isAuthenticated = computed(() => userStore.current?.isAuthenticated)

// Récupérer les initiales de l'utilisateur
const userInitials = computed(() => {
  const currentUser = userStore.current

  if (currentUser !== null && typeof currentUser !== 'undefined') {
    return currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0)
  } else {
    return false
  }
})

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}

const login = () => {
  router.push({ name: 'Login' })
}

const logout = () => {
  userStore.logout()
  router.push({ name: 'Home' })
}
</script>
