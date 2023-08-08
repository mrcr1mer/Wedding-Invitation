<template>
  <section class="schedule">
    <h2 v-animate.title class="schedule__title title">Программа</h2>
    <div class="schedule__items">
      <div v-animate v-for="item in firstDay" :key="item.id" class="schedule__item">
        <span class="schedule__time">{{ item.time }}</span>
        <div class="line"></div>
        <div class="schedule__label">{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const firstDay = [
  {
    id: 1,
    time: '17:00',
    title: 'СБОР ГОСТЕЙ'
  },
  {
    id: 2,
    time: '17:30 ',
    title: 'НАЧАЛО ТОРЖЕСТВЕННОЙ ЦЕРЕМОНИИ'
  },
  {
    id: 3,
    time: '18:30',
    title: 'ОСНОВНАЯ ПРОГРАММА'
  },
  {
    id: 4,
    time: '23:30 00:00',
    title: 'ЗАВЕРШАЮЩАЯ ЧАСТЬ'
  },
  {
    id: 5,
    time: '00:00',
    title: 'АФТЕР-ПАТИ ДЛЯ ДРУЗЕЙ '
  }
]
</script>

<style lang="scss" scoped>
.schedule {
  &__title {
    border-bottom: 1.5px solid #000;
    margin-bottom: 30px;
  }

  &__item {
    display: flex;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    .line {
      height: 2px;
      flex: 0 0 20px;
      background-color: #000;
      transform: translateY(10px);
    }
  }

  &__time {
    font-size: 24px;
    flex: 0 0 60px;
  }

  &__label {
    font-size: 24px;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
