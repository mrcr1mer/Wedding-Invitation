<template>
  <input
    type="text"
    class="input"
    :placeholder="inputPlaceholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="onInputFocus"
    @blur="onInputBlur"
  />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])

const inputPlaceholder = ref(props.placeholder)

const onInputFocus = () => {
  inputPlaceholder.value = ''
}

const onInputBlur = () => {
  if (!inputPlaceholder.value) {
    inputPlaceholder.value = props.placeholder
  }
}
</script>

<style lang="scss" scoped>
.input {
  height: 30px;
  border-bottom: 1px solid #000;

  &::placeholder,
  &:-moz-placeholder {
    opacity: 0.7;
    font-weight: 300;
  }
}
</style>
