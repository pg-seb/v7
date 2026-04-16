<template>
  <div class="ds-calendar-line">
    <div class="ds-calendar-line__grid">
      <div
        v-for="(box, i) in calendarBoxes"
        :key="i"
        class="ds-calendar-box"
        :class="{
          'ds-calendar-box--featured': box.featured,
          'ds-calendar-box--empty':    box.empty,
          'ds-calendar-box--sold-out': box.soldOut,
        }"
      >
        <div class="ds-calendar-box__image">
          <DsImage :aspect-ratio="box.featured ? '2/1' : '3/2'" />
        </div>
        <div class="ds-calendar-box__content">
          <div class="ds-calendar-box__meta">
            <span class="ds-calendar-box__competition">{{ box.competition || 'SERIE A' }}</span>
            <span class="ds-calendar-box__day">{{ box.day || 'Day 5' }}</span>
          </div>
          <div class="ds-calendar-box__teams">
            <div class="ds-calendar-box__team">
              <div class="ds-calendar-box__team-logo img-placeholder" />
              <span class="ds-calendar-box__team-name">{{ box.homeTeam || 'HOME' }}</span>
            </div>
            <span class="ds-calendar-box__vs">vs</span>
            <div class="ds-calendar-box__team">
              <div class="ds-calendar-box__team-logo img-placeholder" />
              <span class="ds-calendar-box__team-name">{{ box.awayTeam || 'AWAY' }}</span>
            </div>
          </div>
          <div class="ds-calendar-box__date">
            <span>{{ box.date || 'Saturday 8 March' }}</span>
            <span>{{ box.time || '19H45 · ALLIANZ STADIUM' }}</span>
          </div>
          <div class="ds-calendar-box__actions">
            <span v-if="box.soldOut" class="ds-calendar-box__sold-out-label">SALES CLOSED</span>
            <DsButton v-else-if="!box.empty" size="sm">Buy</DsButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DsImage from '@/components/atoms/DsImage.vue'
import DsButton from '@/components/atoms/DsButton.vue'

defineProps({
  calendarBoxes: {
    type: Array,
    default: () => Array.from({ length: 11 }, (_, i) => ({
      competition: 'SERIE A',
      day:         `Day ${i + 1}`,
      homeTeam:    'JUVENTUS',
      awayTeam:    ['INTER', 'MILAN', 'NAPOLI', 'ROMA', 'LAZIO'][i % 5],
      date:        'Saturday 8 March',
      time:        '19H45 · ALLIANZ STADIUM',
      featured:    i === 0,
      soldOut:     i === 2 || i === 5,
      empty:       false,
    }))
  },
})
</script>

<style scoped>
.ds-calendar-line__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-md);
}

/* Featured box spans 2 columns */
.ds-calendar-box--featured {
  grid-column: span 2;
}

.ds-calendar-box {
  border: 1px solid var(--color-stroke);
  border-radius: var(--radius-s);
  overflow: hidden;
  background: var(--color-surface-primary);
  transition: box-shadow var(--transition-base);
}
.ds-calendar-box:hover {
  box-shadow: var(--shadow-md);
}

.ds-calendar-box__image { overflow: hidden; }

.ds-calendar-box__content {
  padding: var(--gap-sm);
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
}

.ds-calendar-box__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.ds-calendar-box__teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xs);
}
.ds-calendar-box__team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-xxs);
  flex: 1;
}
.ds-calendar-box__team-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.ds-calendar-box__team-name {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-align: center;
}
.ds-calendar-box__vs {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  flex-shrink: 0;
}

.ds-calendar-box__date {
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-align: center;
}

.ds-calendar-box__actions {
  display: flex;
  justify-content: center;
  padding-top: var(--gap-xxs);
}

.ds-calendar-box__sold-out-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-disabled);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.ds-calendar-box--sold-out {
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .ds-calendar-line__grid { grid-template-columns: repeat(2, 1fr); }
  .ds-calendar-box--featured { grid-column: span 2; }
}
@media (max-width: 768px) {
  .ds-calendar-line__grid { grid-template-columns: 1fr; }
  .ds-calendar-box--featured { grid-column: span 1; }
}
</style>
