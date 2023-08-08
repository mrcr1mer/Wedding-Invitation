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
  },
  borderRadius: {
    type: String,
    default: '50px'
  }
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  text-align: center;
  overflow: hidden;
  border: 1px solid #000;
  padding: 20px;
  border-radius: v-bind(borderRadius);

  &.mark {
    position: relative;
    padding-top: 50px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      background-color: #000;
      border-radius: 0 calc( v-bind(borderRadius) - 1px) 0 v-bind(borderRadius);
    }
  }
}
</style>
