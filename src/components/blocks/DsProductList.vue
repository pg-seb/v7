<template>
  <div class="ds-product-list">
    <div v-for="(cat, ci) in categories" :key="ci" class="product-list__session">

      <!-- sectionTitle — title/lg : Medium 20px 28px UPPER, h 38px -->
      <div class="section-title">
        <h3 class="section-title__text">{{ cat.title }}</h3>
      </div>

      <!-- programBlocks — gap 10px -->
      <div class="product-list__items">
        <div v-for="(item, ii) in cat.items" :key="ii" class="product-item">

          <!-- productItemTitle : 380px desktop -->
          <div class="product-item__title">
            <div class="product-item__name-row">
              <span class="product-item__name">{{ item.name }}</span>
              <button class="product-item__info" aria-label="Info">
                <DsIcon name="infoLetter" :size="16" />
              </button>
            </div>
            <span class="product-item__complement">{{ item.complement }}</span>
          </div>

          <!-- productItemFeatures : 280px desktop -->
          <div class="product-item__features">
            <div class="features__icons">
              <DsIcon name="seatNumerated" :size="16" />
              <DsIcon name="coveredGs"     :size="16" />
              <DsIcon name="screen"        :size="16" />
              <DsIcon name="allZone"       :size="16" />
            </div>
            <!-- infoAlt : brandTheme star + rating -->
            <div class="features__rating">
              <DsIcon name="star" :size="12" class="icon-brand" />
              <span class="features__rating-num">{{ item.rating }}</span>
            </div>
            <!-- 3D button : 40×40 cercle, stroke stroke-strong -->
            <button class="product-item__3d" aria-label="Vue 3D">
              <DsIcon name="3d" :size="16" />
            </button>
          </div>

          <!-- price + qty + cta : Figma exact -->
          <div class="product-item__pricing">

            <!--
              price component — Figma exact (node 824:7589) :
              Hauteur totale : 45px
              Row 1 (25px, horizontal, gap 10px) :
                from+discount (horizontal, gap 5px) :
                  "from"     → Medium 16px lh 24px, text-base-primary
                  "110,00€"  → Bold 18px lh 25px, style-danger (rouge) + text-decoration line-through
                100,00€      → Bold 18px lh 25px, text-base-primary
              Row 2 :
                "or pay 7 x 99.99€" → Regular 13px lh 20px, text-base-primary
            -->
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

            <!--
              qty + cta — Figma exact (node 2039:37108) :
              Container : horizontal, gap 40px, h 44px
              productsQuantity (node 824:7513) : horizontal, gap 10px, w 100 h 30
                [buttonIcon minus] [qty text 20px] [buttonIcon plus]
                  buttonIcon : 30×30, border-radius 100px (cercle complet),
                               bg surfacePrimary, border 1px stroke-strong
                  qty text : Regular 14px lh 20px, text-base-primary, w 20px center
              button (node 809:749) : brandTheme bg, h 44px, px 14 py 12,
                                      radius 4px (--shape-shape), Medium 14px UPPER
            -->
            <div class="qty-cta">
              <div class="qty-selector">
                <button class="qty-btn" aria-label="Moins">
                  <DsIcon name="minus" :size="14" />
                </button>
                <span class="qty-val">1</span>
                <button class="qty-btn" aria-label="Plus">
                  <DsIcon name="plus" :size="14" />
                </button>
              </div>
              <button class="add-btn">
                Add to cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DsIcon from '@/components/atoms/DsIcon.vue'

defineProps({
  categories: {
    type: Array,
    default: () => [
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
      }
    ]
  }
})
</script>

<style scoped>
/* ── Layout racine ── */
.ds-product-list {
  width: 100%;
  max-width: var(--grid-max-width);   /* 1300px — pas full width */
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);                 /* 40px entre catégories */
}

/* ── sessionContainer ── */
.product-list__session {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);                 /* 20px */
}

/* ── sectionTitle — Figma : h 38px, pb 10px, title/lg ── */
.section-title {
  min-height: 38px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--stroke);
  padding-bottom: 10px;
}
.section-title__text {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-2xl);          /* 20px */
  line-height: var(--font-line-height-2xl); /* 28px */
  text-transform: uppercase;
  color: var(--text-base-primary);
  margin: 0;
}

/* ── Items — gap 10px (programBlocks) ── */
.product-list__items {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);                 /* 10px — Figma exact */
}

/* ── productItem — desktop : row, min-h 94px ── */
.product-item {
  display: flex;
  align-items: center;
  background-color: var(--surface-base-surfacePrimary);
  min-height: 94px;
  padding: 0 var(--gap-md);           /* 0 20px */
  border-bottom: 1px solid var(--stroke);
  gap: 0;                             /* pas de gap — les blocs ont des widths fixes */
}

/* ── productItemTitle : 380px ── */
.product-item__title {
  width: 380px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxs);                /* 4px */
}
.product-item__name-row {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);                 /* 5px */
}
.product-item__name {
  font-family: var(--font-family-title);
  font-weight: 500;                   /* body/lg-med */
  font-size: var(--font-size-lg);     /* 15px */
  line-height: var(--font-line-height-md);
  color: var(--text-base-primary);
}
.product-item__info {
  width: 18px; height: 18px;
  border-radius: 50%;
  border: 1.5px solid var(--stroke-strong);
  background: none;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--text-base-primary);
}
.product-item__complement {
  font-size: var(--font-size-sm);     /* 12px */
  color: var(--text-base-secondary);
  line-height: var(--font-line-height-sm);
}

/* ── productItemFeatures : 280px ── */
.product-item__features {
  width: 280px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--gap-sm);                 /* 10px */
  color: var(--text-base-primary);
}
.features__icons {
  display: flex;
  gap: var(--gap-xs);                 /* 5px */
}
.icon-brand {
  color: var(--brandTheme);
}
.features__rating {
  display: flex;
  align-items: center;
  gap: var(--gap-xxs);               /* 4px */
  /* Figma : background brand/12 ≈ brandTheme 12% */
  background: rgba(0, 185, 255, 0.12);
  border-radius: var(--radius-max);
  padding: 2px var(--gap-xs);        /* 2px 5px */
}
.features__rating-num {
  font-family: var(--font-family-body);
  font-weight: 500;
  font-size: var(--font-size-sm);    /* 12px */
  color: var(--text-base-primary);
}
/* 3D button : 40×40, cercle, stroke stroke-strong */
.product-item__3d {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1px solid var(--stroke-strong);
  background: var(--surface-base-surfacePrimary);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-base-primary);
  flex-shrink: 0;
  position: relative; overflow: hidden;
}
.product-item__3d::after {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  background: transparent; transition: background var(--transition-fast);
}
.product-item__3d:hover::after { background: var(--surface-base-surfacePage); }

/* ── price + qty + cta ── */
.product-item__pricing {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-sm);                 /* petit gap entre price et qty-cta */
}

/* ── price block — Figma exact node 824:7589 ──
   Hauteur totale 45px, vertical layout, gap 0
*/
.price-block {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 184px;
  flex-shrink: 0;
}

/* Row 1 : horizontal, gap 10px */
.price-block__row1 {
  display: flex;
  align-items: baseline;
  gap: var(--gap-sm);                 /* 10px */
  height: 25px;
}

/* from + strikethrough : horizontal, gap 5px */
.price-block__from-discount {
  display: flex;
  align-items: baseline;
  gap: var(--gap-xs);                 /* 5px */
}

/* "from" : Roboto Medium 16px lh 24px */
.price-block__from {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: 16px;                    /* Figma exact : 16px (pas dans les tokens) */
  line-height: 24px;
  color: var(--text-base-primary);
}

/* Prix barré : Bold 18px lh 25px, style-danger */
.price-block__original {
  font-family: var(--font-family-title);
  font-weight: 700;
  font-size: var(--font-size-xl);     /* 18px */
  line-height: 25px;
  color: var(--style-danger);         /* rouge — Figma exact */
  text-decoration: line-through;
}

/* Prix actuel : Bold 18px lh 25px, text-base-primary */
.price-block__current {
  font-family: var(--font-family-title);
  font-weight: 700;
  font-size: var(--font-size-xl);     /* 18px */
  line-height: 25px;
  color: var(--text-base-primary);
}

/* Installment : Regular 13px lh 20px */
.price-block__installment {
  font-family: var(--font-family-body);
  font-weight: 400;
  font-size: 13px;
  line-height: var(--font-line-height-md); /* 20px */
  color: var(--text-base-primary);
}

/* ── qty + cta container — Figma exact (node 2039:37108) ──
   horizontal, gap 40px (!), h 44px
*/
.qty-cta {
  display: flex;
  align-items: center;
  gap: var(--gap-lg);                 /* 40px — Figma exact */
}

/* ── productsQuantity — Figma exact (node 824:7513) ──
   horizontal, gap 10px, w 100px h 30px
*/
.qty-selector {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);                 /* 10px */
  width: 100px;
  height: 30px;
  flex-shrink: 0;
}

/* buttonIcon − / + : 30×30, border-radius 100px (cercle), bg surfacePrimary, border 1px stroke-strong */
.qty-btn {
  width: 30px; height: 30px;
  border-radius: var(--radius-max);   /* 100px = cercle parfait */
  border: 1px solid var(--stroke-strong);
  background: var(--surface-base-surfacePrimary);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-base-primary);
  flex-shrink: 0;
  position: relative; overflow: hidden;
  transition: none;
}
.qty-btn::after {
  content: ''; position: absolute; inset: 0;
  border-radius: inherit;
  background: transparent;
  transition: background var(--transition-fast);
}
.qty-btn:hover::after { background: var(--surface-base-surfacePage); }
.qty-btn:active::after { background: var(--stroke); }

/* Valeur : Regular 14px lh 20px — Figma exact */
.qty-val {
  width: 20px;
  text-align: center;
  font-family: var(--font-family-body);
  font-weight: 400;
  font-size: var(--font-size-md);     /* 14px */
  line-height: var(--font-line-height-md); /* 20px */
  color: var(--text-base-primary);
  flex-shrink: 0;
}

/* Add to cart button — Figma exact (node 809:749) :
   brandTheme bg, h 44px, px 14 py 12, radius var(--shape-shape), Medium 14px UPPER
*/
.add-btn {
  height: 44px;
  padding: 12px var(--font-size-md);  /* 12px 14px */
  background: var(--brandTheme);
  color: var(--text-buttons-primary);
  border-radius: var(--shape-shape);  /* 4px */
  font-family: var(--font-family-title);
  font-size: var(--font-size-md);     /* 14px */
  font-weight: 500;
  line-height: var(--font-line-height-md);
  text-transform: uppercase;
  white-space: nowrap;
  position: relative; overflow: hidden;
}
.add-btn::after {
  content: ''; position: absolute; inset: 0;
  background: transparent;
  transition: background var(--transition-fast);
}
.add-btn:hover::after  { background: var(--overlay-brand-hover); }
.add-btn:active::after { background: transparent; }

/* ── Responsive ── */
@media (max-width: 767px) {
  /* Mobile — card layout 213px, padding 20px, gap 20px */
  .ds-product-list { max-width: 100%; }

  .product-item {
    flex-direction: column;
    align-items: flex-start;
    min-height: 213px;
    padding: var(--gap-md);           /* 20px */
    gap: var(--gap-md);              /* 20px */
  }
  .product-item__title  { width: 100%; }
  .product-item__features { width: 100%; }
  .product-item__pricing {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-sm);
  }
  .price-block { width: auto; }
  .qty-cta { gap: var(--gap-md); }   /* réduit sur mobile */
}

@media (min-width: 768px) and (max-width: 1079px) {
  .ds-product-list { max-width: 100%; }
  .product-item__title    { width: 260px; }
  .product-item__features { width: 180px; }
}
</style>
