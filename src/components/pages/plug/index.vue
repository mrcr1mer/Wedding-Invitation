<template>
  <div class="plug">
    <div class="plug__text">
      Пожалуйста откройте <br> приглашение с телефона
    </div>
    <span class="plug__text">&#x2764;</span>
  </div>
</template>

<style lang="scss" scoped>
.plug {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  &__text {
    font-family: serif;
    font-size: 50px;
    text-align: center;
    line-height: 1.2;
    text-transform: uppercase;
  }
}
</style>
