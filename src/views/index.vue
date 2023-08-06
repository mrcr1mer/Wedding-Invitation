<template>
  <main class="page">
    <main-page v-if="$platform.isMobile" />
    <plug-page v-else-if="$platform.isWeb || $platform.isTablet"/>
  </main>
</template>

<script setup>
import MainPage from "@/components/pages/main/index.vue"
import PlugPage from "@/components/pages/plug/index.vue"
</script>

<style scoped lang="scss">
.page {
  padding: 20px;
}
</style>