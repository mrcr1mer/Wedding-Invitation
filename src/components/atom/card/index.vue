<template>
  <div :class="['card', { mark: mark }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  mark: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.card {
  height: 1000px;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 50px;

  &.mark {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      background-color: #000;
      border-radius: 0 20px 0 20px;
    }
  }
}
</style>
