<template>
  <component
    :is="tag"
    class="ds-btn"
    :class="[
      `ds-btn--${type}`,
      `ds-btn--${size}`,
      { 'ds-btn--disabled': disabled, 'ds-btn--full': fullWidth }
    ]"
    :disabled="tag === 'button' ? disabled : undefined"
    v-bind="$attrs"
  >
    <span v-if="$slots.icon" class="ds-btn__icon"><slot name="icon" /></span>
    <span class="ds-btn__label"><slot /></span>
  </component>
</template>

<script setup>
defineProps({
  type:      { type: String,  default: 'primary' }, // primary | secondary | link
  size:      { type: String,  default: 'md' },      // md | sm
  tag:       { type: String,  default: 'button' },
  disabled:  { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
})
</script>

<style scoped>
/* Figma exact :
   h 44px, px 14px, py 12px, Medium 14px UPPER
   border-radius: var(--shape-shape) = 4px/100px/0
   États via overlay ::after — UN SEUL brandTheme
*/
.ds-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  padding: 12px var(--font-size-md);  /* 12px 14px */
  min-width: 110px;
  border-radius: var(--shape-shape);
  font-family: var(--font-family-title);
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: var(--font-line-height-md);
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  transition: border-color var(--transition-fast);
}

/* Overlay état — positionné par ::after */
.ds-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: transparent;
  pointer-events: none;
  transition: background var(--transition-fast);
}

/* ── Primary ── */
.ds-btn--primary {
  background-color: var(--brandTheme);
  color: var(--text-buttons-primary);
  border-color: var(--brandTheme);
}
.ds-btn--primary:hover:not(.ds-btn--disabled)::after {
  background: var(--overlay-brand-hover);        /* blanc 20% */
}
.ds-btn--primary.ds-btn--disabled::after {
  background: var(--overlay-brand-disabled-hv);  /* blanc 92% — Figma exact */
}
.ds-btn--primary.ds-btn--disabled { cursor: not-allowed; pointer-events: none; }

/* ── Secondary ── */
.ds-btn--secondary {
  background-color: transparent;
  color: var(--text-base-primary);
  border-color: var(--stroke-strong);
}
.ds-btn--secondary:hover:not(.ds-btn--disabled) {
  background-color: var(--brandTheme);
  border-color: var(--brandTheme);
  color: var(--text-buttons-primary);
}
.ds-btn--secondary:hover:not(.ds-btn--disabled)::after {
  background: var(--overlay-brand-hover);
}
.ds-btn--secondary.ds-btn--disabled {
  opacity: 0.38;
  cursor: not-allowed;
  pointer-events: none;
}

/* ── Link ── */
.ds-btn--link {
  background: none;
  border: none;
  color: var(--text-base-primary);
  min-width: 0;
  padding: 0;
  height: auto;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  text-transform: none;
}
.ds-btn--link:hover { text-decoration-color: currentColor; }
.ds-btn--link.ds-btn--disabled { opacity: 0.38; cursor: not-allowed; pointer-events: none; }

/* ── Taille sm ── */
.ds-btn--sm {
  height: 36px;
  font-size: var(--font-size-sm);
  padding: 8px var(--gap-sm);
  min-width: 80px;
}

/* ── Full width ── */
.ds-btn--full { width: 100%; }

.ds-btn__label, .ds-btn__icon {
  position: relative;
  z-index: 1;
}
.ds-btn__label {
  flex: 1 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
