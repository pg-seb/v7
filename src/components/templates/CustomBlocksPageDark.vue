<template>
  <!--
    CustomBlocksPageDark
    Variante dark mode de CustomBlocksPage.vue
    Réf Figma : "Custom blocks Product - dark" (2863:11957)
                "Custom blocks Product Mobile Custom blocks Product - dark" (2863:11969)

    Principe :
    - Identique à CustomBlocksPage structurellement
    - data-theme="dark" appliqué sur le wrapper de page
    - Tous les tokens sémantiques basculent automatiquement :
        surface/base/surfacePage      → rgba(20,20,20,1)   (--color-bg-page dark)
        surface/base/surfacePrimary   → rgba(0,0,0,0.87)
        text/base/primary             → rgba(255,255,255,1)
        text/base/secondary           → rgba(255,255,255,0.6)
        stroke/stroke                 → rgba(255,255,255,0.38)
    - brandTheme reste identique (--brandTheme = rgba(0,185,255,1))
    - Un toggle optionnel permet de revenir au light mode
  -->
  <div class="page page--dark" data-theme="dark">

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

      <!-- [0] productList — pt 50px, fill visible, headline/lg desktop -->
      <DsBlockSlot
        :index="0"
        title="product block"
        :description="lorem"
        share-label="Share"
      >
        <DsProductList :categories="productListCategories" />
      </DsBlockSlot>

      <!-- [1] subscription — pt 100px, fill invisible -->
      <DsBlockSlot
        :index="1"
        title="subscription block"
        :description="lorem"
      >
        <DsSubscriptionBlock :items="subscriptionItems" />
      </DsBlockSlot>

      <!-- [2] productGallery — pt 100px, fill visible (surfacePrimary dark) -->
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

    <!-- FOOTER -->
    <DsFooter />

    <!-- Toggle dark/light — debug helper -->
    <div class="theme-toggle" title="Basculer vers light mode">
      <router-link to="/" class="theme-toggle__link">
        <DsIcon name="arrowLeft" :size="14" />
        Light mode
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
  originalPrice: '110,00€',
  price: '100,00€',
  installment: 'or pay 7 x 99.99€',
  ctaLabel: 'Button label',
}))

const galleryItems = Array.from({ length: 3 }, () => ({
  name: 'Product name',
  complement: 'Product complement',
  rating: '4.9',
  originalPrice: '110,00€',
  price: '100,00€',
  installment: 'or pay 7 x 99.99€',
}))
</script>

<style scoped>
/*
  La magie est dans data-theme="dark" sur .page--dark.
  Tous les tokens sémantiques définis dans tokens.css [data-theme="dark"]
  s'appliquent automatiquement sur tous les composants enfants.

  Aucun override de couleur ici — 100% token-driven.
*/
.page--dark {
  min-height: 100vh;
  background-color: var(--surface-base-surfacePage);  /* rgba(20,20,20,1) en dark */
}

/* HEAD sticky */
.page__head {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg-nav);  /* rgba(20,20,20,1) en dark */
}

.page__content { display: flex; flex-direction: column; }

@media (max-width: 767px) {
  .page__head { position: relative; }
}

/* ── Toggle debug — coin bas gauche ── */
.theme-toggle {
  position: fixed;
  bottom: var(--gap-md);
  left: var(--gap-md);
  z-index: 1000;
}
.theme-toggle__link {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--gap-xs) var(--gap-sm);
  background: var(--surface-base-surfacePrimary);
  border: 1px solid var(--stroke);
  border-radius: var(--radius-s);
  font-size: var(--font-size-sm);
  color: var(--text-base-secondary);
  text-decoration: none;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}
.theme-toggle__link:hover {
  color: var(--text-base-primary);
  border-color: var(--stroke-strong);
}
</style>
