<template>
  <!--
    DsIcon — composant icône du DS V7
    Utilise les SVG inline via Vite's ?raw import
    Toutes les icônes utilisent fill="currentColor" — la couleur est héritée du parent CSS.

    Usage :
      <DsIcon name="search" />
      <DsIcon name="arrowRight" :size="24" color="var(--brandTheme)" />
      <DsIcon name="star" class="icon-brand" />  ← via CSS color

    Icônes disponibles (71) :
      360view, 3d, account, accountBalance, allZone, arrowDown, arrowLeft,
      arrowRight, arrowUp, bell, block, calendar, camera, card, cashless,
      catering, check, clock, close, cornerTop, coveredGs, download, drinks,
      edit, email, externalLink, faceSmile, filter, gift, globe, group,
      headphone, home, hourglass, idBadge, image, infoAlt, infoLetter,
      instalment, invalid, invoice, invoiceAlt, location, lock, lockAlt,
      logout, minus, mobile, more, pencilAlt, plus, reset, resize, right,
      screen, search, seat, seatAlt, seatNumerated, settings, share,
      shoppingCart, star, ticket, trash, tvScreen, unlink, user, warning,
      zoomIn, zoomOut
  -->
  <span
    class="ds-icon"
    :class="`ds-icon--${name}`"
    :style="{ width: size + 'px', height: size + 'px', color: color || undefined }"
    aria-hidden="true"
    v-html="svgContent"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name:  { type: String, required: true },
  size:  { type: Number, default: 16 },
  color: { type: String, default: '' },
})

// Import all SVGs as raw strings via Vite glob import
// Vite will bundle only the icons that are actually used after tree-shaking
const svgModules = import.meta.glob('@/assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const svgContent = computed(() => {
  const key = `/src/assets/icons/${props.name}.svg`
  const svg = svgModules[key]
  if (!svg) {
    console.warn(`[DsIcon] Icon "${props.name}" not found.`)
    return `<svg width="${props.size}" height="${props.size}" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`
  }
  // Inject size if different from default 16
  if (props.size !== 16) {
    return svg
      .replace(/width="[^"]*"/, `width="${props.size}"`)
      .replace(/height="[^"]*"/, `height="${props.size}"`)
  }
  return svg
})
</script>

<style scoped>
.ds-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* color inherited from parent — never hardcode here */
}

/* Remove any default SVG sizing inside */
.ds-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
