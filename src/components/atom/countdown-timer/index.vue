<template>
  <time v-if="timeLeft > 0" class="date" :datetime="targetDate">
    <span class="date__item">
      <strong>{{ formattedTime.days }}</strong>
      <span>дней</span>
    </span>
    <span class="colon">:</span>
    <span class="date__item">
      <strong>{{ formattedTime.hours }}</strong>
      <span>часов</span>
    </span>
    <span class="colon">:</span>
    <span class="date__item">
      <strong>{{ formattedTime.minutes }}</strong>
      <span>минут</span>
    </span>
    <span class="colon">:</span>
    <span class="date__item">
      <strong>{{ formattedTime.seconds }}</strong>
      <span>секунд</span>
    </span>
  </time>
  <strong v-else class="time-up">Время вышло!</strong>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const targetTimestamp = new Date(props.targetDate).getTime()
const currentTime = ref(new Date().getTime())
const timeLeft = ref(targetTimestamp - currentTime.value)

const formattedTime = computed(() => {
  if (!timeLeft.value) return

  const days = Math.floor(timeLeft.value / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0')
  const minutes = Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor((timeLeft.value % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, '0')
  return { days, hours, minutes, seconds }

})

const updateTimeLeft = () => {
  currentTime.value = new Date().getTime()
  timeLeft.value = targetTimestamp - currentTime.value
}

onMounted(() => {
  setInterval(updateTimeLeft, 1000)
})
</script>

<style scoped lang="scss">
.date {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.75rem;
    }

    span {
      font-size: 1.25rem;
    }
  }

  .colon {
    font-weight: 700;
    font-size: 1.75rem;
  }
}

.time-up {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}
</style>
