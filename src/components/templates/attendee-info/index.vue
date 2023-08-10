<template>
  <section class="attendee-info">
    <h1 v-animate.title class="title">Пожалуйста, подтвердите свое присутствие</h1>
    <form class="attendee-info__form text" @submit.prevent>
      <base-input
        v-animate
        v-model="textInput"
        :error="inputError"
        :is-disabled="isDisabled"
        placeholder="Имя и Фамилия"
      />
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
          :error="radioError"
          :is-disabled="isDisabled"
        >
          {{ item.label }}
        </radio-button>
      </div>
      <base-button v-animate type="submit" @click="validateForm" :is-disabled="isDisabled">
        Отправить
      </base-button>
    </form>
    <opacity-loader v-if="isLoading" />
  </section>
  <modal :is-open="isOpened" @close="isOpened = false" max-width="340px">
    <template #content>
      <div class="response">Ответ принят. Cпасибо<span>&#x2764;</span></div>
    </template>
  </modal>
</template>

<script setup>
import BaseButton from '@/components/atom/base-button/index.vue'
import BaseInput from '@/components/atom/base-input/index.vue'
import RadioButton from '@/components/atom/radio-button/index.vue'
import Modal from '@/components/atom/modal/index.vue'
import OpacityLoader from '@/components/atom/loader/index.vue'
import { ref } from 'vue'

const textInput = ref('')
const selectedOption = ref('')
const isLoading = ref(false)
const isOpened = ref(false)
const isDisabled = ref(false)
const inputError = ref(false)
const radioError = ref(false)

const optionsInfo = [
  {
    label: 'Я буду/мы будем ',
    value: 'yes'
  },
  {
    label: 'К сожалению не получится присутствовать',
    value: 'no'
  }
]

const validateForm = async () => {
  const hasTextInput = textInput.value.trim() !== ''
  const hasSelectedOption = selectedOption.value !== ''

  inputError.value = !hasTextInput
  radioError.value = !hasSelectedOption

  if (hasTextInput && hasSelectedOption) {
    await sendInfo()
  }
}

const sendInfo = async () => {
  try {
    isLoading.value = true
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        username: textInput.value.trim(),
        value: selectedOption.value
      })
    })
    if (response.ok) {
      isOpened.value = true
      isDisabled.value = true
    } else {
      alert('Произошла ошибка, попробуйте еще раз')
    }
  } catch (e) {
    alert('Произошла ошибка, попробуйте еще раз')
    console.error(e)
  } finally {
    isLoading.value = false
  }
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

  &__label {
    font-weight: 500;
  }
}

.response {
  font-family: sans-serif;
  font-size: 22px;
  font-weight: 500;
}
</style>
