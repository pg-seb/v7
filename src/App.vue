<template>
  <div
    id="app"
    :data-theme="theme"
    :data-brand="brand"
    :data-button-shape="buttonShape"
  >
    <RouterView />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const theme       = ref('light')   // 'light' | 'dark'
const brand       = ref('pg-template') // 'pg-template' | 'formula1' | 'goo' | 'gpxp'
const buttonShape = ref('normal')  // 'normal' | 'pills' | 'sharp'

// Provide theme controls globally
provide('theme',       theme)
provide('brand',       brand)
provide('buttonShape', buttonShape)
provide('toggleTheme', () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
})
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
