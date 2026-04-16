<template>
  <div class="custom-blocks-page" :class="`custom-blocks-page--${currentDevice}`">

    <!-- ============ HEAD ============ -->
    <div class="page__head">
      <DsTopBar />
      <DsHeader :device="currentDevice" />
      <DsSlider :device="currentDevice" title="Title of Minimal Filter slider" />
    </div>

    <!-- ============ CONTENT ============ -->
    <main class="page__content">

      <!-- BlockSlot 1: productList (white bg) -->
      <DsBlockSlot
        :device="currentDevice"
        title="Event Title"
        :desc="loremLong"
        :show-share="true"
        :has-bg="true"
      >
        <template #content>
          <DsProductList :device="currentDevice" :categories="productListCategories" />
        </template>
      </DsBlockSlot>

      <!-- BlockSlot 2: subscription (no bg override in Figma = fills visible false) -->
      <DsBlockSlot
        :device="currentDevice"
        title="subscription block"
        :desc="loremLong"
        :has-bg="false"
      >
        <template #content>
          <DsSubscriptionBlock :device="currentDevice" :items="subscriptionItems" />
        </template>
      </DsBlockSlot>

      <!-- BlockSlot 3: productGallery (white bg) -->
      <DsBlockSlot
        :device="currentDevice"
        title="Category title 1"
        :desc="loremLong"
        :has-bg="true"
      >
        <template #content>
          <DsProductGallery :device="currentDevice" category-title="Category title 1" :items="galleryItems" />
        </template>
      </DsBlockSlot>

    </main>

    <!-- ============ FOOTER ============ -->
    <DsFooter :device="currentDevice" />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import DsTopBar from '../layout/DsTopBar.vue'
import DsHeader from '../layout/DsHeader.vue'
import DsSlider from '../blocks/DsSlider.vue'
import DsBlockSlot from '../blocks/DsBlockSlot.vue'
import DsProductList from '../blocks/DsProductList.vue'
import DsSubscriptionBlock from '../blocks/DsSubscriptionBlock.vue'
import DsProductGallery from '../blocks/DsProductGallery.vue'
import DsFooter from '../layout/DsFooter.vue'

const props = defineProps({
  device: { type: String, default: 'desktop' }  // 'desktop' | 'mobile'
})

const currentDevice = computed(() => props.device)

const loremLong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ullamcorper tellus, in dapibus turpis hendrerit quis. Maecenas lobortis metus ac neque tincidunt, et pellentesque leo efficitur. Vivamus id tincidunt orci. Mauris bibendum enim vitae erat vulputate consequat. Sed consectetur auctor finibus. Mauris vulputate turpis vel enim lacinia, et cursus felis laoreet.`

const productListCategories = [
  {
    title: 'Category title 1',
    items: [
      { name: 'Bundle name',    complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
    ]
  },
  {
    title: 'Category title 2',
    items: [
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
    ]
  },
  {
    title: 'Category title 3',
    items: [
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
      { name: 'Product name',   complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
    ]
  }
]

const subscriptionItems = [
  {
    title: 'Subscription Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€', ctaLabel: 'Button label'
  },
  {
    title: 'Subscription Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€', ctaLabel: 'Button label'
  },
  {
    title: 'Subscription Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€', ctaLabel: 'Button label'
  }
]

const galleryItems = [
  { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
  { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
  { name: 'Product name', complement: 'Product complement', rating: '4.9', originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€' },
]
</script>

<style scoped>
.custom-blocks-page {
  min-height: 100vh;
  background: #f7f7f7; /* VariableID:1177:12183 = rgb(247,247,247) */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.custom-blocks-page--desktop { width: 1920px; max-width: 100%; }
.custom-blocks-page--mobile  { width: 375px; max-width: 100%; }

.page__head { display: flex; flex-direction: column; }
.page__content { display: flex; flex-direction: column; }
</style>
