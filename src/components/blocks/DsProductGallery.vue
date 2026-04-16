<template>
  <div class="ds-product-gallery">
    <div class="section-title">
      <h3 class="section-title__text">{{ categoryTitle }}</h3>
    </div>

    <div class="gallery__grid">
      <div v-for="(item, i) in items" :key="i" class="gallery-item">

        <!-- productItemTitle -->
        <div class="gallery-item__header">
          <div class="gallery-item__name-row">
            <span class="gallery-item__name">{{ item.name }}</span>
            <button class="gallery-item__info" aria-label="Info">
              <DsIcon name="infoLetter" :size="16" />
            </button>
          </div>
          <span class="gallery-item__complement">{{ item.complement }}</span>
        </div>

        <!-- productItemFeatures -->
        <div class="gallery-item__features">
          <div class="features__icons">
            <DsIcon name="seatNumerated" :size="14" />
            <DsIcon name="coveredGs"     :size="14" />
            <DsIcon name="screen"        :size="14" />
            <DsIcon name="allZone"       :size="14" />
          </div>
          <div class="features__rating">
            <DsIcon name="star" :size="12" class="icon-brand" />
            <span class="features__rating-num">{{ item.rating }}</span>
          </div>
          <button class="gallery-item__3d" aria-label="Vue 3D">
            <DsIcon name="3d" :size="14" />
          </button>
        </div>

        <!-- price + qty + cta — même logique que productList mais layout vertical -->
        <div class="gallery-item__pricing">
          <!-- price Figma exact -->
          <div class="price-block">
            <div class="price-block__row1">
              <div class="price-block__from-discount">
                <span class="price-block__from">from</span>
                <span class="price-block__original">{{ item.originalPrice }}</span>
              </div>
              <span class="price-block__current">{{ item.price }}</span>
            </div>
            <span class="price-block__installment">{{ item.installment }}</span>
          </div>
          <!-- qty + cta : gap réduit en galerie (pas 40px comme list) -->
          <div class="qty-cta">
            <div class="qty-selector">
              <button class="qty-btn" aria-label="Moins">
                <DsIcon name="minus" :size="12" />
              </button>
              <span class="qty-val">1</span>
              <button class="qty-btn" aria-label="Plus">
                <DsIcon name="plus" :size="12" />
              </button>
            </div>
            <button class="add-btn">Add to cart</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import DsIcon from '@/components/atoms/DsIcon.vue'

defineProps({
  categoryTitle: { type: String, default: 'Category title 1' },
  items: {
    type: Array,
    default: () => Array.from({ length: 3 }, () => ({
      name: 'Product name', complement: 'Product complement', rating: '4.9',
      originalPrice: '110,00€', price: '100,00€', installment: 'or pay 7 x 99.99€',
    }))
  }
})
</script>

<style scoped>
.ds-product-gallery {
  width: 100%;
  max-width: var(--grid-max-width);   /* 1300px */
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.section-title {
  min-height: 38px;
  display: flex; align-items: center;
  border-bottom: 1px solid var(--stroke);
  padding-bottom: 10px;
}
.section-title__text {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-2xl);
  line-height: var(--font-line-height-2xl);
  text-transform: uppercase;
  color: var(--text-base-primary);
  margin: 0;
}

/* Grille 3 colonnes — 420px each sur 1300px */
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gap-md);                 /* 20px */
}

/* gallery-item : 420×243 desktop */
.gallery-item {
  background: var(--surface-base-surfacePrimary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--gap-sm);
  padding: var(--gap-md);             /* 20px */
  min-height: 243px;
  border: 1px solid var(--stroke);
  border-radius: var(--radius-xs);    /* 2px */
}

.gallery-item__header { display: flex; flex-direction: column; gap: var(--gap-xxs); }
.gallery-item__name-row { display: flex; align-items: center; gap: var(--gap-xs); }
.gallery-item__name {
  font-family: var(--font-family-title); font-weight: 500;
  font-size: var(--font-size-lg); color: var(--text-base-primary);
}
.gallery-item__info {
  width: 16px; height: 16px; border-radius: 50%;
  border: 1.5px solid var(--stroke-strong); background: none;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-base-primary); flex-shrink: 0;
}
.gallery-item__complement { font-size: var(--font-size-sm); color: var(--text-base-secondary); }

.gallery-item__features { display: flex; align-items: center; gap: var(--gap-xs); color: var(--text-base-primary); }
.features__icons { display: flex; gap: var(--gap-xxs); }
.icon-brand { color: var(--brandTheme); }
.features__rating {
  display: flex; align-items: center; gap: var(--gap-xxs);
  background: rgba(0, 185, 255, 0.12); border-radius: var(--radius-max);
  padding: 2px var(--gap-xs);
}
.features__rating-num { font-size: var(--font-size-sm); font-weight: 500; color: var(--text-base-primary); }
.gallery-item__3d {
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid var(--stroke-strong);
  background: var(--surface-base-surfacePrimary);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-base-primary);
  position: relative; overflow: hidden;
}
.gallery-item__3d::after { content: ''; position: absolute; inset: 0; border-radius: 50%; background: transparent; transition: background var(--transition-fast); }
.gallery-item__3d:hover::after { background: var(--surface-base-surfacePage); }

.gallery-item__pricing { display: flex; flex-direction: column; gap: var(--gap-sm); }

/* price — Figma exact (même règles que productList) */
.price-block { display: flex; flex-direction: column; gap: 0; }
.price-block__row1 { display: flex; align-items: baseline; gap: var(--gap-xs); height: 25px; }
.price-block__from-discount { display: flex; align-items: baseline; gap: var(--gap-xxs); }
.price-block__from { font-family: var(--font-family-title); font-weight: 500; font-size: 16px; line-height: 24px; color: var(--text-base-primary); }
.price-block__original { font-family: var(--font-family-title); font-weight: 700; font-size: var(--font-size-xl); line-height: 25px; color: var(--style-danger); text-decoration: line-through; }
.price-block__current { font-family: var(--font-family-title); font-weight: 700; font-size: var(--font-size-xl); line-height: 25px; color: var(--text-base-primary); }
.price-block__installment { font-size: 13px; line-height: var(--font-line-height-md); color: var(--text-base-primary); }

/* qty-cta : gap réduit en galerie */
.qty-cta { display: flex; align-items: center; gap: var(--gap-sm); }
.qty-selector { display: flex; align-items: center; gap: var(--gap-xs); width: 86px; height: 28px; flex-shrink: 0; }
.qty-btn {
  width: 28px; height: 28px; border-radius: var(--radius-max);
  border: 1px solid var(--stroke-strong);
  background: var(--surface-base-surfacePrimary);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-base-primary); flex-shrink: 0;
  position: relative; overflow: hidden;
}
.qty-btn::after { content: ''; position: absolute; inset: 0; border-radius: inherit; background: transparent; transition: background var(--transition-fast); }
.qty-btn:hover::after { background: var(--surface-base-surfacePage); }
.qty-val { width: 18px; text-align: center; font-size: var(--font-size-md); font-weight: 400; color: var(--text-base-primary); flex-shrink: 0; }

.add-btn {
  flex: 1; height: 44px;
  background: var(--brandTheme); color: var(--text-buttons-primary);
  border-radius: var(--shape-shape);
  font-family: var(--font-family-title);
  font-size: var(--font-size-md); font-weight: 500;
  text-transform: uppercase; white-space: nowrap;
  position: relative; overflow: hidden;
}
.add-btn::after { content: ''; position: absolute; inset: 0; background: transparent; transition: background var(--transition-fast); }
.add-btn:hover::after { background: var(--overlay-brand-hover); }

/* ── Responsive ── */
@media (max-width: 767px) {
  .ds-product-gallery { max-width: 100%; }
  .gallery__grid { grid-template-columns: 1fr; }
}
@media (min-width: 768px) and (max-width: 1079px) {
  .ds-product-gallery { max-width: 100%; }
  .gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
