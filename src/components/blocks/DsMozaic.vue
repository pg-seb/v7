<template>
  <div
    class="mozaic"
    :class="[
      imageFirst ? 'mozaic--image-first' : 'mozaic--content-first',
      `mozaic--h${height}`
    ]"
    :style="{ height: height + 'px' }"
  >
    <!-- Content side -->
    <div class="mozaic__content-side">
      <div class="mozaic__content-block">
        <div class="mozaic__text-container">
          <p v-if="title" class="mozaic__title">{{ title }}</p>
          <p v-if="description" class="mozaic__desc">{{ description }}</p>
        </div>
        <DsButton v-if="ctaLabel">{{ ctaLabel }}</DsButton>
      </div>
    </div>

    <!-- Image side -->
    <div class="mozaic__image-side">
      <DsImage :src="imageSrc" :alt="imageAlt" class="mozaic__image" />
    </div>
  </div>
</template>

<script setup>
import DsImage  from '@/components/atoms/DsImage.vue'
import DsButton from '@/components/atoms/DsButton.vue'

defineProps({
  imageSrc:   { type: String,  default: null },
  imageAlt:   { type: String,  default: '' },
  imageFirst: { type: Boolean, default: false },
  title:      { type: String,  default: 'Title (LG)' },
  description:{ type: String,  default: '' },
  ctaLabel:   { type: String,  default: '' },
  height:     { type: Number,  default: 350 }, // 350px or 572px
})
</script>

<style scoped>
/* Exact Figma:
   - h 350px (or 572px for tall variant)
   - 2 cols flex, each flex-1
   - content: bg surfacePrimary, p 20px, gap 40px, justify-center, items-start
   - image: border 1px black/12, object-cover, absolute inset
   - title: title/lg = Medium, 20px, lh 28px, UPPERCASE, text/base/primary
   - desc: body/lg-reg Regular 15px lh 20px
   - button: brandTheme bg, h 44px, px 14px, py 12px, rounded shape/shape(4px), text white Medium 14px UPPERCASE
*/
.mozaic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--surface-base-surfacePrimary);
  flex-shrink: 0;
}

/* Content side */
.mozaic__content-side {
  flex: 1 0 0;
  display: flex;
  align-items: center;
  align-self: stretch;
}

.mozaic__content-block {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg); /* 40px */
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: var(--gap-md); /* 20px */
  background-color: var(--surface-base-surfacePrimary);
  min-height: 1px;
  min-width: 1px;
}

.mozaic__text-container {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md); /* 20px */
  align-items: flex-start;
  color: var(--text-base-primary);
  width: 100%;
  flex-shrink: 0;
}

/* title/lg: Medium, 20px, lh 28px, UPPERCASE */
.mozaic__title {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-2xl); /* 20px */
  line-height: 28px;
  text-transform: uppercase;
  width: 100%;
}

/* body/lg-reg: Regular, 15px, lh 20px */
.mozaic__desc {
  font-family: var(--font-family-body);
  font-weight: 400;
  font-size: var(--font-size-lg); /* 15px */
  line-height: var(--font-line-height-md); /* 20px */
  width: 100%;
}

/* Image side */
.mozaic__image-side {
  flex: 1 0 0;
  display: flex;
  align-items: center;
  align-self: stretch;
}

.mozaic__image {
  flex: 1 0 0;
  height: 100%;
  min-height: 350px;
  min-width: 1px;
  position: relative;
  border: 1px solid var(--primitive-black-12);
}

/* Image-first: swap order */
.mozaic--image-first .mozaic__content-side { order: 2; }
.mozaic--image-first .mozaic__image-side   { order: 1; }

.mozaic--content-first .mozaic__content-side { order: 1; }
.mozaic--content-first .mozaic__image-side   { order: 2; }

@media (max-width: 768px) {
  .mozaic {
    flex-direction: column;
    height: auto !important;
  }
  .mozaic__content-side,
  .mozaic__image-side { width: 100%; flex: none; align-self: auto; }
  .mozaic__image { min-height: 200px; }
  .mozaic--image-first .mozaic__content-side { order: 2; }
  .mozaic--image-first .mozaic__image-side   { order: 1; }
  .mozaic--content-first .mozaic__content-side { order: 2; }
  .mozaic--content-first .mozaic__image-side   { order: 1; }
}
</style>
