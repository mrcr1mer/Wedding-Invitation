<template>
  <input
    type="text"
    :class="['input', {error: error}]"
    :placeholder="inputPlaceholder"
    :value="modelValue"
    :disabled="isDisabled"
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
  },
  error: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

// eslint-disable-next-line vue/no-setup-props-destructure
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
  font-family: Roboto+Slab, serif;
  background: none;
  height: 30px;
  border-bottom: 1px solid #000;
  font-size: 1.25rem;

  &.error {
    border-bottom: 1px solid red;
  }

  &::placeholder,
  &:-moz-placeholder {
    opacity: 0.7;
    font-weight: 300;
    font-style: italic;
  }
}
</style>
