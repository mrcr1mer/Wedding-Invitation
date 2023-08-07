<template>
  <div class="attendee-info">
    <h1 class="attendee-info__title">Пожалуйста, подтвердите свое присутствие</h1>
    <form class="attendee-info__form" @submit.prevent>
      <base-input v-model="textInput" placeholder="Ваша фамилия и имя" />
      <div class="attendee-info__options">
        <span>Присутствие?</span>
        <radio-button
          v-for="item in optionsInfo"
          :id="item.id"
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

const textInput = ref('')
const selectedOption = ref('')

const optionsInfo = [
  {
    label: 'Я прийду/мы придём',
    value: 'yes',
    id: 0
  },
  {
    label: 'Придти не получится',
    value: 'no',
    id: 1
  },
  {
    label: 'Скажу ответ чуть позже',
    value: 'later',
    id: 2
  }
]
const sendInfo = (data) => {
  console.log(data)
}
</script>

<style lang="scss" scoped>
.attendee-info {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
