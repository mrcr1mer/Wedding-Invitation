<template>
  <section class="dress-code">
    <h2 v-animate.title class="title">О дресс-коде</h2>
    <p v-animate class="text">
      Мы будем очень благодарны, если вы поддержите стиль и цвет нашей свадьбы в своих нарядах:
    </p>
    <div v-animate.title class="dress-code__colors">
      <div class="dress-code__colors-label text">Цвета:</div>
      <acceptable-colors class="_anim-item" :colors="colors" />
    </div>
    <p v-animate class="text">
      <span>Девушки: </span> коктейльные платья, такие, как будто вы собираетесь на самую крутую вечеринку!
    </p>
    <p v-animate class="text">
      <span>Мужчины: </span>костюм, рубашка, туфли (цвет черный, синий, бежевый, серый). Мужчины:
      костюм, рубашка, туфли (цвет черный, серый).
    </p>
    <p v-animate class="text"><span>Важно: </span> мы за современный стиль<span>&#x2764</span></p>
  </section>
</template>

<script setup>
import AcceptableColors from "@/components/atom/acceptable-colors/index.vue"

const colors = ["#ffd1ba", "#b8defb", "#a4ac7d"]
</script>

<style lang="scss" scoped>
.dress-code {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #3c3f35;
  color: #fff;

  &__colors-label {
    margin-bottom: 10px;
    font-weight: 500;
  }
}
</style>
