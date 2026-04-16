<template>
  <div class="ds-accordion" :class="{ 'ds-accordion--open': isOpen }">
    <button class="ds-accordion__header" @click="toggle" :aria-expanded="isOpen">
      <span class="ds-accordion__title">{{ title }}</span>
      <span class="ds-accordion__icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    <div class="ds-accordion__body" v-show="isOpen">
      <div class="ds-accordion__content">
        <slot>{{ content }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title:       { type: String, required: true },
  content:     { type: String, default: '' },
  defaultOpen: { type: Boolean, default: false },
})

const isOpen = ref(props.defaultOpen)
const toggle = () => { isOpen.value = !isOpen.value }
</script>

<style scoped>
.ds-accordion {
  border-bottom: 1px solid var(--color-stroke);
}

.ds-accordion__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-family-body);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-align: left;
  gap: var(--gap-md);
}

.ds-accordion__title {
  flex: 1;
}

.ds-accordion__icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
  transition: transform var(--transition-fast);
}
.ds-accordion--open .ds-accordion__icon {
  transform: rotate(180deg);
}

.ds-accordion__body {
  overflow: hidden;
}

.ds-accordion__content {
  padding-bottom: var(--gap-md);
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: var(--line-height-2xl);
}
</style>
