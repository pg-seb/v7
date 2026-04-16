<template>
  <div class="page" data-theme="light">

    <!-- HEAD -->
    <div class="page__head">
      <DsTopBar />
      <DsHeader />
      <DsSlider
        type="minimalFilter"
        title="Title of Minimal Filter slider"
        :breadcrumb="[
          { label: 'Home',           href: '/' },
          { label: 'Season 2024/25', href: '/season' },
          { label: 'Event Title' },
        ]"
        :countdown="{ days: 32, hours: 3, minutes: 58, seconds: 48 }"
      />
    </div>

    <!-- CONTENT -->
    <main class="page__content">

      <DsBlockSlot
        :index="0"
        title="product block"
        :description="lorem"
        share-label="Share"
      >
        <DsProductList :categories="productListCategories" />
      </DsBlockSlot>

      <DsBlockSlot
        :index="1"
        title="subscription block"
        :description="lorem"
      >
        <DsSubscriptionBlock :items="subscriptionItems" />
      </DsBlockSlot>

      <DsBlockSlot
        :index="2"
        title="Product block (grid)"
        :description="lorem"
      >
        <DsProductGallery
          category-title="Category title 1"
          :items="galleryItems"
        />
      </DsBlockSlot>

    </main>

    <DsFooter />

    <!-- Toggle vers dark mode -->
    <div class="theme-toggle">
      <router-link to="/dark" class="theme-toggle__link">
        Dark mode
        <DsIcon name="arrowRight" :size="14" />
      </router-link>
    </div>

  </div>
</template>

<script setup>
import DsTopBar            from '@/components/layout/DsTopBar.vue'
import DsHeader            from '@/components/layout/DsHeader.vue'
import DsFooter            from '@/components/layout/DsFooter.vue'
import DsSlider            from '@/components/blocks/DsSlider.vue'
import DsBlockSlot         from '@/components/blocks/DsBlockSlot.vue'
import DsProductList       from '@/components/blocks/DsProductList.vue'
import DsSubscriptionBlock from '@/components/blocks/DsSubscriptionBlock.vue'
import DsProductGallery    from '@/components/blocks/DsProductGallery.vue'
import DsIcon              from '@/components/atoms/DsIcon.vue'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ullamcorper tellus, in dapibus turpis hendrerit quis. Maecenas lobortis metus ac neque tincidunt, et pellentesque leo efficitur.'

const productListCategories = [
  {
    title: 'Category title 1',
    items: [
      { name: 'Bundle name',  complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
    ]
  },
  {
    title: 'Category title 2',
    items: [
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
    ]
  },
  {
    title: 'Category title 3',
    items: [
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
    ]
  },
]

const subscriptionItems = Array.from({ length: 3 }, () => ({
  title: 'Subscription Example',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€', ctaLabel: 'Button label',
}))

const galleryItems = Array.from({ length: 3 }, () => ({
  name: 'Product name', complement: 'Product complement', rating: '4.9',
  originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€',
}))
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: var(--surface-base-surfacePage);
}
.page__head {
  position: sticky; top: 0; z-index: 100;
  background-color: var(--color-bg-nav);
}
.page__content { display: flex; flex-direction: column; }

@media (max-width: 767px) { .page__head { position: relative; } }

.theme-toggle {
  position: fixed;
  bottom: var(--gap-md); right: var(--gap-md);
  z-index: 1000;
}
.theme-toggle__link {
  display: inline-flex; align-items: center; gap: var(--gap-xs);
  padding: var(--gap-xs) var(--gap-sm);
  background: var(--surface-base-surfacePrimary);
  border: 1px solid var(--stroke); border-radius: var(--radius-s);
  font-size: var(--font-size-sm); color: var(--text-base-secondary);
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition: color var(--transition-fast), border-color var(--transition-fast);
}
.theme-toggle__link:hover {
  color: var(--text-base-primary); border-color: var(--stroke-strong);
}
</style>
