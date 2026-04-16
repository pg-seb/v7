<template>
  <div class="ds-faq">
    <!-- Tab menu -->
    <div class="ds-faq__tabs" role="tablist">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        role="tab"
        class="ds-faq__tab"
        :class="{ 'ds-faq__tab--active': activeTab === i }"
        :aria-selected="activeTab === i"
        @click="activeTab = i"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Accordion content -->
    <div class="ds-faq__content">
      <DsAccordion
        v-for="(item, i) in currentItems"
        :key="`${activeTab}-${i}`"
        :title="item.question"
        :content="item.answer"
        :default-open="i === 1"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DsAccordion from '@/components/molecules/DsAccordion.vue'

const props = defineProps({
  tabs:  { type: Array, default: () => ['General', 'Tickets', 'Access', 'Payment', 'Refund'] },
  items: {
    type: Array,
    default: () => [
      { question: 'How do I buy tickets?', answer: 'You can purchase tickets directly on our website or at the stadium box office.' },
      { question: 'Can I get a refund?', answer: 'Refunds are available up to 48 hours before the event. Please contact our support team.' },
      { question: 'What are the stadium rules?', answer: 'Please check our stadium guidelines page for a full list of permitted items.' },
      { question: 'How early should I arrive?', answer: 'We recommend arriving at least 60 minutes before kick-off.' },
      { question: 'Is there parking available?', answer: 'Yes, parking is available at the stadium. Pre-booking is recommended.' },
    ]
  },
})

const activeTab = ref(0)
const currentItems = computed(() => props.items)
</script>

<style scoped>
.ds-faq {
  width: 100%;
}

/* Tabs */
.ds-faq__tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--color-stroke);
  overflow-x: auto;
  scrollbar-width: none;
}
.ds-faq__tabs::-webkit-scrollbar { display: none; }

.ds-faq__tab {
  padding: 0 var(--gap-md);
  height: 60px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: color var(--transition-fast), border-color var(--transition-fast);
  margin-bottom: -1px;
}
.ds-faq__tab:hover { color: var(--color-text-primary); }
.ds-faq__tab--active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-brand);
  font-weight: var(--font-weight-medium);
}

/* Content */
.ds-faq__content {
  padding-top: var(--gap-xs);
}
</style>
