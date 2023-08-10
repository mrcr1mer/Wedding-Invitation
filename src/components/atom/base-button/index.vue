<template>
  <button 
    :class="['button', {disabled: isDisabled}]" 
    @click="$emit('click')" 
    :type="type" 
    :disabled="isDisabled"
  >
    <slot>Отправить</slot>
  </button>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: '#3c3f35'
  },
  isDisabled: {
    type: Boolean,
    default: false
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
  font-size: 1.25rem;
  background-color: v-bind(bgColor);
  color: #fff;

  &.disabled {
    opacity: 0.7;
  }
}
</style>
