<template>
  <section class="notes">
    <div class="notes__date">
      <h2 v-animate.title class="date-title title">До свадьбы осталось</h2>
      <countdown-timer v-animate target-date="2023-08-27" />
    </div>
    <card mark border-radius="20px">
      <h2 v-animate.title class="notes__title title">Организационные моменты</h2>
      <p v-animate class="text">
        Такой день бывает один раз и по возможности, мы искренне просим вас, отпроситься с работы на
        полдня в понедельник, чтобы чувствовать себя комфортно и присутствовать с нами до конца.
      </p>
      <p v-animate class="text">
        <span>ДЛЯ РОДСТВЕННИКОВ:</span> будет организован микро-автобус, который отвезет и привезет
        вас в город.
      </p>
      <p v-animate class="text">
        <span>ДЛЯ ДРУЗЕЙ:</span> На локацию можно вызвать Яндекс (время езды 30-40 минут). После
        основой части мы отправимся на афтер-пати к бассейну (поэтому если вы планируете купаться, просьба взять
        купальники/плавательные шорты). ВАЖНО! В одежде купаться к сожалению запрещено<span>&#x1F6AB;</span>.
      </p>
      <p v-animate class="text">
        Для тех, кто хочет остаться, на территории есть номера и домики, их вы можете заранее
        забронировать. Для более подробной информации вы можете написать нам лично.
      </p>
    </card>
  </section>
</template>

<script setup>
import CountdownTimer from "@/components/atom/countdown-timer/index.vue"
import Card from "@/components/atom/card/index.vue"
</script>

<style lang="scss" scoped>
.notes {
  &__date {
    margin-bottom: 30px;
  }

  .date-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .card {
    text-align: left;
  }

  &__title {
    margin-bottom: 20px;

    @media (max-width: 375px) {
      @supports (hyphens: auto) {
        hyphens: auto;
      }

      @supports not(hyphens: auto) {
        word-break: break-word;
      }
    }
  }

  .text {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
