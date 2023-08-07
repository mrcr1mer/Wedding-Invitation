<template>
  <div class="dress-code">
    <acceptable-colors :colors="colors" />
  </div>
</template>

<script setup>
import AcceptableColors from '@/components/atom/acceptable-colors/index.vue'

const colors = ['#fff', '#000']
</script>

<style lang="scss" scoped></style>
