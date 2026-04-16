<template>
  <div
    class="ds-image"
    :class="{ 'ds-image--has-border': border }"
    :style="sizeStyle"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="ds-image__img"
    />
    <!-- Placeholder: same checkerboard gray as Figma imagePlaceholder -->
    <div v-else class="ds-image__placeholder img-placeholder" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src:         { type: String,  default: null },
  alt:         { type: String,  default: '' },
  aspectRatio: { type: String,  default: null },
  height:      { type: [Number, String], default: null },
  border:      { type: Boolean, default: true }, // Figma imagePlaceholder has border by default
})

const sizeStyle = computed(() => {
  const s = {}
  if (props.aspectRatio) s.aspectRatio = props.aspectRatio
  if (props.height)      s.height = typeof props.height === 'number' ? props.height + 'px' : props.height
  return s
})
</script>

<style scoped>
.ds-image {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: block;
}
/* Border: 1px solid rgba(0,0,0,0.12) — from Figma "Image Block" */
.ds-image--has-border {
  border: 1px solid var(--primitive-black-12);
}
.ds-image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  max-width: none;
  pointer-events: none;
  display: block;
}
.ds-image__placeholder {
  width: 100%;
  height: 100%;
  min-height: 100px;
  position: absolute;
  inset: 0;
  /* Figma's imagePlaceholder uses a gray/white checkerboard pattern */
  background-image:
    linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  background-color: #f5f5f5;
}
</style>
