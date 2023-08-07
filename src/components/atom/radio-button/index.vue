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

<style lang="scss" scoped>
.radio-button {
  position: relative;

  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;

    &:checked ~ {
      .radio-button__check-mark {
        &::after {
          transform: scale(1);
        }
      }
    }
  }

  &__check-mark {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      flex: 0 0 20px;
      height: 20px;
      border: 1.5px solid rgb(60, 63, 53);
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 12px;
      height: 12px;
      background-color: rgb(60, 63, 53);
      transform: scale(0);
      transition: transform 0.2s ease-in-out;
      border-radius: 50%;
    }
  }
}
</style>
