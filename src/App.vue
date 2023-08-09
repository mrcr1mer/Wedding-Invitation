<template>
  <div class="wrapper">
    <main-page v-if="$platform.isMobile" />
    <plug-page v-else-if="$platform.isWeb || $platform.isTablet" />
  </div>
</template>

<script setup>
import MainPage from '@/components/pages/main/index.vue'
import PlugPage from '@/components/pages/plug/index.vue'
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  min-height: 100vh;
  background: url('@/assets/images/background.jpg') repeat;
}
</style>
