<template>
  <section class="notes">
    <div class="notes__date">
      <h2 class="date-title">До свадьбы осталось</h2>
      <countdown-timer target-date="2023-08-27" />
    </div>
    <card mark border-radius="20px">
      <h2 class="notes__title">Организационные моменты</h2>
      <p class="notes__text">
        Такой день бывает один раз и по возможности, мы искренне просим вас, отпроситься с работы на полдня в понедельник,
        чтобы чувствовать себя комфортно и присутствовать с нами до конца
      </p>
      <p class="notes__text">
        <span>ДЛЯ РОДСТВЕННИКОВ:</span> будет организован микро-автобус, который отвезет и привезет вас в город
      </p>
      <p class="notes__text">
        <span>ДЛЯ ДРУЗЕЙ:</span> На локацию можно вызвать Яндекс (время езды 30-40 минут)
        После основой части мы отправимся на афтер-пати к бассейну (поэтому если вы планируете купаться, просьба взять купальники/плавательные шорты) ВАЖНО! В одежде купаться к сожалению запрошено 🚫 
      </p>
      <p class="notes__text">
        Для тех, кто хочет остаться, на территории есть номера и домики, их вы можете заранее забронировать, контакты предоставлю в личные сообщения
      </p>
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

    span {
      font-weight: 500;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}</style>
