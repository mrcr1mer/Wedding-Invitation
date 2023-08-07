<template>
  <div class="radio-button">
    <input
      type="radio"
      class="radio-button__input"
      :id="id"
      :name="name"
      :value="value"
      :checked="value === modelValue"
      @change="$emit('update:modelValue', value)"
    />
    <label :for="id" class="radio-button__check-mark">
      <slot />
    </label>
  </div>
</template>

<script setup>
defineProps({
  id: [String, Number],
  name: String,
  value: [String, Number],
  modelValue: [String, Number]
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
