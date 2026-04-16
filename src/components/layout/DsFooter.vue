<template>
  <footer class="ds-footer container--fluid">
    <!-- Main -->
    <div class="footer__main">
      <div class="footer__main-inner container">
        <div class="footer__brand">
          <div class="footer__logo">
            <svg width="140" height="38" viewBox="0 0 140 38" fill="none">
              <rect width="140" height="38" rx="2" fill="var(--brandTheme)"/>
              <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
                font-family="var(--font-family-title)" font-weight="700" font-size="16" fill="white">LOGO</text>
            </svg>
          </div>
          <a href="tel:+00025464009" class="footer__phone">+00 025464009</a>
        </div>

        <div class="footer__newsletter">
          <p class="footer__newsletter-label">Subscribe to our newsletter</p>
          <div class="footer__newsletter-form">
            <input type="email" placeholder="Your email" class="footer__input"/>
            <button class="footer__sub-btn">Subscribe</button>
          </div>
        </div>

        <div class="footer__links">
          <div class="footer__links-col">
            <a v-for="l in linksCol1" :key="l" href="#" class="footer__link">{{ l }}</a>
          </div>
          <div class="footer__links-col">
            <a v-for="l in linksCol2" :key="l" href="#" class="footer__link">{{ l }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="footer__bottom-inner container">
        <div class="footer__social">
          <button class="social-btn" aria-label="Facebook">f</button>
          <button class="social-btn" aria-label="Instagram">ig</button>
          <button class="social-btn" aria-label="Twitter">tw</button>
        </div>
        <p class="footer__copy">
          © 2025 Ticketshop Name. All rights reserved.
          All trademarks are the property of their respective owners.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  linksCol1: { type: Array, default: () => ['Tickets', 'Membership', 'Store', 'Museum'] },
  linksCol2: { type: Array, default: () => ['Legal Notice', 'Privacy Policy', 'Cookies'] },
})
</script>

<style scoped>
/* ── Main footer : rgba(0,0,0,0.87) ── */
.ds-footer { background: none; }

.footer__main {
  background-color: var(--primitive-black-87);
  padding: var(--gap-lg) 0;           /* 40px */
}

.footer__main-inner {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-xl);                 /* 50px */
}

.footer__brand {
  display: flex; flex-direction: column; gap: var(--gap-sm);
  flex-shrink: 0;
}

.footer__phone {
  font-size: var(--font-size-sm);
  color: var(--primitive-white-60);
}

.footer__newsletter { flex: 1; display: flex; flex-direction: column; gap: var(--gap-sm); }
.footer__newsletter-label { font-size: var(--font-size-sm); color: var(--primitive-white-60); margin: 0; }

.footer__newsletter-form { display: flex; gap: var(--gap-xs); }
.footer__input {
  flex: 1; height: 40px; padding: 0 var(--gap-sm);
  background: var(--primitive-white-12);
  border: 1px solid var(--primitive-white-20);
  border-radius: var(--radius-s);
  color: var(--primitive-white-100);
  font-size: var(--font-size-sm);
}
.footer__input::placeholder { color: var(--primitive-white-38); }
.footer__input:focus { border-color: var(--brandTheme); outline: none; }

.footer__sub-btn {
  height: 40px; padding: 0 var(--gap-md);
  background: var(--brandTheme); color: var(--text-buttons-primary);
  border-radius: var(--radius-s);
  font-size: var(--font-size-sm); font-weight: 600;
  position: relative; overflow: hidden;
}
.footer__sub-btn::after { content: ''; position: absolute; inset: 0; background: transparent; transition: background var(--transition-fast); }
.footer__sub-btn:hover::after { background: var(--overlay-brand-hover); }

.footer__links { display: flex; gap: var(--gap-xxl); flex-shrink: 0; }
.footer__links-col { display: flex; flex-direction: column; gap: var(--gap-md); }
.footer__link {
  font-size: var(--font-size-md); color: var(--primitive-white-60);
  transition: color var(--transition-fast);
}
.footer__link:hover { color: var(--primitive-white-100); }

/* ── Bottom bar : rgba(0,0,0,0.8) ── */
.footer__bottom {
  background-color: var(--primitive-black-80);
  height: 64px; display: flex; align-items: center;
}
.footer__bottom-inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: var(--gap-md);
}

.footer__social { display: flex; gap: var(--gap-xs); flex-shrink: 0; }
.social-btn {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid var(--primitive-white-38);
  color: var(--primitive-white-60);
  font-size: var(--font-size-xs); font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}

.footer__copy {
  font-size: var(--font-size-xs); color: var(--primitive-white-38); margin: 0;
  text-align: right; line-height: 1.4;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .footer__main-inner { flex-direction: column; gap: var(--gap-md); }
  .footer__links { gap: var(--gap-lg); }
  .footer__newsletter-form { flex-direction: column; }
  .footer__sub-btn { width: 100%; }
  .footer__copy { font-size: 10px; text-align: left; }
  .footer__bottom-inner { justify-content: flex-start; flex-wrap: wrap; }
}

@media (min-width: 768px) and (max-width: 1079px) {
  .footer__main-inner { flex-wrap: wrap; gap: var(--gap-md); }
  .footer__links { gap: var(--gap-lg); }
}
</style>
