<template>
  <v-container>
    <v-row>
      <v-col>
        <v-icon icon="mdi:mdi-emoticon-sad" size="x-large"></v-icon>
        {{ props.iconText }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ButtonComponent :to="{ name: 'Home' }" color="blue-darken-4">{{
          props.buttonText
        }}</ButtonComponent>
      </v-col>
    </v-row>
    <div></div>
  </v-container>
</template>

<script setup lang="ts">
import ButtonComponent from '../atoms/ButtonComponent.vue'

const props = defineProps({
  iconText: String,
  buttonText: String
})
</script>
