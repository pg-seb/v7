<template>
  <div class="ds-content-tab">
    <div class="ds-content-tab__tabs">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        class="ds-content-tab__tab"
        :class="{ 'ds-content-tab__tab--active': active === i }"
        @click="active = i"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="ds-content-tab__panel">
      <slot :active="active" :tab="tabs[active]">
        <p class="ds-content-tab__placeholder">{{ tabs[active]?.content || 'Content here' }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  tabs: {
    type: Array,
    default: () => [
      { label: 'Tab 1', content: 'Content for tab 1' },
      { label: 'Tab 2', content: 'Content for tab 2' },
      { label: 'Tab 3', content: 'Content for tab 3' },
    ]
  }
})
const active = ref(0)
</script>

<style scoped>
.ds-content-tab__tabs {
  display: flex;
  border-bottom: 1px solid var(--color-stroke);
  overflow-x: auto;
  scrollbar-width: none;
}
.ds-content-tab__tab {
  padding: 0 var(--gap-md);
  height: 52px;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  margin-bottom: -1px;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}
.ds-content-tab__tab:hover { color: var(--color-text-primary); }
.ds-content-tab__tab--active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-brand);
  font-weight: var(--font-weight-medium);
}
.ds-content-tab__panel { padding: var(--gap-md) 0; }
.ds-content-tab__placeholder {
  color: var(--color-text-secondary);
  font-size: var(--font-size-md);
}
</style>
