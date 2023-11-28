<template>
  <v-btn :aria-label="props.ariaLabel" v-bind="$attrs">
    <slot>{{ props.buttonText }}</slot>
  </v-btn>
</template>

<script setup lang="ts">
// Pas de logique complexe ici, on reste le plus générique possible
const props = defineProps({
  ariaLabel: String,
  buttonText: String
})
</script>
