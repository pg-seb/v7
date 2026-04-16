<template>
  <div class="ds-subscription">
    <div v-for="(item, i) in items" :key="i" class="sub-row">

      <!-- imagePlaceholder : 340px desktop, fullwidth mobile -->
      <div class="sub-row__image img-placeholder" aria-hidden="true"></div>

      <!-- Contenu -->
      <div class="sub-row__content">
        <div class="sub-row__text">
          <!-- title/sm = Medium 18px 25px -->
          <h4 class="sub-row__title">{{ item.title }}</h4>
          <!-- body/lg-reg = Regular 15px 20px -->
          <p class="sub-row__desc">{{ item.description }}</p>
        </div>

        <div class="sub-row__cta">
          <div class="sub-price">
            <div class="sub-price__top">
              <span class="sub-price__from">from</span>
              <span class="sub-price__original">{{ item.originalPrice }}</span>
            </div>
            <span class="sub-price__current">{{ item.price }}</span>
            <span class="sub-price__installment">{{ item.installment }}</span>
          </div>
          <button class="sub-btn">{{ item.ctaLabel }}</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => Array.from({ length: 3 }, () => ({
      title: 'Subscription Example',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      originalPrice: '110,00€',
      price: '100,00€',
      installment: 'or pay 7 x 99.99€',
      ctaLabel: 'Button label',
    }))
  }
})
</script>

<style scoped>
.ds-subscription { width: 100%; display: flex; flex-direction: column; gap: var(--gap-xs); }

/* Figma desktop : 1300×226px, image 340px, gap 10px entre rows */
.sub-row {
  display: flex;
  align-items: stretch;
  background-color: var(--surface-base-surfacePrimary);
  min-height: 226px;
  overflow: hidden;
  border-bottom: 1px solid var(--stroke);
}

/* imagePlaceholder : 340px desktop */
.sub-row__image {
  width: 340px;
  min-width: 340px;
  flex-shrink: 0;
  min-height: 226px;
}

/* Contenu : flex: 1, flex-row, space-between */
.sub-row__content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--gap-lg) var(--gap-lg);   /* 40px */
  gap: var(--gap-lg);
}

/* Texte : max 736px */
.sub-row__text { flex: 1; }

/* title/sm : Medium 18px 25px */
.sub-row__title {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-xl);          /* 18px */
  line-height: 25px;
  color: var(--text-base-primary);
  margin: 0 0 var(--gap-sm);
}

/* body/lg-reg : Regular 15px 20px */
.sub-row__desc {
  font-family: var(--font-family-body);
  font-weight: 400;
  font-size: var(--font-size-lg);          /* 15px */
  line-height: var(--font-line-height-md); /* 20px */
  color: var(--text-base-primary);
  margin: 0;
}

/* CTA : 128px, flex-col, align-end */
.sub-row__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--gap-md);
  flex-shrink: 0;
  width: 128px;
}

.sub-price { display: flex; flex-direction: column; gap: var(--gap-xxs); }
.sub-price__top { display: flex; align-items: baseline; gap: var(--gap-xxs); }
.sub-price__from { font-size: var(--font-size-xs); color: var(--text-base-secondary); }
.sub-price__original { font-size: var(--font-size-sm); color: var(--style-danger); text-decoration: line-through; }
.sub-price__current { font-size: var(--font-size-xl); font-weight: 700; color: var(--text-base-primary); }
.sub-price__installment { font-size: var(--font-size-xs); color: var(--text-base-secondary); }

.sub-btn {
  width: 128px; height: 44px;
  background: var(--brandTheme); color: var(--text-buttons-primary);
  border-radius: var(--shape-shape);
  font-family: var(--font-family-title);
  font-size: var(--font-size-md); font-weight: 500;
  text-transform: uppercase;
  position: relative; overflow: hidden;
}
.sub-btn::after {
  content: ''; position: absolute; inset: 0;
  background: transparent; transition: background var(--transition-fast);
}
.sub-btn:hover::after { background: var(--overlay-brand-hover); }

/* ── Responsive ── */
@media (max-width: 767px) {
  /* Mobile — Figma containerSubscription : 355×428px, flex-col */
  .sub-row {
    flex-direction: column;
    min-height: 428px;                    /* Figma exact */
  }
  .sub-row__image {
    width: 100%; min-width: 0;
    min-height: 160px;
  }
  .sub-row__content {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--gap-md);              /* 20px */
  }
  .sub-row__cta {
    align-items: flex-start;
    width: 100%;
  }
  .sub-btn { width: auto; padding: 0 var(--gap-lg); }
}

@media (min-width: 768px) and (max-width: 1079px) {
  .sub-row__image { width: 200px; min-width: 200px; }
  .sub-row__content { padding: var(--gap-md); gap: var(--gap-md); }
}
</style>
