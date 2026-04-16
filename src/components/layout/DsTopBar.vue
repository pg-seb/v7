<template>
  <div class="ds-topbar container--fluid">
    <div class="ds-topbar__inner">
      <div class="ds-topbar__leading">
        <a v-for="link in leadingLinks" :key="link" href="#" class="ds-topbar__link">{{ link }}</a>
      </div>
      <div class="ds-topbar__trailing">
        <span class="ds-topbar__phone">{{ phone }}</span>
        <div class="ds-topbar__nav">
          <a v-for="link in trailingLinks" :key="link" href="#" class="ds-topbar__link">{{ link }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  phone:         { type: String, default: '+00 025 464 009' },
  leadingLinks:  { type: Array,  default: () => ['Link1', 'Link2', 'Link3'] },
  trailingLinks: { type: Array,  default: () => ['FR', 'EN'] },
})
</script>

<style scoped>
/* Figma : h 39px, bg rgba(0,0,0,0.87), px 50px, font Medium 14px UPPER blanc */
.ds-topbar {
  height: var(--topbar-height);   /* 39px */
  background-color: var(--color-bg-topbar);  /* rgba(0,0,0,0.87) */
}

.ds-topbar__inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--layout-header-padding);   /* 0 50px */
}

.ds-topbar__leading,
.ds-topbar__trailing {
  display: flex;
  align-items: center;
  gap: var(--gap-lg);  /* 40px */
}

.ds-topbar__trailing { gap: var(--gap-xl); } /* 50px */

.ds-topbar__phone {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-md);
  color: var(--primitive-white-100);
  text-transform: uppercase;
  white-space: nowrap;
}

.ds-topbar__nav { display: flex; align-items: center; gap: var(--gap-lg); }

.ds-topbar__link {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-md);
  color: var(--primitive-white-100);
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  transition: opacity var(--transition-fast);
}
.ds-topbar__link:hover { opacity: 0.7; }

/* Masqué sur mobile */
@media (max-width: 767px) {
  .ds-topbar { display: none; }
}
</style>
