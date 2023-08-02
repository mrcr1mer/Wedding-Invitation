<template>
  <div class="acceptable-colors">
    <div
      class="acceptable-colors__item"
      v-for="(color, i) in colors"
      :key="i"
      :style="{ '--color': color }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  colors: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.acceptable-colors {
  display: flex;
  gap: 20px;

  &__item {
    height: 80px;
    width: 60px;
    background-color: var(--color);
    border-top-left-radius: 40%;
    border: 0.5px solid #fff;
  }
}
</style>
