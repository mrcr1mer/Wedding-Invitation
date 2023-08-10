<template>
  <div class="radio-button">
    <input 
      type="radio" 
      class="radio-button__input" 
      :id="id" 
      :name="name" 
      :value="value" 
      :disabled="isDisabled"
      :checked="value === modelValue"
      @change="$emit('update:modelValue', value)" />
    <label :for="id" :class="['radio-button__check-mark', { error: error }]">
      <slot />
    </label>
  </div>
</template>

<script setup>
defineProps({
  id: [String, Number],
  name: String,
  value: [String, Number],
  modelValue: [String, Number],
  color: {
    type: String,
    default: '#3C3F35'
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
</script>

<style lang="scss" scoped>
.radio-button {
  position: relative;

  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;

    &:checked~ {
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

    &.error {
      &::before {
        border: 1.5px solid red;
      }
    }

    &::before {
      content: '';
      align-self: flex-start;
      flex: 0 0 24px;
      height: 24px;
      border: 1.5px solid v-bind(color);
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 16px;
      height: 16px;
      background-color: v-bind(color);
      transform: scale(0);
      transition: transform 0.2s ease-in-out;
      border-radius: 50%;
    }
  }
}
</style>
