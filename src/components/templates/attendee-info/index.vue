<template>
  <div class="attendee-info">
    <h1 class="attendee-info__title">Пожалуйста, подтвердите свое присутствие</h1>
    <form class="attendee-info__form" @submit.prevent>
      <base-input v-model="textInput" placeholder="Имя и Фамилия" />
      <div class="attendee-info__options">
        <div class="attendee-info__label">Присутствие?</div>
        <radio-button
          v-for="item in optionsInfo"
          :key="item.value"
          :id="item.value"
          :value="item.value"
          name="feedback"
          v-model="selectedOption"
        >
          {{ item.label }}
        </radio-button>
      </div>
      <base-button type="submit" @click="sendInfo"> Отправить </base-button>
    </form>
  </div>
</template>

<script setup>
import BaseButton from '@/components/atom/base-button/index.vue'
import BaseInput from '@/components/atom/base-input/index.vue'
import RadioButton from '@/components/atom/radio-button/index.vue'
import { ref } from 'vue'
import Preloader from "@/App.vue"

const textInput = ref('')
const selectedOption = ref('')

const optionsInfo = [
  {
    label: 'Я прийду/мы придём',
    value: 'yes',
  },
  {
    label: 'Придти не получится',
    value: 'no',
  },
  {
    label: 'Скажу ответ чуть позже',
    value: 'later',
  }
]
const sendInfo = (data) => {
  console.log(data)
}
</script>

<style lang="scss" scoped>
.attendee-info {
  padding: 40px 20px;

  &__title {
    text-transform: uppercase;
    font-size: 26px;
    margin-bottom: 40px;
  }

  &__form {
    font-family: Roboto, sans-serif;
    font-style: italic;
    font-size: 18px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
