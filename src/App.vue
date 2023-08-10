<template>
  <preloader color="#272526" v-if="isLoading" />
  <div class="wrapper">
    <main-page v-if="$platform.isMobile" />
    <plug-page v-else-if="$platform.isWeb || $platform.isTablet" />
  </div>
</template>

<script setup>
import Preloader from '@/components/atom/preloader/index.vue'
import MainPage from '@/components/pages/main/index.vue'
import PlugPage from '@/components/pages/plug/index.vue'
import { ref } from 'vue'

const isLoading = ref(true)

window.addEventListener('load', () => {
  document.documentElement.classList.add('loaded')
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  min-height: 100vh;
  background: url('@/assets/images/background.jpg') repeat;
}
</style>
