<template>
  <div class="ds-content-grid">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="ds-content-grid-item"
    >
      <div class="ds-content-grid-item__image">
        <DsImage :aspect-ratio="'16/9'" :src="item.imageSrc" />
      </div>
      <div class="ds-content-grid-item__body">
        <p v-if="item.label" class="ds-content-grid-item__label">{{ item.label }}</p>
        <h4 class="ds-content-grid-item__title">{{ item.title }}</h4>
        <p v-if="item.desc" class="ds-content-grid-item__desc">{{ item.desc }}</p>
        <a v-if="item.cta" href="#" class="ds-content-grid-item__link">{{ item.cta }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import DsImage from '@/components/atoms/DsImage.vue'

defineProps({
  items: {
    type: Array,
    default: () => [
      { label: 'News', title: 'Content item title one', desc: 'Short description for this content item.', cta: 'Read more' },
      { label: 'News', title: 'Content item title two', desc: 'Short description for this content item.', cta: 'Read more' },
      { label: 'News', title: 'Content item title three', desc: 'Short description for this content item.', cta: 'Read more' },
    ]
  }
})
</script>

<style scoped>
.ds-content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
}

.ds-content-grid-item {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  cursor: pointer;
}
.ds-content-grid-item:hover .ds-content-grid-item__title {
  color: var(--color-brand);
}

.ds-content-grid-item__image {
  overflow: hidden;
  border-radius: var(--radius-s);
}

.ds-content-grid-item__body {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxs);
  flex: 1;
}

.ds-content-grid-item__label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-brand);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.ds-content-grid-item__title {
  font-family: var(--font-family-title);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-lg);
  transition: color var(--transition-fast);
}
.ds-content-grid-item__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-xl);
}
.ds-content-grid-item__link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  margin-top: auto;
}

@media (max-width: 1024px) {
  .ds-content-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .ds-content-grid { grid-template-columns: 1fr; }
}
</style>
