<template>
  <section class="attendee-info">
    <h1 v-animate class="title">Пожалуйста, подтвердите свое присутствие</h1>
    <form class="attendee-info__form text" @submit.prevent>
      <base-input v-animate v-model="textInput" placeholder="Имя и Фамилия" />
      <div class="attendee-info__options">
        <div v-animate class="attendee-info__label">Присутствие?</div>
        <radio-button
          v-animate
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
      <base-button v-animate type="submit" @click="sendInfo"> Отправить</base-button>
    </form>
  </section>
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
    value: 'yes'
  },
  {
    label: 'Придти не получится',
    value: 'no'
  }
]
const sendInfo = (data) => {
  console.log(data)
}
</script>

<style lang="scss" scoped>
.attendee-info {
  padding-top: 0;

  .title {
    margin-bottom: 30px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
