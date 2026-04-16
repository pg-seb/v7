<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
      <li
        v-for="(step, i) in steps"
        :key="i"
        class="breadcrumb__item"
      >
        <!-- Link step: label + › separator -->
        <template v-if="i < steps.length - 1">
          <a :href="step.href || '#'" class="breadcrumb__link">{{ step.label }}</a>
          <span class="breadcrumb__sep" aria-hidden="true">›</span>
        </template>
        <!-- Current step: bold, no separator -->
        <span v-else class="breadcrumb__current" aria-current="page">{{ step.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  steps: { type: Array, required: true },
  // steps: [{ label: 'Home', href: '/' }, { label: 'Season 2024/25', href: '/season' }, { label: 'Event Title' }]
})
</script>

<style scoped>
/* Exact Figma values:
   - font: Inter (not Roboto! — from breadcrumbStep)
   - size link: 13px, weight Regular, color text/base/secondary (rgba(0,0,0,0.6))
   - size current: 13px, weight Medium, color text/base/primary
   - separator: 12px, same color as link
   - gap between items: 5px (--gap/xs)
   - list: flex, items-center, gap 5px
*/
.breadcrumb__list {
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
}

.breadcrumb__item {
  display: flex;
  align-items: center;
  gap: var(--gap-xs); /* 5px */
  font-family: 'Inter', sans-serif; /* breadcrumbStep uses Inter */
  font-style: normal;
  white-space: nowrap;
}

.breadcrumb__link {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-base-secondary); /* rgba(0,0,0,0.6) */
  line-height: normal;
  text-decoration: none;
}

.breadcrumb__sep {
  font-size: 12px;
  color: var(--text-base-secondary);
  line-height: normal;
  user-select: none;
}

.breadcrumb__current {
  font-size: 13px;
  font-weight: 500; /* Medium */
  color: var(--text-base-primary); /* rgba(0,0,0,0.87) */
  line-height: normal;
}
</style>
