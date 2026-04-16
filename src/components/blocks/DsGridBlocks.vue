<template>
  <div class="ds-grid-blocks">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="ds-grid-blocks__row"
      :style="{ gridTemplateColumns: `repeat(${row.columns}, 1fr)` }"
    >
      <div
        v-for="(box, boxIndex) in row.items"
        :key="boxIndex"
        class="ds-grid-block-box"
        :class="{ 'ds-grid-block-box--empty': box.empty }"
      >
        <template v-if="!box.empty">
          <DsImage class="ds-grid-block-box__image" aspect-ratio="4/3" :src="box.imageSrc" />
          <div class="ds-grid-block-box__content">
            <p v-if="box.label" class="ds-grid-block-box__label">{{ box.label }}</p>
            <h4 class="ds-grid-block-box__title">{{ box.title }}</h4>
            <p v-if="box.desc" class="ds-grid-block-box__desc">{{ box.desc }}</p>
          </div>
        </template>
        <div v-else class="ds-grid-block-box__empty-state img-placeholder" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DsImage from '@/components/atoms/DsImage.vue'

defineProps({
  rows: {
    type: Array,
    // Each row: { columns: 2|3|4, items: [{ title, label, desc, imageSrc, empty }] }
    default: () => [
      {
        columns: 4,
        items: [
          { title: 'Item 1', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 2', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 3', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 4', label: 'Category', desc: 'Description text here.' },
        ]
      },
      {
        columns: 2,
        items: [
          { title: 'Item 5', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 6', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 7', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 8', label: 'Category', desc: 'Description text here.' },
        ]
      },
      {
        columns: 3,
        items: [
          { title: 'Item 9',  label: 'Category', desc: 'Description text here.' },
          { title: 'Item 10', label: 'Category', desc: 'Description text here.' },
          { title: 'Item 11', label: 'Category', desc: 'Description text here.' },
        ]
      },
    ]
  },
})
</script>

<style scoped>
.ds-grid-blocks {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  width: 100%;
}

.ds-grid-blocks__row {
  display: grid;
  gap: var(--gap-md);
}

.ds-grid-block-box {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-s);
  background-color: var(--color-surface-secondary);
  transition: transform var(--transition-base);
  cursor: pointer;
  min-height: 298px;
}
.ds-grid-block-box:hover { transform: translateY(-2px); }

.ds-grid-block-box__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.ds-grid-block-box__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--gap-md);
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: var(--primitive-white-100);
}

.ds-grid-block-box__label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.8;
  margin-bottom: var(--gap-xxs);
}
.ds-grid-block-box__title {
  font-family: var(--font-family-title);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-lg);
}
.ds-grid-block-box__desc {
  font-size: var(--font-size-sm);
  opacity: 0.8;
  margin-top: var(--gap-xxs);
}

.ds-grid-block-box--empty .ds-grid-block-box__empty-state {
  width: 100%;
  height: 100%;
  min-height: 298px;
}

@media (max-width: 768px) {
  .ds-grid-blocks__row { grid-template-columns: 1fr !important; }
}
</style>
