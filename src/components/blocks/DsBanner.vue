<template>
  <div class="ds-banner" :class="{ 'ds-banner--two-cols': twoColumns }">
    <div class="ds-banner__image">
      <DsImage :aspect-ratio="twoColumns ? '2/1' : '4/1'" />
    </div>
  </div>
</template>
<script setup>
import DsImage from '@/components/atoms/DsImage.vue'
defineProps({ twoColumns: { type: Boolean, default: false } })
</script>
<style scoped>
.ds-banner { width: 100%; overflow: hidden; border-radius: var(--radius-s); }
.ds-banner + .ds-banner { margin-top: var(--gap-md); }
</style>
