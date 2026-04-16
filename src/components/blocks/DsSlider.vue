<template>
  <div class="ds-slider container--fluid" :style="bgStyle">
    <!-- Overlays dégradés Figma (filter darken/lighten) -->
    <div class="slider__fade-left" aria-hidden="true"/>
    <div class="slider__fade-right" aria-hidden="true"/>

    <div class="slider__inner">
      <!-- Gauche : breadcrumb + titre -->
      <div class="slider__left">
        <DsBreadcrumb
          v-if="breadcrumb?.length"
          :steps="breadcrumb"
          class="slider__breadcrumb"
        />
        <h1 class="slider__title">{{ title }}</h1>
      </div>

      <!-- Droite : countdown (masqué sur mobile) -->
      <div v-if="countdown" class="slider__right">
        <div class="slider__countdown">
          <div v-for="unit in countdownUnits" :key="unit.label" class="slider__countdown-box">
            <span class="slider__countdown-value">{{ unit.value }}</span>
            <span class="slider__countdown-label">{{ unit.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots carousel -->
    <div v-if="showDots" class="slider__dots">
      <span v-for="i in 4" :key="i" class="slider__dot"
        :class="{ 'slider__dot--active': i === 3 }"/>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import DsBreadcrumb from '@/components/molecules/DsBreadcrumb.vue'

const props = defineProps({
  type:       { type: String,  default: 'minimalFilter' },
  title:      { type: String,  default: 'Title of Minimal Filter slider' },
  breadcrumb: { type: Array,   default: null },
  countdown:  { type: Object,  default: null },
  imageSrc:   { type: String,  default: null },
  showDots:   { type: Boolean, default: false },
})

const bgStyle = computed(() => {
  if (props.imageSrc) {
    return { backgroundImage: `url(${props.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }
  }
  return { backgroundColor: 'var(--brandTheme)' }  /* JAMAIS de hex ici */
})

const countdownUnits = computed(() => {
  if (!props.countdown) return []
  return [
    { value: String(props.countdown.days    ?? 32).padStart(2,'0'), label: 'days'    },
    { value: String(props.countdown.hours   ?? 3 ).padStart(2,'0'), label: 'hours'   },
    { value: String(props.countdown.minutes ?? 58).padStart(2,'0'), label: 'min'     },
    { value: String(props.countdown.seconds ?? 48).padStart(2,'0'), label: 'sec'     },
  ]
})
</script>

<style scoped>
/* ── Base ── */
.ds-slider {
  position: relative;
  overflow: hidden;
  background-color: var(--brandTheme);
  background-size: cover;
  background-position: center;
  /* Hauteur desktop par défaut */
  height: var(--slider-height-minimal);   /* 139px */
}

/* ── Overlays dégradés — Figma exact ── */
.slider__fade-left {
  position: absolute; top: 0; bottom: 0; left: 0;
  width: var(--layout-side-padding);    /* 310px desktop */
  background: linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
  mix-blend-mode: overlay;
  z-index: 1;
  pointer-events: none;
}
.slider__fade-right {
  position: absolute; top: 0; bottom: 0; right: 0;
  width: var(--layout-side-padding);
  background: linear-gradient(-90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
  mix-blend-mode: screen;
  z-index: 1;
  pointer-events: none;
}

/* ── Inner — Figma exact : px 310px, py 30px ── */
.slider__inner {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xxs);              /* 3px Figma */
  padding: 30px var(--layout-side-padding);  /* 30px 310px */
}

.slider__left { flex: 1; display: flex; flex-direction: column; gap: var(--gap-xs); min-width: 0; }

/* Breadcrumb — couleurs inversées sur fond sombre */
.slider__breadcrumb {
  --text-base-primary:   rgba(255, 255, 255, 0.6);
  --text-base-secondary: rgba(255, 255, 255, 0.6);
}

/* Titre — display/lg : Light 45px lh 120% blanc */
.slider__title {
  font-family: var(--font-family-title);
  font-weight: 300;
  font-size: var(--font-size-6xl);       /* 45px */
  line-height: 1.2;
  color: var(--primitive-white-100);
  margin: 0;
}

/* ── Countdown ── */
.slider__right {
  flex-shrink: 0;
  display: flex;
  align-items: center;              /* centré verticalement dans le slider */
  justify-content: flex-end;
}

/*
  Figma boxCountdown container :
  - layout HORIZONTAL, gap 5px
  - pas de shadow sur le container — shadow sur chaque box via ::before
*/
.slider__countdown {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);               /* 5px — Figma exact */
}

/*
  Figma boxCountdown :
  - w 50px, h 49px (Figma exact)
  - pt 10px, pb 10px, pl 5px, pr 5px
  - border-radius 10px (--radius-l)
  - fill : blanc 80% lighten = couleur de fond claire sur brandTheme
  - effect DROP_SHADOW : offset(0,0), radius 30px, spread 0, rgba(0,0,0,0.38)

  Technique shadow :
  - ::before porte le background (fond clair)
  - ::after porte la box-shadow avec z-index:-1
    → l'ombre passe DERRIÈRE la box adjacente qui la masque naturellement
    → pas d'effet "boueux" dans les gaps
*/
.slider__countdown-box {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;                         /* espace serré entre valeur et label */
  width: 50px;
  height: 49px;                     /* Figma exact : 49px */
  padding: 10px var(--gap-xs);      /* 10px 5px */
  border-radius: var(--radius-l);   /* 10px */
  /* fond : blanc 80% en lighten sur brandTheme → bleu très clair */
  background: rgba(255, 255, 255, 0.82);
}

/* Shadow derrière chaque box — z-index:-1 pour passer sous la box voisine */
.slider__countdown-box::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.38); /* --shadow-countdown Figma exact */
  z-index: -1;
  pointer-events: none;
}

/*
  Valeur : Figma — Regular 24px, lh normal (pas 46px !)
  La line-height 46px était la hauteur du SLOT, pas du texte lui-même.
*/
.slider__countdown-value {
  font-family: var(--font-family-title);
  font-weight: 400;
  font-size: var(--font-size-3xl);  /* 24px */
  line-height: 1;                   /* compact — la box a une hauteur fixe */
  color: var(--text-base-primary);
  white-space: nowrap;
}

/*
  Label : Figma — Medium 10px, lh normal
*/
.slider__countdown-label {
  font-family: var(--font-family-body);
  font-weight: 500;
  font-size: var(--font-size-xs);   /* 10px */
  line-height: 1;
  color: var(--text-base-primary);
  white-space: nowrap;
}

/* ── Dots ── */
.slider__dots {
  position: absolute;
  right: var(--layout-side-padding);
  top: 50%; transform: translateY(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
}
.slider__dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--primitive-white-38);
}
.slider__dot--active { background: var(--primitive-white-100); }

/* ── Responsive ── */
@media (max-width: 767px) {
  /* Mobile — Figma : h 172px, px 10px, py 20px */
  .ds-slider { height: var(--slider-height-mobile); }  /* 172px */
  .slider__inner { padding: 20px var(--grid-margin-mobile); }
  .slider__title { font-size: var(--font-size-4xl); }  /* 30px — display/mobile approx */
  .slider__right { display: none; }                    /* countdown masqué */
  .slider__fade-left,
  .slider__fade-right { width: 60px; }
  .slider__dots { right: var(--grid-margin-mobile); }
}

@media (min-width: 768px) and (max-width: 1079px) {
  .slider__inner { padding: 30px var(--grid-margin-tablet); }
  .slider__fade-left,
  .slider__fade-right { width: 80px; }
  .slider__dots { right: var(--grid-margin-tablet); }
}

@media (min-width: 1080px) and (max-width: 1619px) {
  .slider__inner { padding: 30px var(--grid-margin-desktop-sm); }
  .slider__fade-left,
  .slider__fade-right { width: 80px; }
  .slider__dots { right: var(--grid-margin-desktop-sm); }
}
</style>
