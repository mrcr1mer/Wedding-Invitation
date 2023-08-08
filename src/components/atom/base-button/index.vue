<template>
  <button class="button" @click="$emit('click')" :type="type">
    <slot>Отправить</slot>
  </button>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: '#3c3f35'
  },
  type: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'submit', 'clear'].includes(value)
    }
  }
})

defineEmits(['click'])
</script>

<style scoped lang="scss">
.button {
  font-family: Roboto+Slab, serif;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  font-size: 1.5rem;
  background-color: v-bind(bgColor);
  color: #fff;
}
</style>
