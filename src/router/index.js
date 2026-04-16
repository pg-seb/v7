import { createRouter, createWebHistory } from 'vue-router'
import CustomBlocksPage     from '@/components/templates/CustomBlocksPage.vue'
import CustomBlocksPageDark from '@/components/templates/CustomBlocksPageDark.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'custom-blocks-light',
      component: CustomBlocksPage,
    },
    {
      // Variante dark mode — réf Figma "Custom blocks Product - dark"
      path: '/dark',
      name: 'custom-blocks-dark',
      component: CustomBlocksPageDark,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
