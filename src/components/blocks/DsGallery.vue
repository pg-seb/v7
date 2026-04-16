<template>
  <div class="ds-gallery">
    <div class="ds-gallery__grid">
      <div
        v-for="i in count"
        :key="i"
        class="ds-gallery__item"
      >
        <DsImage :aspect-ratio="aspectRatio" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DsImage from '@/components/atoms/DsImage.vue'

defineProps({
  count:       { type: Number, default: 8 },
  columns:     { type: Number, default: 4 },
  aspectRatio: { type: String, default: '1/1' },
})
</script>

<style scoped>
.ds-gallery__grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  gap: 0;
}

.ds-gallery__item {
  overflow: hidden;
}
.ds-gallery__item:hover img {
  transform: scale(1.04);
}

@media (max-width: 768px) {
  .ds-gallery__grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
