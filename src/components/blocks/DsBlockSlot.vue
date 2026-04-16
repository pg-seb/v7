<template>
  <!--
    Outer : pleine largeur, porte la couleur de fond alternée
    Inner : max-width 1300px centré — PAS de padding latéral fixe
            Le centrage remplace l'ancien padding 310px sur 1920px
  -->
  <section
    class="ds-block-slot container--fluid"
    :class="{
      'ds-block-slot--first': index === 0,
      'ds-block-slot--bg':    index % 2 !== 0,
    }"
  >
    <div class="ds-block-slot__inner">

      <!-- Breadcrumb optionnel -->
      <DsBreadcrumb
        v-if="breadcrumb?.length"
        :steps="breadcrumb"
        class="ds-block-slot__breadcrumb"
      />

      <!-- En-tête -->
      <div v-if="title" class="ds-block-slot__header">
        <div class="ds-block-slot__title-row">
          <h2 class="ds-block-slot__title">{{ title }}</h2>
          <button v-if="shareLabel" class="ds-block-slot__share">
            <DsIcon name="share" :size="16" />
            {{ shareLabel }}
          </button>
        </div>
        <p v-if="description" class="ds-block-slot__desc">{{ description }}</p>
      </div>

      <!-- Contenu -->
      <div class="ds-block-slot__content" :class="{ 'ds-block-slot__content--shadow': hasShadow }">
        <slot />
      </div>

    </div>
  </section>
</template>

<script setup>
import DsBreadcrumb from '@/components/molecules/DsBreadcrumb.vue'
import DsIcon       from '@/components/atoms/DsIcon.vue'

defineProps({
  index:       { type: Number,  default: 1 },
  title:       { type: String,  default: '' },
  description: { type: String,  default: '' },
  breadcrumb:  { type: Array,   default: null },
  shareLabel:  { type: String,  default: '' },
  hasShadow:   { type: Boolean, default: false },
})
</script>

<style scoped>
/* Outer — fond alterné */
.ds-block-slot {
  width: 100%;
  background-color: transparent;
}
.ds-block-slot--bg {
  background-color: var(--surface-base-surfacePrimary);
}

/*
  Inner — MAX-WIDTH 1300px centré
  C'est le changement clé : le contenu est boxé à 1300px, centré.
  Les padding latéraux sont gérés par .container (base.css) à travers
  le breakpoint responsive, mais ici on centre directement avec max-width.
*/
.ds-block-slot__inner {
  width: 100%;
  max-width: var(--grid-max-width);   /* 1300px */
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);                /* 40px */

  /* Padding vertical uniquement — horizontal = auto grâce à max-width */
  padding-top:    var(--gap-xxl);    /* 100px — autres blocs */
  padding-bottom: var(--gap-xxl);
}

/* Premier bloc : padding-top 50px */
.ds-block-slot--first .ds-block-slot__inner {
  padding-top: var(--gap-xl);        /* 50px */
}

/* Breadcrumb */
.ds-block-slot__breadcrumb { flex-shrink: 0; }

/* En-tête */
.ds-block-slot__header {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);                /* 20px */
}

.ds-block-slot__title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-md);
}

/* headline/sm — blocs autres : Medium 24px 32px UPPER */
.ds-block-slot__title {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-3xl);
  line-height: var(--font-line-height-3xl);
  text-transform: uppercase;
  color: var(--text-base-primary);
  margin: 0; flex: 1;
}

/* headline/lg — 1er bloc desktop/tablet : Light 35px 46px */
.ds-block-slot--first .ds-block-slot__title {
  font-weight: 300;
  font-size: var(--font-size-5xl);
  line-height: var(--font-line-height-5xl);
  text-transform: none;
}

.ds-block-slot__share {
  display: flex; align-items: center; gap: var(--gap-xs);
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  color: var(--text-base-secondary);
  flex-shrink: 0; white-space: nowrap;
  margin-left: var(--gap-md);
}

/* body/lg-reg */
.ds-block-slot__desc {
  font-family: var(--font-family-body);
  font-weight: 400;
  font-size: var(--font-size-lg);
  line-height: var(--font-line-height-md);
  color: var(--text-base-primary);
}

.ds-block-slot__content { width: 100%; }
.ds-block-slot__content--shadow { box-shadow: var(--shadow-sm); }

/* ── Responsive ── */
@media (max-width: 767px) {
  /* Mobile : pt 50px pb 50px, headline/sm pour tous */
  .ds-block-slot__inner {
    padding-top:    var(--gap-xl);
    padding-bottom: var(--gap-xl);
    /* On ajoute un padding inline sur mobile pour que le contenu ne colle pas */
    padding-inline: var(--grid-margin-mobile);  /* 10px */
  }
  .ds-block-slot--first .ds-block-slot__inner { padding-top: var(--gap-xl); }

  /* Mobile : 1er bloc → headline/sm aussi */
  .ds-block-slot--first .ds-block-slot__title {
    font-weight: 500;
    font-size: var(--font-size-3xl);
    line-height: var(--font-line-height-3xl);
    text-transform: uppercase;
  }
}

@media (min-width: 768px) and (max-width: 1079px) {
  .ds-block-slot__inner {
    padding-top: var(--gap-xl);
    padding-bottom: var(--gap-xl);
    padding-inline: var(--grid-margin-tablet); /* 20px */
  }
  .ds-block-slot--first .ds-block-slot__title {
    font-size: var(--font-size-4xl);
    line-height: var(--font-line-height-4xl);
    font-weight: 300;
    text-transform: none;
  }
}

@media (min-width: 1080px) and (max-width: 1619px) {
  .ds-block-slot__inner {
    /* Desktop sm : 1300px max mais ajouter 50px de padding pour que
       ça ne colle pas aux bords quand la fenêtre est proche de 1300px */
    padding-inline: var(--grid-margin-desktop-sm); /* 50px */
  }
}
</style>
