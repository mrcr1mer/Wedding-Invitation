<template>
  <section class="notes">
    <div class="notes__date">
      <h2 class="date-title">До свадьбы осталось</h2>
      <countdown-timer target-date="2023-08-27" />
    </div>
    <card mark border-radius="20px">
      <h2 class="notes__title">Организационные моменты</h2>
      <p class="notes__text">
        Сразу после свадьбы мы планируем путешествие, поэтому просим вас не дарить цветы. Мы просто
        не успеем ими насладиться. Вместо цветов мы будем рады бутылочке вашего любимого вина, это
        будет еще одним хорошим поводом встретиться и разделить его вместе.
      </p>
      <p class="notes__text">
        В день свадьбы или до по любым вопросам можно обращаться к нашему свадебному организатору:
      </p>
      <p class="notes__text">Мария, тел.: +7 (929) 100-86-77</p>
    </card>
  </section>
</template>

<script setup>
import CountdownTimer from '@/components/atom/countdown-timer/index.vue'
import Card from '@/components/atom/card/index.vue'
</script>

<style lang="scss" scoped>
.notes {
  padding: 40px 20px;
  text-align: left;

  &__date {
    margin-bottom: 40px;
  }

  .date-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .card {
    text-align: left;
  }

  &__title {
    text-transform: uppercase;
    font-size: 26px;
    margin-bottom: 20px;
  }

  &__text {
    font-family: Roboto, sans-serif;
    font-style: italic;
    font-weight: 300;
    line-height: 1.3;
    font-size: 18px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
