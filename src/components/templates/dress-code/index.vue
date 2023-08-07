<template>
  <section class="dress-code">
    <h2 class="dress-code__title">О дресс-коде</h2>
    <div class="dress-code__text">
      Мы будем очень благодарны, если вы поддержите стиль и цвет нашей свадьбы в своих нарядах:
    </div>
    <acceptable-colors :colors="colors" />
    <div class="dress-code__text">
      Девушки: коктейльные платья, такие, как будто вы собираетесь на самую крутую вечеринку!
    </div>
    <div class="dress-code__text">
      Мужчины: костюм, рубашка, туфли (цвет черный, серый).
    </div>
  </section>
</template>

<script setup>
import AcceptableColors from '@/components/atom/acceptable-colors/index.vue'

const colors = ['#fff', '#afb6bf', '#e3cec5', '#363638']
</script>

<style lang="scss" scoped>
.dress-code {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
  background-color: #3c3f35;
  color: #fff;

  &__title {
    text-transform: uppercase;
    font-size: 26px;
  }

  &__text {
    font-family: Roboto, sans-serif;
    font-style: italic;
    font-weight: 300;
    line-height: 1.2;
    font-size: 18px;
  }
}
</style>
