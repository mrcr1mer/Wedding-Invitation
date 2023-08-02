<template>
  <button @click="$emit('click')" class="button" :type="type" :style="{ '--color': color }">
    <slot>Отправить</slot>
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "#3c3f35"
  },
  type: {
    type: String,
    default: "button",
    validator(value) {
      return ["button", "submit", "clear"].includes(value)
    }
  }
})

defineEmits(["click"])
</script>

<style scoped lang="scss">
.button {
  padding: 20px;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: var(--color);
  color: #fff;
}
</style>
