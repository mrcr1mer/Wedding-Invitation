<template>
  <greeting />
  <event-details />
</template>

<script setup>
import Greeting from "@/components/templates/greeting/index.vue"
import EventDetails from "@/components/templates/event-details/index.vue"
</script>

<style scoped lang="scss">  
section {
  &:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
