<template>
  <div class="acceptable-colors">
    <div class="acceptable-colors__item" v-for="(item, i) in colors" :key="i">
      <div class="acceptable-colors__color" :style="{ '--color': item.color }"></div>
      <span class="acceptable-colors__label">{{ item.label }}</span>
    </div>
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
  flex-wrap: wrap;
  gap: 20px;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__color {
    height: 80px;
    width: 60px;
    background-color: var(--color);
    border-top-left-radius: 40%;
    border: 0.5px solid #fff;
  }
}
</style>
