<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.app {
  overflow: hidden;
  min-height: 100vh;
  //background: url("@/assets/images/background.png") repeat;
  //filter: contrast(0%) brightness(160%) blur(1px);
}
</style>
