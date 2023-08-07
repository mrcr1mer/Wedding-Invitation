<template>
  <div ref="marquee" class="marquee">
    <span ref="item" class="marquee__content">{{ text }}</span>
    <span v-for="itemText in items" :key="itemText" class="marquee__content">{{ itemText }}</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

const marquee = ref(null)
const item = ref(null)

let marqueeWidth = 0
let itemsWidth = 0
const items = ref([])

const updateMarquee = () => {
  itemsWidth += item.value.offsetWidth

  if (marqueeWidth * 2 > itemsWidth) {
    items.value.push(props.text)
    updateMarquee()
  }
}

onMounted(() => {
  marqueeWidth = marquee.value.offsetWidth
  updateMarquee()
})
</script>

<style scoped lang="scss">
.marquee {
  width: 100%;
  display: flex;
  gap: 30px;
  animation: animate-text 5s linear infinite;

  @keyframes animate-text {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-320px);
    }
  }

  &__content {
    position: relative;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -15px;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: #000;
      transform: translate(0, -50%);
    }
  }
}
</style>
