<template>
  <section class="attendee-info">
    <h1 v-animate.title class="title">Пожалуйста, подтвердите свое присутствие</h1>
    <form class="attendee-info__form text" @submit.prevent>
      <base-input 
        v-animate 
        v-model="textInput" 
        :error="isError" 
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
          name="feedback" v-model="selectedOption"
          :error="isError"
        >
          {{ item.label }}
        </radio-button>
      </div>
      <base-button 
        v-animate 
        type="submit" 
        @click="validateForm" 
        :is-disabled="isDisabled"
      >
        Отправить
      </base-button>
    </form>
    <loader v-if="isLoading" />
  </section>
  <modal :is-open="isOpen" @close="isOpen = false" max-width="340px">
    <template #content>
      <div class="response">Ответ принят, спасибо <span>&#x2764;</span></div>
    </template>
  </modal>
</template>

<script setup>
import BaseButton from '@/components/atom/base-button/index.vue'
import BaseInput from '@/components/atom/base-input/index.vue'
import RadioButton from '@/components/atom/radio-button/index.vue'
import Modal from '@/components/atom/modal/index.vue'
import Loader from '@/components/atom/loader/index.vue'
import { ref } from 'vue'

const textInput = ref('')
const selectedOption = ref('')
const isLoading = ref(false)
const isOpen = ref(false)
const isDisabled = ref(false)
const isError = ref(false)

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
  if (textInput.value && selectedOption.value) {
    isError.value = false
    await sendInfo()
  } else {
    isError.value = true
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
        username: textInput.value,
        value: selectedOption.value
      })
    })
    if (response.ok) {
      isOpen.value = true
      isDisabled.value = true
    } else {
      alert('Произошла ошибка, попробуйте еще раз')
    }
  } catch (e) {
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
}

.response {
  font-family: sans-serif;
  font-size: 22px;
}
</style>
