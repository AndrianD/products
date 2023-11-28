<template>
  <div :class="`text-h${props.level}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  level: {
    type: String,
    required: true
  }
})
</script>
