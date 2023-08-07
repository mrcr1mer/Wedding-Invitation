<template>
  <section class="schedule">
    <h2 class="schedule__title">Программа</h2>
    <div class="schedule__items">
      <div v-for="item in firstDay" :key="item.id" class="schedule__item">
        <span class="schedule__time">{{ item.time }}</span>
        <div class="line"></div>
        <div class="schedule__content">
          <div class="schedule__label">{{ item.title }}</div>
          <div v-if="item.text" class="schedule__text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <!-- <h2 class="schedule__title small">23 марта</h2>
    <div class="schedule__items">
      <div v-for="item in secondDay" :key="item.id" class="schedule__item">
        <span class="schedule__time">{{ item.time }}</span>
        <div class="line"></div>
        <div class="schedule__content">
          <div class="schedule__label">{{ item.title }}</div>
          <div v-if="item.text" class="schedule__text">{{ item.text }}</div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
const firstDay = [
  {
    id: 1,
    time: '17:00',
    title: 'СБОР ГОСТЕЙ',
    text: ''
  },
  {
    id: 2,
    time: '17:30 ',
    title: 'НАЧАЛО ТОРЖЕСТВЕННОЙ ЦЕРЕМОНИИ',
    text: ''
  },
  {
    id: 3,
    time: '18:30',
    title: 'ОСНОВНАЯ ПРОГРАММА',
    text: ''
  },
  {
    id: 4,
    time: '23:30-00:00',
    title: 'ЗАВЕРШАЮЩАЯ ЧАСТЬ',
    text: ''
  },
  {
    id: 5,
    time: '00:00',
    title: 'АФТЕР-ПАТИ ДЛЯ ДРУЗЕЙ ',
    text: ''
  }
]

const secondDay = [
  {
    id: 1,
    time: '10:00',
    title: 'Завтрак'
  },
  {
    id: 2,
    time: '14:00',
    title: 'Выезд из отеля'
  }
]
</script>

<style lang="scss" scoped>
.schedule {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;

  &__title {
    font-size: 35px;
    border-bottom: 1.5px solid #000;
    text-transform: uppercase;

    &.small {
      width: fit-content;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__item {
    display: flex;
    gap: 15px;

    .line {
      height: 2px;
      flex: 0 0 20px;
      background-color: #000;
      transform: translateY(13px);
    }
  }

  &__time {
    font-size: 26px;
  }

  &__label {
    font-size: 26px;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__text {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-style: italic;
    line-height: 1.2;
    font-size: 18px;
  }
}
</style>
