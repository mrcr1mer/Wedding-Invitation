<template>
  <preloader v-if="isLoading" />
  <div v-else class="wrapper">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Preloader from '@/components/atom/preloader/index.vue'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  window.addEventListener('load', () => {
    isLoading.value = false
  })
})
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  min-height: 100vh;
  background: url('@/assets/images/bg.png') repeat;
}
</style>
