<template>
  <v-app>
    <v-container>
      <TheNavbar />
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'

defineComponent({
  name: 'App',
  components: {
    TheNavbar
  }
})
</script>
