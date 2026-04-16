<template>
  <header class="ds-header container--fluid">
    <div class="ds-header__inner">
      <!-- Leading : hamburger + logo -->
      <div class="ds-header__leading">
        <button class="ds-header__menu" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M3 12h18M3 19h18"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <a href="/" class="ds-header__logo" aria-label="Home">
          <svg width="177" height="48" viewBox="0 0 177 48" fill="none">
            <rect width="177" height="48" fill="var(--brandTheme)"/>
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle"
              font-family="var(--font-family-title)" font-weight="700"
              font-size="18" fill="white">LOGO / TICKETSHOP</text>
          </svg>
        </a>
      </div>

      <!-- Trailing : lang, devise, compte, panier -->
      <div class="ds-header__trailing">
        <div class="ds-header__trailing-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2"/>
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" stroke-width="1.2"/>
            <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="1.2"/>
          </svg>
          <span class="ds-header__trailing-label">EN</span>
        </div>
        <div class="ds-header__trailing-item ds-header__trailing-item--desktop-only">
          <span class="ds-header__currency">€</span>
          <span class="ds-header__trailing-label">EUR</span>
        </div>
        <button class="ds-header__icon-btn" aria-label="Mon compte">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.2"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
              stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="ds-header__icon-btn" aria-label="Panier">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 2h2.5l2.5 12H19l2-8H6"
              stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="10" cy="18.5" r="1.5" fill="currentColor"/>
            <circle cx="17" cy="18.5" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
// Aucune prop device — le responsive est géré par CSS media queries
</script>

<style scoped>
/* Figma : h 88.147px, bg white, px 50px, shadow-header */
.ds-header {
  height: var(--header-height);   /* 88px */
  background-color: var(--surface-base-surfacePrimary);
  box-shadow: var(--shadow-header);
}

.ds-header__inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--layout-header-padding);  /* 0 50px */
}

.ds-header__leading {
  display: flex;
  align-items: center;
  gap: var(--gap-xl);  /* 50px */
  flex-shrink: 0;
}

.ds-header__menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  color: var(--text-base-primary);
  padding: 0;
}

.ds-header__logo { display: flex; align-items: center; }

.ds-header__trailing {
  display: flex;
  align-items: center;
  gap: var(--gap-lg);  /* 40px */
  flex-shrink: 0;
}

.ds-header__trailing-item {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--text-base-secondary);
  cursor: pointer;
}

.ds-header__trailing-label {
  font-family: var(--font-family-title);
  font-weight: 500;
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-md);
  color: var(--text-base-secondary);
  text-transform: uppercase;
  white-space: nowrap;
}

.ds-header__currency {
  font-size: var(--font-size-xl);
  color: var(--text-base-secondary);
}

.ds-header__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  color: var(--text-base-primary);
  padding: 0;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .ds-header__inner { padding: 0 var(--grid-margin-mobile); }   /* 0 10px */
  .ds-header__leading { gap: var(--gap-md); }                   /* 20px */
  .ds-header__trailing { gap: var(--gap-md); }
  .ds-header__trailing-item--desktop-only { display: none; }
}

@media (min-width: 768px) and (max-width: 1079px) {
  .ds-header__inner { padding: 0 var(--grid-margin-tablet); }   /* 0 20px */
}
</style>
