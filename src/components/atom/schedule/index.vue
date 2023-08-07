<template>
  <div class="attendee-info">
    <h2 class="attendee-info__title">Пожалуйста, подтвердите свое присутствие</h2>
    <form class="attendee-info__form" @submit.prevent>
      <base-input v-model="inputText" placeholder="Введите вашу фамилию и имя" />
      <base-button type="submit" @click="clickButton" />
    </form>
  </div>
</template>

<script setup>
import BaseButton from '@/components/atom/base-button/index.vue'
import BaseInput from '@/components/atom/base-input/index.vue'
import { ref } from "vue"

const inputText = ref('')
const clickButton = () => {
  console.log('123')
}
</script>

<style lang="scss" scoped>
.attendee-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
